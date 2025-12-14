# Spec Requirements: Migrate Jekyll to Next.js 16 with Chakra UI Pro

## Initial Description
Initialize Next.js 16 with Chakra UI Pro integrated & migrate all the existing features from Jekyll to Next.js

## Requirements Discussion

### First Round Questions

**Q1:** I assume we'll modernize the content and design significantly beyond just migrating the existing Jekyll structure. The current site appears to be from 2010-2013 era with basic styling. Should we treat the existing content as legacy material that needs updating to match the AI-first development focus described in the product mission, or do you want to preserve some of the old blog posts for historical reference?

**Answer:** Preserve old blog posts

**Q2:** I'm thinking we'll build a completely new landing page based on the product mission (hero section highlighting AI Agents, LLMs, Product Development expertise) rather than just showing a blog list. The current Jekyll homepage is just a chronological blog feed. Should the new Next.js homepage be a dedicated landing/portfolio page with sections for "About", "Featured Work", "Recent Posts", and clear CTAs?

**Answer:** Start with a clean home page (developer focused)

**Q3:** The resume.html has extensive inline HTML and CSS. I assume we'll restructure this using Chakra UI Pro components and separate the resume data into a TypeScript/JSON data structure for maintainability. Should we create a dedicated resume data file (like `data/resume.ts`) that can be easily updated without touching component code?

**Answer:** Yes, create a dedicated resume data file

**Q4:** For the blog architecture, I assume we'll use MDX (markdown with JSX components) rather than plain markdown to allow rich interactive elements in posts. Should we include features like: table of contents, estimated reading time, code syntax highlighting with copy buttons, related posts suggestions, and social sharing buttons?

**Answer:** Yes, include table of contents, estimated reading time, code syntax highlighting with copy buttons, related posts suggestions, and social sharing buttons

**Q5:** I'm thinking we should implement a "Tools" page as specified in the roadmap, showcasing your daily-use AI/development tools. Do you have a specific list of tools you want to feature, and should they be categorized (AI/LLM Tools, Development Tools, Design Tools, Product Management Tools, etc.)?

**Answer:** Nothing for now (defer to later phase)

**Q6:** For the existing 3 blog posts (Rails installation tutorials from 2010-2011), should we migrate these legacy technical posts, archive them, or focus only on new AI-first development content going forward? These posts seem outdated compared to your current AI/LLM focus.

**Answer:** Migrate the existing posts

**Q7:** The Jekyll site has basic SEO (meta keywords, descriptions). I assume we'll implement comprehensive modern SEO including Open Graph tags, Twitter Cards, JSON-LD structured data for blog posts, and dynamic meta tags for all pages. Should we also add an RSS feed for the blog and implement a sitemap generation?

**Answer:** Yes, implement comprehensive SEO including Open Graph tags, Twitter Cards, JSON-LD structured data, RSS feed, and sitemap generation

**Q8:** What features or content should we explicitly NOT include in the initial migration? For example: comments system, newsletter signup, search functionality, dark mode toggle, or anything else you want to defer to later phases?

**Answer:** Add search functionality (note: this seems to be saying to INCLUDE search, not exclude it)

### Existing Code to Reference

No similar existing features identified for reference. This is a greenfield Next.js migration from an existing Jekyll static site.

### Follow-up Questions

**Follow-up 1:** Search Functionality Scope - You mentioned "Add search functionality" in question 8 about exclusions. Did you mean we SHOULD include search functionality in the initial migration, or should we EXCLUDE it and defer to a later phase?

**Answer:** Focus on later phase (EXCLUDE from initial migration)

**Follow-up 2:** Clean Home Page Design - You mentioned "developer focused" for the landing page. Should this be a traditional developer portfolio style (hero section with your photo/avatar, tech stack icons, featured projects grid, recent blog posts)?

**Answer:** Yes - traditional developer portfolio style (hero with photo/avatar, tech stack icons, featured projects grid, recent blog posts)

**Follow-up 3:** Blog Post Migration Details - For the 3 existing blog posts (2010-2011 Rails tutorials), should we:
- Migrate them as-is with original dates preserved, perhaps with a note that they're archived/legacy content?
- Update any outdated information or broken links before migration?
- Add any disclaimer or context that these are historical posts?

**Answer:**
- Migrate as-is with original dates: YES
- Update any outdated information or broken links before migration: YES
- Skip the PDF and only have the web version: NO

