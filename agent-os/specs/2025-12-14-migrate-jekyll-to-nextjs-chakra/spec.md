# Specification: Migrate Jekyll to Next.js 16 with Chakra UI Pro

## Goal
Migrate the existing Jekyll-based personal portfolio and blog site to Next.js 16 with Chakra UI Pro, creating a modern developer portfolio with enhanced blog features while preserving all existing content and maintaining SEO continuity.

## User Stories
- As a site visitor, I want to view a modern developer portfolio landing page with featured projects and recent blog posts so that I can quickly understand Jai's expertise and experience
- As a blog reader, I want to read blog posts with enhanced features like table of contents, syntax highlighting with copy buttons, and estimated reading time so that I have a better reading experience
- As a recruiter, I want to view and download Jai's resume as a PDF so that I can review his qualifications offline

## Specific Requirements

**Next.js 16 Project Initialization**
- Initialize Next.js 16 project with App Router architecture using TypeScript for type safety
- Configure static site generation (SSG) for all pages to enable GitHub Pages deployment
- Set up project structure with `/app`, `/components`, `/lib`, `/data`, `/content`, `/public`, and `/styles` directories
- Configure `next.config.js` for static export with `output: 'export'` and proper basePath/assetPrefix for GitHub Pages
- Install Chakra UI Pro with proper licensing and integrate into Next.js app using App Router patterns
- Set up TypeScript with strict mode and proper type definitions for all components and data structures
- Configure ESLint and Prettier for code quality and consistent formatting

**Homepage/Landing Page Design**
- Create traditional developer portfolio layout with hero section displaying name, title (AI Agents / LLM / Product / Architect), professional photo/avatar
- Display tech stack icons grid showcasing primary technologies: TypeScript, Node.js, Next.js, React, Python, Ruby on Rails, Nest.js, FastAPI, LLM/AI frameworks
- Build featured projects grid section highlighting 3-4 notable projects from resume (PrimeCLM, JOFIN, Ascent IMDR, Al Arabia BMS) with project cards showing title, brief description, tech stack, and links
- Create recent blog posts preview section showing latest 3 posts with title, date, excerpt, and read more link
- Add clear call-to-action elements: "View Resume", "Read Blog", "Contact Me" buttons
- Implement responsive design that adapts hero layout for mobile, tablet, and desktop viewports
- Use Chakra UI Pro components for hero sections, feature grids, and card layouts

**Resume Page with Structured Data**
- Create TypeScript data file at `/data/resume.ts` with interfaces for Resume, Experience, Project, Education, TechnicalExpertise
- Structure resume data matching existing resume.html content: contact info, technical expertise, professional experience (chronological), education, additional links
- Build Resume page component using Chakra UI Pro layout components (Box, Stack, Grid, Heading, Text, List)
- Display professional experience with company name, role, dates, and nested project details with technologies used
- Include technical expertise section with categorized skills: Programming Languages, Frameworks, Markups
- Add downloadable PDF functionality using react-pdf or similar library to generate PDF from structured data on-demand
- Create "Download PDF" and "Print" buttons with print-friendly styling using CSS media queries
- Ensure mobile-responsive layout with proper text wrapping and spacing adjustments

**Blog Architecture with MDX**
- Set up MDX content directory at `/content/blog/` for blog post markdown files with JSX support
- Configure next-mdx-remote or similar MDX processor for parsing and rendering blog content
- Define frontmatter schema: title, date, categories, tags, meta_description, meta_keywords, slug, excerpt
- Build blog listing page at `/blog` showing all posts with preview cards including title, date, excerpt, categories/tags
- Implement pagination for blog listing (5-10 posts per page) with previous/next navigation
- Create dynamic blog post pages at `/blog/[slug]` that render MDX content with custom components
- Preserve existing Jekyll URL structure for SEO: `/2010/11/20/install-rails3-on-ubuntu/` format
- Build category and tag filtering functionality on blog listing page

**Enhanced Blog Post Features**
- Auto-generate table of contents from blog post headings (h2, h3) with smooth scroll navigation to sections
- Calculate and display estimated reading time based on word count (average 200 words per minute)
- Implement code syntax highlighting using Shiki or Prism.js with support for bash, ruby, javascript, typescript, python languages
- Add copy-to-clipboard buttons to all code blocks with visual feedback on successful copy
- Build related posts section at end of each post showing 3-4 posts with similar categories/tags
- Create social sharing buttons for Twitter, LinkedIn, Facebook with pre-populated share text and post URL
- Display post metadata: publish date, categories, tags, reading time at top of post
- Preserve original publish dates from Jekyll posts (2010-2011 posts maintain historical dates)

**Content Migration from Jekyll**
- Migrate 3 existing Jekyll blog posts from `_posts/` to MDX format in `/content/blog/`
- Convert Jekyll Liquid syntax (`{% highlight %}`) to MDX code blocks with proper language tags
- Update broken or outdated links in legacy posts during migration
- Preserve frontmatter metadata: title, categories, meta_keywords, meta_description
- Extract blog content from Jekyll layouts and convert to React components
- Migrate social media images (github.png, linkedin.png, twitter-x.png) to `/public/images/` directory
- Update About page content to modern format, refreshing outdated information (no longer at Eatwithus, now at Coducer)

**About Page Modernization**
- Create About page at `/about` with updated bio focused on current role as Technology Head at Coducer Technologies
- Highlight expertise areas: AI Agents, LLMs, Product Development, Architecture, Full-Stack Development
- Display social media links (GitHub, LinkedIn, Twitter/X) using icon components with proper external link handling
- Include contact information: email (haiiamjai@gmail.com), location (Bangalore, India)
- Add professional background section with brief career journey narrative
- Link to resume page and blog for more details
- Implement responsive layout with proper spacing and typography

