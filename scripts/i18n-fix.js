#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// 配置
const SRC_DIRS = [
  'apps/web/src',
  'apps/admin/src',
];
const I18N_DIR = 'packages/i18n';
const LOCALES_DIRS = [
  'apps/web/src/locales',
  'apps/admin/src/locales',
];
const LANGS = ['zh', 'en', 'fr'];

// 递归获取所有 tsx 文件
function getAllFiles(dir, ext, files = []) {
  if (!fs.existsSync(dir)) return files;
  for (const file of fs.readdirSync(dir)) {
    const full = path.join(dir, file);
    if (fs.statSync(full).isDirectory()) {
      getAllFiles(full, ext, files);
    } else if (file.endsWith(ext)) {
      files.push(full);
    }
  }
  return files;
}

// 提取所有 namespace 和 t(key) 用法
function extractNamespacesAndKeys(files) {
  const namespaces = new Set();
  const keys = {};
  const nsRegex = /namespace:\s*['"]([A-Za-z0-9_]+)['"]/g;
  const tRegex = /t\(['"]([A-Za-z0-9_\.]+)['"]\)/g;
  for (const file of files) {
    const content = fs.readFileSync(file, 'utf8');
    let m;
    while ((m = nsRegex.exec(content))) {
      namespaces.add(m[1]);
    }
    while ((m = tRegex.exec(content))) {
      const key = m[1];
      if (key.includes('.')) {
        const [ns, k] = key.split('.', 2);
        namespaces.add(ns);
        if (!keys[ns]) keys[ns] = new Set();
        keys[ns].add(k);
      } else {
        // 只 key，需结合 namespace
        if (!keys['__global']) keys['__global'] = new Set();
        keys['__global'].add(key);
      }
    }
  }
  return { namespaces, keys };
}

// 读取 JSON
function readJson(file) {
  if (!fs.existsSync(file)) return {};
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}
// 写入 JSON
function writeJson(file, obj) {
  fs.writeFileSync(file, JSON.stringify(obj, null, 2) + '\n', 'utf8');
}

// 补全语言包
function fixI18nFile(i18nFile, namespaces, keys) {
  let changed = false;
  let data = readJson(i18nFile);
  for (const ns of namespaces) {
    if (!data[ns]) {
      data[ns] = { meta_title: '', meta_description: '' };
      changed = true;
    }
    if (keys[ns]) {
      for (const k of keys[ns]) {
        if (!data[ns][k]) {
          data[ns][k] = '';
          changed = true;
        }
      }
    }
  }
  return changed ? data : null;
}

// 主流程
(async () => {
  // 1. 扫描所有 tsx 文件
  let allFiles = [];
  for (const dir of SRC_DIRS) {
    allFiles = allFiles.concat(getAllFiles(dir, '.tsx'));
  }
  // 2. 提取 namespace 和 key
  const { namespaces, keys } = extractNamespacesAndKeys(allFiles);
  // 3. 补全 packages/i18n/*.json
  for (const lang of LANGS) {
    const i18nFile = path.join(I18N_DIR, lang + '.json');
    const fixed = fixI18nFile(i18nFile, namespaces, keys);
    if (fixed) {
      writeJson(i18nFile, fixed);
      console.log(`[fix] ${i18nFile}`);
    }
  }
  // 4. 同步到各端 locales
  for (const dir of LOCALES_DIRS) {
    for (const lang of LANGS) {
      const src = path.join(I18N_DIR, lang + '.json');
      const dest = path.join(dir, lang + '.json');
      if (fs.existsSync(src) && fs.existsSync(path.dirname(dest))) {
        fs.copyFileSync(src, dest);
        console.log(`[sync] ${src} -> ${dest}`);
      }
    }
  }
  console.log('i18n check & fix done.');
})(); 