**Follow-up 4:** Resume PDF - The current site has a `resume.pdf` file. Should we continue to provide a downloadable PDF version, include a "Print/Download PDF" button, or skip the PDF?

**Answer:**
- Continue to provide a downloadable PDF version (generated from structured data): YES
- Include a "Print/Download PDF" button that generates PDF on-demand: YES

**Follow-up 5:** Chakra UI Pro License - Do you already have a Chakra UI Pro license, or do we need to plan for acquiring one? Also, do you have a preference for which Chakra UI Pro templates or component patterns we should use as a starting point?

**Answer:** Not provided - Assumption: User will provide Chakra UI Pro license or has one available for the project

## Visual Assets

### Files Provided:
No visual assets provided.

### Visual Insights:
No visual design files were provided. Design will be based on:
- Chakra UI Pro component library patterns
- Modern developer portfolio best practices
- Product mission focus on AI-first development expertise
- Clean, professional aesthetic suitable for a technical audience

## Requirements Summary

### Functional Requirements

**Core Pages & Features:**
- **Landing Page (Homepage)**: Traditional developer portfolio style with hero section (photo/avatar), tech stack icons display, featured projects grid, recent blog posts preview, and clear call-to-action elements
- **Resume Page**: Comprehensive resume display built from structured TypeScript data file (`data/resume.ts`) using Chakra UI Pro components, including downloadable PDF option and print-friendly "Download/Print PDF" button
- **Blog Listing Page**: Display all blog posts with previews, pagination, and filtering by categories/tags
- **Individual Blog Post Pages**: Full MDX support with enhanced features including:
  - Table of contents (auto-generated from headings)
  - Estimated reading time calculation
  - Code syntax highlighting with copy-to-clipboard buttons
  - Related posts suggestions at end of post
  - Social sharing buttons (Twitter, LinkedIn, etc.)
  - Original publish date preservation
- **About Page**: Profile information, background, social links, and contact information
- **Navigation**: Clean header with site navigation, social media links (GitHub, LinkedIn, Twitter/X)
- **Footer**: Copyright information, powered-by credits, additional links

**Content Migration:**
- Migrate all 3 existing Jekyll blog posts (2010-2011 Rails tutorials) as-is with original dates preserved
- Update any outdated information or broken links in legacy posts during migration
- No disclaimer needed for historical posts - they stand as-is
- Preserve existing static assets (images, resume PDF as reference)
- Convert Jekyll Liquid templates to Next.js React components
- Convert Jekyll layouts to Next.js layout components

**Blog Architecture:**
- MDX-based content authoring (markdown with JSX component support)
- Frontmatter metadata support (title, date, categories, tags, meta description, keywords)
- Syntax highlighting for code blocks using Shiki or Prism
- Category and tag taxonomy for content organization
- RSS feed generation for blog subscribers
- Dynamic sitemap generation

**SEO & Performance:**
- Comprehensive meta tags for all pages (title, description, keywords)
- Open Graph tags for social media sharing (Facebook, LinkedIn)
- Twitter Card tags for Twitter sharing
- JSON-LD structured data markup for blog posts, person/author, breadcrumbs
- Dynamic og:image generation for blog posts
- Sitemap.xml generation
- Robots.txt configuration
- RSS feed for blog
- Google Analytics integration
- Performance optimization: Next.js Image component, lazy loading, static generation where possible

**Resume Features:**
- Structured resume data in TypeScript file (`data/resume.ts`)
- Sections: Professional Experience, Technical Expertise, Notable Projects, Education, Additional Links
- Downloadable PDF version (auto-generated from structured data)
- Print-friendly styling
- "Download PDF" and "Print" buttons
- Mobile-responsive layout

**Design & UI:**
- Chakra UI Pro components and theme system
- Professional, clean developer portfolio aesthetic
- Fully responsive design (mobile, tablet, desktop)
- Consistent typography and spacing
- Professional color scheme aligned with tech/AI focus
- Social media icons (GitHub, LinkedIn, Twitter/X)
- Smooth transitions and interactions

### Reusability Opportunities

No existing Next.js or React codebase to reference. This is a complete migration from Jekyll to Next.js. However, opportunities for reusable patterns include:

- **Component Library**: Build reusable Chakra UI-based components (BlogCard, ProjectCard, TechStackIcon, SocialLinks, etc.)
- **Layout System**: Create reusable layout components (MainLayout, BlogLayout) that can be extended
- **SEO Component**: Create reusable SEO component for consistent meta tag management across pages
- **MDX Components**: Build custom MDX components (CodeBlock, Callout, ImageWithCaption) that can be used in blog posts
- **Data Structures**: TypeScript interfaces for Resume, BlogPost, Project data that ensure type safety

