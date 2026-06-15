# Mohammed Bilal – SEO Setup Guide

## Google Search Console

1. Go to https://search.google.com/search-console/
2. Click **Add Property** → choose **URL prefix**
3. Enter: `https://www.mohammedbilal.me`
4. Choose verification method: **HTML tag**
5. Copy the meta tag, e.g.:
   ```html
   <meta name="google-site-verification" content="YOUR_CODE_HERE" />
   ```
6. Add it to `index.html` inside `<head>` (replace YOUR_CODE_HERE)
7. Click **Verify**
8. After verification, go to **Sitemaps** and submit:
   ```
   https://www.mohammedbilal.me/sitemap.xml
   ```
9. Request indexing for the homepage via **URL Inspection Tool**

## Bing Webmaster Tools

1. Go to https://www.bing.com/webmasters/
2. Sign in and click **Add Site**
3. Enter: `https://www.mohammedbilal.me`
4. Choose **XML Sitemap** verification
5. Submit sitemap: `https://www.mohammedbilal.me/sitemap.xml`
6. Or use **Auto Import from Google Search Console** (fastest method)

## Add OG Image

Create a 1200×630 PNG image at `public/og-image.png` with:
- Name: Mohammed Bilal
- Title: Software Engineer | AI & ML Developer
- University: PES University, Bengaluru
- Background: dark teal/navy design

## Add Favicon

Place these files in `/public/`:
- `favicon.ico` (32×32)
- `apple-touch-icon.png` (180×180)

## Google Rich Results Test

After deployment, test at:
https://search.google.com/test/rich-results

Enter: https://www.mohammedbilal.me

## PageSpeed Insights

Test at:
https://pagespeed.web.dev/

Enter: https://www.mohammedbilal.me

Target scores:
- Performance: 95+
- SEO: 100
- Accessibility: 95+
- Best Practices: 100
