const fs = require('fs');
const path = require('path');

const webAppDir = 'apps/web/src';

function fixFile(filePath) {
  if (!fs.existsSync(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  
  // Comment out server-side imports
  content = content.replace(
    /import\s+\{[^}]*getTranslations[^}]*\}\s+from\s+['"]next-intl\/server['"];?/g,
    (match) => `// ${match}`
  );
  
  content = content.replace(
    /import\s+\{[^}]*setRequestLocale[^}]*\}\s+from\s+['"]next-intl\/server['"];?/g,
    (match) => `// ${match}`
  );
  
  // Comment out getTranslations calls
  content = content.replace(
    /const\s+t\s*=\s*await\s+getTranslations\([^)]*\);?/g,
    (match) => `// ${match}`
  );
  
  // Comment out setRequestLocale calls
  content = content.replace(
    /setRequestLocale\([^)]*\);?/g,
    (match) => `// ${match}`
  );
  
  // Replace translation usage with hardcoded text
  content = content.replace(/\{\(t\s+as\s+any\)\('([^']+)'\)\}/g, (match, key) => {
    const replacements = {
      'home': 'Home',
      'services': 'Services',
      'community': 'Community',
      'blog': 'Blog',
      'about': 'About',
      'join': 'Join',
      'login': 'Login',
      'register': 'Register',
      'Dashboard.hello_message': 'Hello from Dashboard',
      'meta_title': 'JinBean - Home',
      'meta_description': 'Your trusted platform for housekeeping services and community building',
      'hero.description': 'Your trusted platform for housekeeping services and community building',
      'hero.download_app': 'Download App',
      'hero.learn_more': 'Learn More',
      'services.title': 'Our Services',
      'services.housekeeping.title': 'Housekeeping Services',
      'services.housekeeping.description': 'Professional cleaning and maintenance services for your home',
      'services.tools.title': 'Tools & Equipment',
      'services.tools.description': 'High-quality tools and equipment for all your needs',
      'services.community.title': 'Community Building',
      'services.community.description': 'Connect with neighbors and build a stronger community',
      'join.title': 'Join Our Community',
      'join.description': 'Be part of something bigger',
      'join.cta': 'Get Started',
      'community.title': 'Community Stories',
      'community.posts.post1.author': 'Zhang Wei',
      'community.posts.post1.time': '2 hours ago',
      'community.posts.post1.content': 'Great experience with the housekeeping service!',
      'community.posts.post2.author': 'Li Ming',
      'community.posts.post2.time': '1 day ago',
      'community.posts.post2.content': 'The tools are excellent quality and very affordable.',
      'community.posts.post3.author': 'Wang Fang',
      'community.posts.post3.time': '3 days ago',
      'community.posts.post3.content': 'Love the community features and how easy it is to connect with neighbors.'
    };
    return replacements[key] || key;
  });
  
  // Replace simple t() calls
  content = content.replace(/\{t\('([^']+)'\)\}/g, (match, key) => {
    const replacements = {
      'home': 'Home',
      'services': 'Services',
      'community': 'Community',
      'blog': 'Blog',
      'about': 'About',
      'join': 'Join',
      'login': 'Login',
      'register': 'Register'
    };
    return `{${replacements[key] || key}}`;
  });
  
  if (content !== fs.readFileSync(filePath, 'utf8')) {
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
    modified = true;
  }
  
  return modified;
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  let modified = false;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      modified = walkDir(filePath) || modified;
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      modified = fixFile(filePath) || modified;
    }
  }
  
  return modified;
}

console.log('Fixing server-side imports in web app...');
const modified = walkDir(webAppDir);
console.log(modified ? 'All files fixed!' : 'No files needed fixing.'); 