**SEO and Performance Optimization**
- Create reusable SEO component with next/head for managing meta tags: title, description, keywords, viewport
- Implement Open Graph tags for social media sharing: og:title, og:description, og:image, og:url, og:type
- Add Twitter Card tags: twitter:card, twitter:site, twitter:title, twitter:description, twitter:image
- Generate JSON-LD structured data for blog posts (Article schema), person/author (Person schema), and breadcrumbs
- Create dynamic og:image generation for blog posts using @vercel/og or similar library
- Build sitemap.xml generation at build time including all pages and blog posts with proper lastmod dates
- Configure robots.txt to allow all crawlers with sitemap reference
- Generate RSS feed (atom.xml) for blog subscribers with full post content and metadata
- Integrate Google Analytics using next/script component with proper pageview tracking
- Optimize images using Next.js Image component with proper width, height, and loading attributes
- Enable lazy loading for below-the-fold content and images

**Navigation and Layout Components**
- Build main navigation header with site title/logo, navigation links (Home, Blog, About, Resume), and social media icons
- Create responsive mobile navigation with hamburger menu for mobile/tablet viewports
- Implement sticky header that remains visible during scroll with subtle shadow/border
- Build footer component with copyright notice, "Powered by Next.js" credits, and additional links
- Create main layout component wrapping all pages with consistent header/footer and content area
- Build blog-specific layout with additional sidebar or metadata sections for blog posts
- Ensure navigation highlights active page/route for user orientation

**Styling and Theme System**
- Configure Chakra UI Pro theme with custom colors matching professional tech/AI aesthetic: primary (blue/purple), secondary (gray), accent colors
- Define typography scale with proper heading hierarchy (h1-h6) and body text styles using system fonts or professional web fonts
- Set up spacing and sizing tokens for consistent padding, margins, and component dimensions
- Create responsive breakpoints for mobile (320px+), tablet (768px+), and desktop (1024px+) layouts
- Define color palette for light mode with good contrast ratios meeting WCAG 2.1 AA standards
- Configure focus states and keyboard navigation styles for accessibility
- Set up global CSS reset and base styles for consistent cross-browser rendering

**Deployment and Build Configuration**
- Configure GitHub Actions workflow for automated deployment to GitHub Pages on push to master branch
- Set up static export build process with `next export` command generating static HTML files
- Configure custom domain (jaikeerthi.in) with proper CNAME file in public directory
- Ensure all internal links use relative paths compatible with static export
- Set up build optimization: minification, tree-shaking, image optimization
- Configure asset prefix for proper asset loading on GitHub Pages subdomain
- Test build process locally and verify all pages render correctly as static HTML

## Visual Design

No visual mockups provided. Design based on:
- Chakra UI Pro component library patterns and best practices
- Modern developer portfolio conventions: clean hero sections, card-based layouts, clear typography hierarchy
- Professional aesthetic suitable for technical audience with focus on readability and usability
- Responsive design principles ensuring mobile-first approach with progressive enhancement

## Existing Code to Leverage

**Jekyll Site Configuration (_config.yml)**
- Extract site metadata: name (Jai Keerthi), social media usernames (github: kjaikeerthi, twitter: kjaikeerthi)
- Use pagination setting (5 posts) as reference for Next.js blog listing pagination
- Preserve highlighter configuration for syntax highlighting implementation in Next.js

**Resume HTML Structure (resume.html)**
- Extract complete professional experience data with company names, roles, dates, projects, and technologies
- Use existing section structure: Technical Expertise, Professional Experience, Educational Qualification, Additional Links
- Maintain chronological ordering of experience entries from most recent (Coducer 2021-Present) to oldest (Artha42 2010-2011)
- Preserve project titles, descriptions, and technology stacks for accurate data migration to TypeScript structure

**Jekyll Layouts (default.html, post.html)**
- Replicate header structure: site title, navigation menu (Home, About), social media icons
- Maintain footer structure: copyright notice, "Powered by" credits with links
- Use post layout pattern for blog post pages with content area and metadata display
- Preserve container/site wrapper pattern for consistent content width and centering

**Blog Posts Content (_posts/*.markdown)**
- Migrate frontmatter structure: layout, title, header, meta_keywords, meta_description, categories
- Convert Jekyll code highlighting syntax to MDX code blocks maintaining language specifications (bash, ruby, etc.)
- Preserve blog post content exactly as written with original publish dates
- Update broken external links during migration while maintaining internal link structure

**Social Media Assets (images/)**
- Reuse existing social media icons: github.png, linkedin.png, twitter-x.png for navigation and footer
- Maintain consistent icon sizing (32px) and styling approach from original Jekyll layout

## Out of Scope
- Tools page showcasing AI/development tools (deferred to later phase)
- Search functionality for blog posts (deferred to later phase)
- Comments system for blog posts (no Disqus, Utterances, or similar integration)
- Newsletter signup or email subscription features
- Dark mode toggle or theme switcher
- User authentication or admin panel for content management
- Creating new blog post content beyond migrating existing 3 posts
- Dynamic content management system or CMS integration (content managed via MDX files in repository)
- Custom domain SSL configuration (assumed already configured via GitHub Pages)
- Advanced analytics beyond Google Analytics (no Plausible, Mixpanel, etc.)
- A/B testing or experimentation framework
- Internationalization (i18n) or multi-language support
- Performance monitoring dashboards (no Sentry, Datadog setup)
- Automated link checking or content validation tools
- Migration of any draft posts or unpublished content not in current Jekyll site