### Scope Boundaries

**In Scope:**
- Next.js 16 project initialization with TypeScript
- Chakra UI Pro installation and configuration
- Homepage/Landing page with developer portfolio design
- Resume page with structured data and PDF generation
- Blog listing and individual post pages with MDX support
- About page migration
- Migration of 3 existing Jekyll blog posts with link updates
- Enhanced blog features (TOC, reading time, syntax highlighting, related posts, social sharing)
- Comprehensive SEO implementation (meta tags, Open Graph, Twitter Cards, JSON-LD)
- RSS feed and sitemap generation
- Navigation and footer components
- Social media integration
- Google Analytics integration
- Responsive design for all devices
- Static site generation (SSG) configuration for optimal performance
- Deployment configuration for GitHub Pages

**Out of Scope (Deferred to Later Phases):**
- Tools page (showcase of AI/development tools)
- Search functionality (client-side or server-side)
- Comments system for blog posts
- Newsletter signup/subscription feature
- Dark mode toggle
- Blog post content authoring (creating new posts beyond migration)
- Custom domain SSL configuration (assumed already configured)
- Additional pages beyond core pages listed above
- User authentication or admin panel
- Dynamic content management system

### Technical Considerations

**Technology Stack:**
- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript for type safety
- **UI Library**: Chakra UI Pro (licensed premium component library)
- **Content**: MDX for blog posts (markdown with JSX)
- **Styling**: Chakra UI's CSS-in-JS system
- **Code Highlighting**: Shiki (preferred) or Prism.js
- **SEO**: next-seo package or custom implementation
- **Analytics**: Google Analytics via Next.js Script component
- **RSS Generation**: Custom RSS feed generation or next-rss package
- **PDF Generation**: React-pdf or similar library for resume PDF generation
- **Icons**: Chakra UI icons or React Icons
- **Date Handling**: date-fns for date formatting
- **Hosting**: GitHub Pages with static export
- **Custom Domain**: jaikeerthi.in (already configured)

**Existing Site Analysis:**
- Current Jekyll site structure:
  - `_config.yml`: Site configuration
  - `_layouts/`: default.html, post.html
  - `_posts/`: 3 markdown blog posts
  - `_includes/`: analytics.html
  - `css/`: main.css, syntax.css
  - `images/`: social media icons (github.png, linkedin.png, twitter-x.png)
  - Root pages: index.html (blog listing), about.html, resume.html, 404.html
  - Static files: atom.xml, sitemap.xml, robots.txt, CNAME, resume.pdf

**Migration Strategy:**
- Convert Jekyll Liquid templates to React components
- Transform Jekyll layouts to Next.js layouts
- Convert markdown posts to MDX format
- Extract resume HTML into structured TypeScript data
- Recreate CSS styling using Chakra UI theme system
- Preserve URLs for blog posts to maintain SEO (same slug structure)
- Set up GitHub Actions for automated deployment to GitHub Pages

**Chakra UI Pro Considerations:**
- Assumption: Chakra UI Pro license is available or will be acquired
- Use Chakra UI Pro components for professional, polished UI
- Leverage pre-built patterns for hero sections, feature grids, cards
- Customize Chakra UI theme to match brand colors and typography preferences
- Ensure all components are accessible (ARIA labels, keyboard navigation)

**Performance Goals:**
- Static site generation (SSG) for all pages where possible
- Optimized images using Next.js Image component
- Minimal JavaScript bundle size
- Fast Time to First Byte (TTFB)
- Good Core Web Vitals scores (LCP, FID, CLS)
- Lighthouse score: 90+ for Performance, Accessibility, Best Practices, SEO

**Content Preservation:**
- All existing blog posts migrated with original dates
- Update broken links and outdated information during migration
- Maintain same URL structure for blog posts (for SEO continuity)
- Preserve social media links and external references
- Keep existing analytics tracking (migrate to new GA property if needed)

**Browser & Device Support:**
- Modern browsers (Chrome, Firefox, Safari, Edge - latest 2 versions)
- Mobile-first responsive design
- Tablet and desktop optimizations
- Touch-friendly interactions
- Accessible to screen readers and keyboard navigation

**Compliance & Standards:**
- Follow accessibility standards (WCAG 2.1 AA)
- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images
- Descriptive link text
- Color contrast requirements
