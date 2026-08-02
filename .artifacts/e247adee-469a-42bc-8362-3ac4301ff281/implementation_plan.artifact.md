# Fix 404 Errors on Sub-pages

The user reports 404 errors when accessing sub-pages. This is likely due to unmatched routes in `App.tsx`, especially for sub-categories of solutions (e.g., `/solutions/utility`) and missing routes for newly added links (e.g., `/docs`).

## Proposed Changes

### [Core Infrastructure]

#### [MODIFY] [App.tsx](file:///C:/workspace/JinBean-Web/apps/web/src/App.tsx)
- Update routes to handle sub-paths for `/solutions` using wildcards or explicit routes.
- Add placeholder routes for `/docs`, `/solutions/utility`, `/solutions/retail`, etc., to ensure they point to the relevant parent pages.
- Ensure all navigation paths used in `Header.tsx` and `Footer.tsx` are accounted for.

### [New Pages (Placeholders)]

#### [NEW] [Docs.tsx](file:///C:/workspace/JinBean-Web/apps/web/src/pages/Docs.tsx)
- Create a basic placeholder for the Documentation page.

## Verification Plan

### Manual Verification
- Click every link in the Header (Megamenu and flat nav) to confirm no 404s.
- Click every link in the Footer.
- Verify that sub-solutions (like `/solutions/utility`) correctly render the Solutions page (or their respective content).
