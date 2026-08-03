# Implementation Plan - Favicon Update & Blog Content Enrichment

This plan covers updating the browser tab icon to use the company logo and adding visual elements to the "AI in POS" industry insight article.

## Proposed Changes

### [Branding]

#### [MODIFY] [index.html](file:///C:/workspace/JinBean-Web/apps/web/index.html)
- Update the `<link rel="icon">` tag to point to the company logo.
- Update Open Graph and Twitter image tags.

#### [NEW] [logo.png](file:///C:/workspace/JinBean-Web/apps/web/public/logo.png)
- Ensure the logo exists in the `public` directory for static serving as a favicon/og-image.

### [Content Enrichment]

#### [MODIFY] [newsData.ts](file:///C:/workspace/JinBean-Web/apps/web/src/lib/newsData.ts)
- Insert three thematic image sections into the `AI在POS领域的探索与应用` article:
    1. **Customer Interaction**: Representing personalized recommendations.
    2. **Unmanned Terminal**: Representing autonomous retail.
    3. **Data/Cloud Bridge**: Representing backend efficiency and security.
- Use high-quality SVG or descriptive placeholders that match the site's tech aesthetic.

#### [MODIFY] [NewsDetail.tsx](file:///C:/workspace/JinBean-Web/apps/web/src/pages/NewsDetail.tsx)
- Refine the `prose` styling to ensure images within the blog post are well-aligned, have rounded corners, and include captions if provided.

## Verification Plan

### Manual Verification
- Check the browser tab to confirm the new favicon is displayed.
- Open the "AI in POS" article and verify the presence and layout of the three new images.
- Confirm both ZH and EN versions of the article include the visuals.
