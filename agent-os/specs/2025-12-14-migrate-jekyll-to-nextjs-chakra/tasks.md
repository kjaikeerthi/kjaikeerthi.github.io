# Task Breakdown: Migrate Jekyll to Next.js 16 with Chakra UI Pro

## Overview
Total Task Groups: 10
Estimated Total Tasks: 70+

This migration project transforms the existing Jekyll-based portfolio site into a modern Next.js 16 application with Chakra UI Pro, enhanced blog features, and comprehensive SEO optimization while preserving all existing content and maintaining URL continuity.

## Task List

---

### Group 1: Project Initialization and Configuration
**Dependencies:** None
**Specialization:** Full-Stack Setup / DevOps

#### Task 1.0: Initialize Next.js 16 project with TypeScript
**Description:** Set up the foundational Next.js 16 project with App Router architecture and TypeScript configuration.

- [x] 1.1 Create new Next.js 16 project with TypeScript
  - Run `npx create-next-app@latest` with TypeScript, ESLint, and App Router options
  - Verify Next.js 16 is installed (check package.json)
  - Initialize git repository if not already initialized

- [x] 1.2 Configure project structure
  - Create `/app` directory for App Router pages
  - Create `/components` directory for React components
  - Create `/lib` directory for utility functions and helpers
  - Create `/data` directory for structured data files (resume, projects)
  - Create `/content/blog` directory for MDX blog posts
  - Create `/public` directory for static assets (images, icons, CNAME)
  - Create `/styles` directory for global styles and theme configuration

- [x] 1.3 Configure TypeScript with strict mode
  - Update `tsconfig.json` with strict mode enabled
  - Add path aliases: `@/components`, `@/lib`, `@/data`, `@/content`, `@/styles`
  - Configure module resolution for App Router compatibility
  - Add type definition files for MDX and custom modules

- [x] 1.4 Set up ESLint and Prettier
  - Configure ESLint with Next.js recommended rules
  - Install and configure Prettier for code formatting
  - Add `.prettierrc` with consistent formatting rules (2-space indent, single quotes, trailing commas)
  - Create `.prettierignore` for build directories
  - Add npm scripts: `lint`, `format`, `type-check`

- [x] 1.5 Configure next.config.js for static export and GitHub Pages
  - Set `output: 'export'` for static site generation
  - Configure `basePath` and `assetPrefix` for GitHub Pages subdomain if needed
  - Add `images.unoptimized: true` for static export compatibility
  - Configure trailing slashes and link handling for static export
  - Add support for MDX files (configure webpack or use @next/mdx)

- [x] 1.6 Write 2-5 focused tests for project configuration
  - Test that TypeScript configuration compiles without errors
  - Test that path aliases resolve correctly
  - Test that static export builds successfully
  - Verify required directories exist

- [x] 1.7 Verify project initialization
  - Run `npm run build` to verify build succeeds
  - Run `npm run type-check` to verify TypeScript compilation
  - Run `npm run lint` to verify linting passes
  - Run the 2-5 tests written in 1.6
  - Commit initial project setup

**Acceptance Criteria:**
- Next.js 16 project initialized with TypeScript
- All required directories created
- ESLint and Prettier configured and passing
- Static export configuration working
- Initial tests pass
- Project builds successfully

---

### Group 2: Chakra UI Pro Integration
**Dependencies:** Group 1
**Specialization:** Frontend / UI Setup

#### Task 2.0: Install and configure Chakra UI Pro
**Description:** Integrate Chakra UI Pro component library and set up the theme system.

- [ ] 2.1 Install Chakra UI Pro dependencies
  - Install `@chakra-ui/react` and `@chakra-ui/next-js` for Next.js 13+ App Router support
  - Install `@emotion/react` and `@emotion/styled` (required by Chakra)
  - Install `framer-motion` for animations
  - Verify Chakra UI Pro license and install Pro components package if separate

- [ ] 2.2 Set up Chakra UI providers for App Router
  - Create `app/providers.tsx` with ChakraProvider
  - Wrap app in providers in `app/layout.tsx`
  - Configure Chakra UI cache provider for App Router SSR
  - Test that Chakra UI components render correctly

- [ ] 2.3 Create custom Chakra UI theme
  - Create `/styles/theme.ts` with custom theme configuration
  - Define color palette: primary (blue/purple for tech/AI), secondary (gray), accent colors
  - Configure typography scale with heading hierarchy (h1-h6) and body text styles
  - Set up spacing and sizing tokens for consistent padding/margins
  - Define responsive breakpoints: mobile (320px+), tablet (768px+), desktop (1024px+)
  - Configure focus states and keyboard navigation styles for accessibility
  - Ensure color contrast meets WCAG 2.1 AA standards

- [ ] 2.4 Create global styles and CSS reset
  - Create `/styles/globals.css` with CSS reset
  - Add base styles for html, body, and common elements
  - Configure font loading (system fonts or web fonts)
  - Add print-specific styles for resume page
  - Import global styles in root layout

- [ ] 2.5 Test Chakra UI integration
  - Create a test page with various Chakra UI components
  - Verify theme customization applies correctly
  - Test responsive breakpoints work as expected
  - Verify dark mode is disabled (out of scope)

- [ ] 2.6 Write 2-5 focused tests for Chakra UI setup
  - Test that ChakraProvider renders without errors
  - Test that custom theme values are accessible
  - Test that responsive breakpoints work correctly
  - Verify component styling renders as expected

- [ ] 2.7 Verify Chakra UI integration
  - Run `npm run build` to verify build with Chakra UI
  - Run the 2-5 tests written in 2.6
  - Visually test theme in browser
  - Commit Chakra UI setup

**Acceptance Criteria:**
- Chakra UI Pro installed and configured
- Custom theme created with brand colors and typography
- Global styles and CSS reset applied
- Responsive breakpoints working
- Chakra UI tests pass
- No console errors related to Chakra UI

---

### Group 3: Core Layout Components
**Dependencies:** Group 2
**Specialization:** Frontend / UI Development

#### Task 3.0: Build reusable layout components
**Description:** Create the main layout structure including header, footer, and navigation.

- [ ] 3.1 Create MainLayout component
  - Create `/components/layouts/MainLayout.tsx`
  - Implement layout structure: header, main content area, footer
  - Use Chakra UI Box, Container, and Flex components
  - Add proper semantic HTML (header, main, footer tags)
  - Ensure consistent max-width and centering for content
  - Make layout responsive for mobile, tablet, desktop

- [ ] 3.2 Build Header component with navigation
  - Create `/components/Header.tsx`
  - Display site title/logo (link to homepage)
  - Create navigation menu: Home, Blog, About, Resume links
  - Add social media icons: GitHub, LinkedIn, Twitter/X (link to external profiles)
  - Implement sticky header that remains visible during scroll
  - Add subtle shadow/border on scroll
  - Highlight active page/route in navigation

- [ ] 3.3 Implement responsive mobile navigation
  - Create hamburger menu icon for mobile/tablet viewports (<768px)
  - Build mobile menu drawer/modal using Chakra UI Drawer or Menu
  - Ensure touch-friendly tap targets (min 44x44px)
  - Animate menu open/close transitions
  - Close menu on route navigation
  - Make menu accessible with keyboard navigation

- [ ] 3.4 Build Footer component
  - Create `/components/Footer.tsx`
  - Display copyright notice with current year
  - Add "Powered by Next.js" credit with link
  - Include additional links (Privacy, Terms if applicable)
  - Display social media icons (reuse from header)
  - Ensure responsive layout (stack on mobile)
  - Style with subtle background color/border

- [ ] 3.5 Create BlogLayout component
  - Create `/components/layouts/BlogLayout.tsx`
  - Extend MainLayout with blog-specific features
  - Add container for blog post content with optimal reading width (600-700px)
  - Include space for table of contents sidebar (desktop only)
  - Add breadcrumb navigation (Home > Blog > Post Title)
  - Implement responsive layout that adapts for mobile

- [ ] 3.6 Migrate and optimize social media icons
  - Copy social media icons from Jekyll `/images/` to `/public/images/`
  - Create `/components/SocialLinks.tsx` component
  - Use Next.js Image component for optimized loading
  - Add proper alt text for accessibility
  - Support icon sizing via props (32px default)
  - Add hover effects and transitions

- [ ] 3.7 Write 3-6 focused tests for layout components
  - Test MainLayout renders header, main, footer correctly
  - Test Header navigation links are present and correct
  - Test mobile menu opens/closes on click
  - Test Footer displays copyright and links
  - Test active route highlighting in navigation
  - Test responsive breakpoints for mobile menu

- [ ] 3.8 Verify layout components
  - Run the 3-6 tests written in 3.7
  - Visually test layouts in browser at different viewport sizes
  - Test keyboard navigation and accessibility
  - Verify sticky header behavior on scroll
  - Commit layout components

**Acceptance Criteria:**
- MainLayout and BlogLayout components created
- Header with navigation and social links working
- Responsive mobile navigation functional
- Footer component displaying correct information
- Layout tests pass
- Layouts responsive across all breakpoints
- Sticky header working correctly

---

### Group 4: Resume Data Structure and Page
**Dependencies:** Group 3
**Specialization:** Data Modeling / Frontend Development

#### Task 4.0: Create resume data structure and page
**Description:** Extract resume content from Jekyll HTML into structured TypeScript data and build a resume page with PDF generation capability.

- [ ] 4.1 Define TypeScript interfaces for resume data
  - Create `/data/resume.ts`
  - Define `Resume` interface with all sections
  - Define `Experience` interface: company, role, dates, projects[], location
  - Define `Project` interface: title, description, technologies[]
  - Define `TechnicalExpertise` interface: category, skills[]
  - Define `Education` interface: degree, institution, dates, location
  - Define `ContactInfo` interface: name, title, email, location, social links

- [ ] 4.2 Extract and structure resume data from resume.html
  - Parse existing `resume.html` content
  - Extract contact information: name, title, email, location
  - Extract technical expertise: Programming Languages, Frameworks, Markups
  - Extract professional experience in chronological order (most recent first):
    - Coducer Technologies (2021-Present) - Technology Head
    - Eatwithus (2016-2021) - VP of Engineering
    - Artha42 (2010-2011) - Full-stack Engineer
  - Extract projects for each role with descriptions and technologies
  - Extract education information
  - Extract additional links (LinkedIn, GitHub, Twitter)
  - Populate TypeScript data structure with all extracted data

- [ ] 4.3 Create Resume page component
  - Create `/app/resume/page.tsx`
  - Import resume data from `/data/resume.ts`
  - Use Chakra UI layout components: Box, Stack, Grid, VStack, HStack
  - Display contact information in header section
  - Render technical expertise section with categorized skills
  - Display professional experience with company, role, dates
  - Show nested project details under each role with technologies
  - Render education section
  - Add links to social profiles and external resources
  - Use proper heading hierarchy (h1, h2, h3)

- [ ] 4.4 Implement responsive design for resume page
  - Ensure mobile-responsive layout (stack columns on mobile)
  - Optimize text wrapping and spacing for small screens
  - Test on mobile (320px+), tablet (768px+), desktop (1024px+)
  - Adjust font sizes for readability on all devices
  - Ensure touch-friendly interactive elements

- [ ] 4.5 Add print-friendly styling
  - Create print-specific CSS in global styles
  - Use `@media print` queries to optimize for printing
  - Remove unnecessary elements (navigation, footer) from print view
  - Ensure proper page breaks for multi-page resumes
  - Optimize fonts and sizing for printed output
  - Test print preview in browser

- [ ] 4.6 Implement PDF generation functionality
  - Install `react-pdf` or `@react-pdf/renderer` library
  - Create `/lib/generateResumePDF.ts` utility function
  - Generate PDF from resume data structure (not from HTML)
  - Style PDF to match web resume layout
  - Add "Download PDF" button to resume page
  - Implement download handler that triggers PDF generation
  - Add loading state while PDF generates
  - Test PDF generation in browser

- [ ] 4.7 Add "Print" button functionality
  - Add "Print" button to resume page
  - Implement print handler using `window.print()`
  - Ensure print styles apply when printing
  - Add print icon from Chakra UI or React Icons
  - Test print functionality in browser

- [ ] 4.8 Write 3-6 focused tests for resume functionality
  - Test resume data structure validates correctly
  - Test Resume page renders all sections
  - Test contact information displays correctly
  - Test PDF generation creates valid PDF
  - Test print button triggers print dialog
  - Test responsive layout at different breakpoints

- [ ] 4.9 Verify resume page functionality
  - Run the 3-6 tests written in 4.8
  - Visually verify resume page in browser
  - Test PDF download generates correct file
  - Test print preview shows correct layout
  - Test responsive design on multiple devices
  - Commit resume data and page

**Acceptance Criteria:**
- Resume data extracted into TypeScript structure
- Resume page displays all content correctly
- Responsive design works on all devices
- PDF generation creates downloadable resume
- Print functionality works with optimized styles
- Resume tests pass
- All resume content migrated from Jekyll

---

### Group 5: MDX Blog Architecture
**Dependencies:** Group 3
**Specialization:** Content Engineering / Full-Stack Development

#### Task 5.0: Set up MDX blog infrastructure
**Description:** Configure MDX processing, content directory structure, and blog listing/detail pages.

- [ ] 5.1 Install and configure MDX dependencies
  - Install `next-mdx-remote` or `@next/mdx` for MDX processing
  - Install `gray-matter` for frontmatter parsing
  - Install `remark` and `rehype` plugins for markdown processing
  - Install `reading-time` for estimated reading time calculation
  - Install `date-fns` for date formatting
  - Configure MDX in `next.config.js` if using @next/mdx

- [ ] 5.2 Define blog post frontmatter schema
  - Create `/lib/blog.types.ts` with TypeScript interfaces
  - Define `BlogPost` interface: title, date, slug, categories[], tags[], meta_description, meta_keywords, excerpt, content, readingTime
  - Define `BlogPostFrontmatter` interface for frontmatter-only data
  - Create validation schema for frontmatter (optional: use Zod)

- [ ] 5.3 Create blog content utilities
  - Create `/lib/blog.ts` with helper functions
  - Implement `getAllBlogPosts()` to read all MDX files from `/content/blog/`
  - Implement `getBlogPostBySlug(slug)` to get single post with parsed content
  - Implement `getBlogPostsByCategory(category)` for filtering
  - Implement `getBlogPostsByTag(tag)` for tag filtering
  - Implement `getRelatedPosts(post)` to find posts with similar tags/categories
  - Add reading time calculation using `reading-time` library
  - Sort posts by date (newest first)

- [ ] 5.4 Create blog listing page
  - Create `/app/blog/page.tsx`
  - Fetch all blog posts using `getAllBlogPosts()`
  - Display blog posts as cards with: title, date, excerpt, categories, tags
  - Use Chakra UI Card or custom BlogCard component
  - Implement grid layout (1 column mobile, 2 columns tablet, 3 columns desktop)
  - Add "Read More" link to each card
  - Show post count at top of page
  - Ensure responsive design

- [ ] 5.5 Implement blog post pagination
  - Add pagination logic to blog listing page
  - Display 5-10 posts per page (match Jekyll pagination setting)
  - Create pagination controls: Previous, Next, page numbers
  - Use URL query parameters for page state (?page=2)
  - Highlight current page in pagination
  - Disable/style Previous on page 1, Next on last page
  - Ensure pagination works with static export

- [ ] 5.6 Add category and tag filtering
  - Create category/tag filter UI on blog listing page
  - Display all available categories and tags
  - Allow users to click category/tag to filter posts
  - Update URL with selected filter (e.g., ?category=rails)
  - Show "Clear filters" button when filters active
  - Display filtered post count
  - Ensure filters work with pagination

- [ ] 5.7 Create dynamic blog post page
  - Create `/app/blog/[...slug]/page.tsx` for dynamic routes
  - Support Jekyll URL structure: `/2010/11/20/install-rails3-on-ubuntu/`
  - Parse slug to extract year, month, day, and post slug
  - Fetch post content using `getBlogPostBySlug()`
  - Render MDX content using next-mdx-remote or similar
  - Display post metadata: title, date, categories, tags, reading time
  - Use BlogLayout for consistent layout
  - Add breadcrumb navigation

- [ ] 5.8 Configure custom MDX components
  - Create `/components/mdx/` directory for custom MDX components
  - Create custom heading components (h1-h6) with anchor links
  - Create custom link component with external link handling
  - Create custom image component using Next.js Image
  - Create custom code block component (placeholder, enhanced in Group 6)
  - Create custom blockquote, list, and table components
  - Map components in MDX provider/renderer

- [ ] 5.9 Write 4-8 focused tests for blog infrastructure
  - Test `getAllBlogPosts()` returns all posts sorted by date
  - Test `getBlogPostBySlug()` returns correct post
  - Test blog listing page renders post cards
  - Test pagination controls work correctly
  - Test category/tag filtering filters posts
  - Test dynamic blog post page renders MDX content
  - Test Jekyll URL structure routes correctly
  - Test reading time calculation is accurate

- [ ] 5.10 Verify blog architecture
  - Run the 4-8 tests written in 5.9
  - Manually test blog listing page in browser
  - Test pagination navigation
  - Test category/tag filtering
  - Test individual blog post pages render
  - Verify responsive design on all devices
  - Commit blog infrastructure

**Acceptance Criteria:**
- MDX processing configured and working
- Blog listing page displays all posts with pagination
- Category and tag filtering functional
- Dynamic blog post pages render MDX content
- Jekyll URL structure preserved
- Reading time calculated and displayed
- Blog tests pass
- Responsive design working

---

### Group 6: Enhanced Blog Post Features
**Dependencies:** Group 5
**Specialization:** Frontend Development / UX Enhancement

#### Task 6.0: Add enhanced blog post features
**Description:** Implement table of contents, syntax highlighting with copy buttons, related posts, and social sharing.

- [ ] 6.1 Implement table of contents (TOC) generation
  - Create `/components/blog/TableOfContents.tsx` component
  - Parse blog post headings (h2, h3) from MDX content
  - Generate TOC list with links to heading anchors
  - Add unique IDs to heading components for anchor links
  - Implement smooth scroll navigation to sections
  - Style TOC with Chakra UI List components
  - Position TOC in sidebar on desktop, above content on mobile
  - Highlight active section in TOC based on scroll position (optional)

- [ ] 6.2 Set up code syntax highlighting
  - Install `shiki` (preferred) or `prismjs` for syntax highlighting
  - Configure supported languages: bash, ruby, javascript, typescript, python
  - Create `/components/mdx/CodeBlock.tsx` component
  - Apply syntax highlighting to code blocks
  - Add line numbers to code blocks
  - Style code blocks with theme matching site design
  - Ensure responsive design (horizontal scroll on mobile)

- [ ] 6.3 Add copy-to-clipboard functionality for code blocks
  - Install `react-copy-to-clipboard` or implement custom copy function
  - Add "Copy" button to each code block (top-right corner)
  - Implement copy handler that copies code to clipboard
  - Show visual feedback on successful copy (checkmark, "Copied!" message)
  - Add timeout to reset button state after 2-3 seconds
  - Ensure copy button is keyboard accessible
  - Style button with Chakra UI Button component

- [ ] 6.4 Build related posts section
  - Create `/components/blog/RelatedPosts.tsx` component
  - Use `getRelatedPosts()` utility to find related posts
  - Display 3-4 related posts at end of blog post
  - Show post cards with: title, date, excerpt (brief)
  - Calculate relation based on shared categories/tags
  - Link to related post pages
  - Use Chakra UI Card or Grid for layout
  - Show "No related posts" message if none found

- [ ] 6.5 Create social sharing buttons
  - Create `/components/blog/SocialShare.tsx` component
  - Add sharing buttons for: Twitter, LinkedIn, Facebook
  - Generate share URLs with pre-populated text and post URL
  - Use post title and excerpt in share text
  - Add social media icons (Chakra UI icons or React Icons)
  - Position share buttons at end of post or in sticky sidebar
  - Open share links in new window/tab
  - Ensure buttons are mobile-friendly (adequate size)

- [ ] 6.6 Display comprehensive post metadata
  - Create `/components/blog/PostMetadata.tsx` component
  - Display at top of blog post: publish date, categories, tags, reading time
  - Format date nicely (e.g., "December 14, 2025")
  - Make categories and tags clickable (link to filtered blog listing)
  - Add icons for metadata items (calendar, folder, tag, clock)
  - Style with Chakra UI Badge, Text, HStack components
  - Ensure responsive layout

- [ ] 6.7 Preserve original publish dates from Jekyll
  - Ensure date parsing from Jekyll posts preserves original dates
  - Display original publish date prominently
  - Format historical dates (2010-2011) correctly
  - No "last updated" dates unless explicitly added
  - Test that dates display correctly for all migrated posts

- [ ] 6.8 Write 3-6 focused tests for enhanced blog features
  - Test TOC generates correctly from headings
  - Test code blocks have syntax highlighting applied
  - Test copy button copies code to clipboard
  - Test related posts section displays correct posts
  - Test social share buttons generate correct URLs
  - Test post metadata displays all information

- [ ] 6.9 Verify enhanced blog features
  - Run the 3-6 tests written in 6.8
  - Visually test TOC navigation in browser
  - Test code block syntax highlighting and copy functionality
  - Test related posts appear correctly
  - Test social sharing buttons open correct URLs
  - Verify responsive design on all features
  - Commit enhanced blog features

**Acceptance Criteria:**
- Table of contents generated and navigable
- Code syntax highlighting working for all supported languages
- Copy-to-clipboard buttons functional with visual feedback
- Related posts section displays relevant posts
- Social sharing buttons generate correct share URLs
- Post metadata displays all information correctly
- Original publish dates preserved
- Enhanced feature tests pass

---

### Group 7: Content Migration from Jekyll
**Dependencies:** Groups 5, 6
**Specialization:** Content Engineering / Migration

#### Task 7.0: Migrate Jekyll content to Next.js
**Description:** Convert Jekyll blog posts to MDX format and migrate static assets while updating outdated links.

- [ ] 7.1 Analyze existing Jekyll blog posts
  - Review all 3 blog posts in `_posts/` directory
  - Document frontmatter structure used in Jekyll
  - Identify Jekyll Liquid syntax to convert
  - List code blocks and their languages
  - Identify any broken or outdated external links
  - Note any inline HTML or custom styling

- [ ] 7.2 Convert Jekyll blog posts to MDX format
  - Create MDX files in `/content/blog/` for each post
  - Convert Jekyll frontmatter to MDX-compatible format
  - Preserve: title, date, categories, meta_keywords, meta_description
  - Add: slug, excerpt (generate from first paragraph if not present)
  - Convert Jekyll Liquid code highlighting (`{% highlight %}`) to MDX code blocks
  - Use proper language tags in code blocks (```bash, ```ruby, etc.)
  - Maintain original publish dates (2010-2011 dates)

- [ ] 7.3 Update broken and outdated links in legacy posts
  - Review all external links in blog posts
  - Test links to verify they're still active
  - Update broken links to current URLs or archived versions
  - Replace outdated references with current alternatives
  - Update links to use HTTPS where applicable
  - Document any links that cannot be updated (add note in post)

- [ ] 7.4 Migrate social media and static assets
  - Copy images from Jekyll `/images/` to Next.js `/public/images/`
  - Verify: github.png, linkedin.png, twitter-x.png
  - Update image references in content to use `/images/` path
  - Ensure images are optimized (compress if large)
  - Test that images load correctly in Next.js

- [ ] 7.5 Create new About page content
  - Create `/app/about/page.tsx`
  - Write updated bio focusing on current role at Coducer Technologies
  - Highlight expertise: AI Agents, LLMs, Product Development, Architecture
  - Include professional background narrative
  - Display contact information: email (haiiamjai@gmail.com), location (Bangalore, India)
  - Add social media links using SocialLinks component
  - Link to resume page and blog
  - Use Chakra UI layout components for responsive design

- [ ] 7.6 Set up CNAME file for custom domain
  - Create `/public/CNAME` file
  - Add custom domain: `jaikeerthi.in`
  - Ensure file is included in static export build
  - Verify CNAME file is in correct location for GitHub Pages

- [ ] 7.7 Verify content migration
  - Test all 3 migrated blog posts render correctly
  - Verify frontmatter metadata displays properly
  - Test that code blocks have correct syntax highlighting
  - Click all links to verify they work
  - Test images load correctly
  - Verify About page displays updated content
  - Verify responsive design on migrated content
  - Commit migrated content

**Acceptance Criteria:**
- All 3 Jekyll blog posts converted to MDX format
- Original publish dates preserved
- Broken and outdated links updated
- Static assets migrated and loading correctly
- About page created with updated content
- CNAME file configured for custom domain
- All migrated content renders correctly
- No console errors on migrated pages

---

### Group 8: Homepage/Landing Page
**Dependencies:** Groups 3, 4, 5, 7
**Specialization:** Frontend / UI Design

#### Task 8.0: Build developer portfolio landing page
**Description:** Create a modern homepage with hero section, tech stack display, featured projects, and recent blog posts.

- [ ] 8.1 Create hero section component
  - Create `/components/home/HeroSection.tsx`
  - Display name: "Jai Keerthi" (large heading)
  - Display title: "AI Agents / LLM / Product / Architect"
  - Add professional photo/avatar (placeholder or actual image)
  - Use Chakra UI Pro hero section patterns
  - Create responsive layout (image above text on mobile, side-by-side on desktop)
  - Add clear call-to-action buttons: "View Resume", "Read Blog", "Contact Me"
  - Style with gradient background or professional color scheme

- [ ] 8.2 Build tech stack icons grid
  - Create `/components/home/TechStack.tsx` component
  - Display technology icons/logos: TypeScript, Node.js, Next.js, React, Python, Ruby on Rails, Nest.js, FastAPI, LLM/AI frameworks
  - Use icon grid layout (3-4 columns mobile, 5-6 columns desktop)
  - Add labels under each icon
  - Implement hover effects (scale, glow, or tooltip)
  - Use Chakra UI Grid or SimpleGrid
  - Source icons from public domain or icon libraries (Devicons, Simple Icons)

- [ ] 8.3 Create featured projects section
  - Create `/components/home/FeaturedProjects.tsx` component
  - Extract 3-4 notable projects from resume data: PrimeCLM, JOFIN, Ascent IMDR, Al Arabia BMS
  - Create project card component showing: title, brief description, tech stack, links
  - Use Chakra UI Card or custom ProjectCard component
  - Implement grid layout (1 column mobile, 2 columns tablet, 3-4 columns desktop)
  - Add hover effects on cards (lift, shadow, border highlight)
  - Link to project details or external URLs if available

- [ ] 8.4 Build recent blog posts preview section
  - Create `/components/home/RecentPosts.tsx` component
  - Fetch latest 3 blog posts using blog utilities
  - Display post cards with: title, date, excerpt, "Read More" link
  - Reuse BlogCard component or create simplified version
  - Use Chakra UI Grid or Stack for layout
  - Add "View All Posts" button linking to /blog
  - Ensure responsive design

- [ ] 8.5 Assemble homepage with all sections
  - Create `/app/page.tsx` (root homepage)
  - Import and compose: HeroSection, TechStack, FeaturedProjects, RecentPosts
  - Add section headings: "Technologies", "Featured Projects", "Recent Blog Posts"
  - Add appropriate spacing between sections
  - Use Chakra UI VStack or Stack for vertical layout
  - Ensure smooth transitions and animations
  - Add scroll-to-top button (optional)

- [ ] 8.6 Implement responsive design for homepage
  - Test homepage on mobile (320px+), tablet (768px+), desktop (1024px+)
  - Adjust hero layout for mobile (stack vertically)
  - Optimize tech stack grid for small screens
  - Ensure project cards stack nicely on mobile
  - Adjust typography sizes for readability on all devices
  - Test CTA buttons are touch-friendly on mobile

- [ ] 8.7 Write 3-6 focused tests for homepage
  - Test homepage renders all sections
  - Test hero section displays name and title
  - Test tech stack icons are visible
  - Test featured projects display correct data
  - Test recent posts fetch and display correctly
  - Test CTA buttons link to correct pages

- [ ] 8.8 Verify homepage functionality
  - Run the 3-6 tests written in 8.7
  - Visually test homepage in browser
  - Test all CTA buttons navigate correctly
  - Verify responsive design at all breakpoints
  - Test hover effects and animations
  - Commit homepage components

**Acceptance Criteria:**
- Homepage displays hero section with name, title, photo
- Tech stack icons grid shows all technologies
- Featured projects section displays 3-4 projects
- Recent blog posts preview shows latest 3 posts
- All CTA buttons functional and navigate correctly
- Responsive design works on all devices
- Homepage tests pass
- Professional, modern appearance

---

### Group 9: SEO and Performance Optimization
**Dependencies:** All previous groups
**Specialization:** SEO / Performance Engineering

#### Task 9.0: Implement comprehensive SEO and optimize performance
**Description:** Add meta tags, structured data, sitemap, RSS feed, analytics, and optimize images/performance.

- [ ] 9.1 Create reusable SEO component
  - Create `/components/SEO.tsx` component
  - Use Next.js `Metadata` API for App Router (export metadata object)
  - Support props: title, description, keywords, canonical, noindex
  - Set viewport meta tag for responsive design
  - Add charset and language meta tags
  - Create utility function to merge page-specific metadata with defaults

- [ ] 9.2 Implement Open Graph tags for social media
  - Add Open Graph meta tags to SEO component
  - Include: og:title, og:description, og:image, og:url, og:type, og:site_name
  - Create default og:image for site
  - Generate dynamic og:image for blog posts (use post title)
  - Test Open Graph tags with Facebook/LinkedIn debuggers
  - Ensure images meet social media requirements (1200x630px recommended)

- [ ] 9.3 Add Twitter Card tags
  - Add Twitter Card meta tags to SEO component
  - Include: twitter:card, twitter:site, twitter:title, twitter:description, twitter:image
  - Set twitter:card to "summary_large_image"
  - Use Twitter username: @kjaikeerthi
  - Test Twitter Card with Twitter Card Validator
  - Ensure consistency with Open Graph tags

- [ ] 9.4 Generate JSON-LD structured data
  - Create `/lib/structuredData.ts` with helper functions
  - Generate Article schema for blog posts: headline, author, datePublished, image, publisher
  - Generate Person schema for author: name, url, sameAs (social profiles)
  - Generate BreadcrumbList schema for navigation
  - Add structured data script tags to page heads
  - Validate JSON-LD with Google Rich Results Test

- [ ] 9.5 Create dynamic og:image generation for blog posts
  - Install `@vercel/og` or similar library for dynamic image generation
  - Create API route or edge function for og:image generation
  - Generate images with: post title, site name, publish date
  - Style images to match site branding
  - Optimize image size and format (PNG/JPEG)
  - Test generated images display correctly in social previews

- [ ] 9.6 Generate sitemap.xml at build time
  - Create `/app/sitemap.ts` for Next.js sitemap generation
  - Include all static pages: home, about, resume, blog listing
  - Include all blog post pages with proper URLs
  - Add lastmod dates (use post publish date for blog posts)
  - Set priority and changefreq values appropriately
  - Verify sitemap generates during build
  - Test sitemap.xml is accessible at `/sitemap.xml`

- [ ] 9.7 Configure robots.txt
  - Create `/app/robots.ts` for Next.js robots.txt generation
  - Allow all crawlers (User-agent: *)
  - Add sitemap reference: `Sitemap: https://jaikeerthi.in/sitemap.xml`
  - Disallow crawling of private paths if any (e.g., /api/)
  - Verify robots.txt is accessible at `/robots.txt`

- [ ] 9.8 Generate RSS feed (atom.xml) for blog
  - Install `rss` or `feed` library for RSS generation
  - Create script or API route to generate RSS feed
  - Include all blog posts with: title, description, link, pubDate, author
  - Add full post content or excerpt in feed
  - Generate feed at build time
  - Save feed as `/public/atom.xml` for static access
  - Add RSS feed link in site header
  - Verify feed validates with RSS validator

- [ ] 9.9 Integrate Google Analytics
  - Install `@next/third-parties` or use `next/script` component
  - Add Google Analytics tracking ID (obtain from user if needed)
  - Create `/components/GoogleAnalytics.tsx` component
  - Add GA script to root layout
  - Configure pageview tracking for App Router
  - Test GA tracking in browser (use GA debugger)
  - Ensure GDPR compliance (add cookie consent if required)

- [ ] 9.10 Optimize images with Next.js Image component
  - Audit all images used in site
  - Replace `<img>` tags with Next.js `<Image>` component
  - Add proper width, height attributes for all images
  - Use `loading="lazy"` for below-the-fold images
  - Compress large images before adding to repository
  - Use appropriate image formats (WebP for photos, PNG for graphics)
  - Test images load optimally

- [ ] 9.11 Enable lazy loading for below-the-fold content
  - Identify components that are below the fold
  - Use React lazy loading or Next.js dynamic imports
  - Lazy load: RecentPosts on homepage, RelatedPosts on blog posts
  - Add loading skeletons or placeholders
  - Test lazy loading improves initial page load time

- [ ] 9.12 Write 3-6 focused tests for SEO functionality
  - Test SEO component generates correct meta tags
  - Test sitemap includes all pages and posts
  - Test robots.txt allows crawlers
  - Test RSS feed includes all blog posts
  - Test JSON-LD structured data is valid
  - Test Google Analytics script loads correctly

- [ ] 9.13 Verify SEO and performance optimization
  - Run the 3-6 tests written in 9.12
  - Validate meta tags with browser inspector
  - Test Open Graph with Facebook/LinkedIn debuggers
  - Test Twitter Cards with Twitter Card Validator
  - Validate JSON-LD with Google Rich Results Test
  - Verify sitemap and robots.txt are accessible
  - Test RSS feed validates
  - Run Lighthouse audit (target: 90+ for all categories)
  - Commit SEO and performance optimizations

**Acceptance Criteria:**
- SEO component implemented with comprehensive meta tags
- Open Graph and Twitter Card tags added
- JSON-LD structured data generated for all pages
- Dynamic og:image generation for blog posts working
- Sitemap.xml and robots.txt generated and accessible
- RSS feed generated and validates
- Google Analytics integrated and tracking
- Images optimized with Next.js Image component
- Lazy loading implemented for below-the-fold content
- Lighthouse scores 90+ for Performance, Accessibility, Best Practices, SEO
- SEO tests pass

---

### Group 10: Deployment and Build Configuration
**Dependencies:** All previous groups
**Specialization:** DevOps / Deployment

#### Task 10.0: Configure deployment to GitHub Pages
**Description:** Set up automated deployment workflow and verify static export build process.

- [ ] 10.1 Verify static export build configuration
  - Review `next.config.js` has `output: 'export'`
  - Verify `basePath` and `assetPrefix` are correctly set
  - Ensure `images.unoptimized: true` for static export
  - Test static export generates all pages: `npm run build`
  - Verify `out/` directory contains all static HTML files
  - Check that all pages are pre-rendered (no dynamic rendering)
  - Ensure internal links use relative paths compatible with static export

- [ ] 10.2 Configure GitHub Actions workflow for deployment
  - Create `.github/workflows/deploy.yml`
  - Configure workflow to trigger on push to master branch
  - Set up Node.js environment (use Node 18 or 20)
  - Install dependencies: `npm ci`
  - Run build: `npm run build`
  - Deploy `out/` directory to `gh-pages` branch
  - Use `peaceiris/actions-gh-pages` or similar action
  - Configure to preserve CNAME file during deployment

- [ ] 10.3 Set up build optimization
  - Verify minification is enabled in production build
  - Ensure tree-shaking removes unused code
  - Configure image optimization (already done with Next.js Image)
  - Test bundle size is reasonable (analyze with `@next/bundle-analyzer`)
  - Optimize code splitting and lazy loading
  - Remove console logs and debug code from production
  - Test build performance (build time < 5 minutes)

- [ ] 10.4 Test build process locally
  - Run full production build: `npm run build`
  - Serve static files locally: `npx serve out` or similar
  - Test all pages render correctly as static HTML
  - Verify navigation works without JavaScript
  - Test all links work in production build
  - Check that images load correctly
  - Verify CSS and JavaScript assets load properly

- [ ] 10.5 Configure custom domain with GitHub Pages
  - Ensure `/public/CNAME` file exists with `jaikeerthi.in`
  - Verify GitHub repository settings have custom domain configured
  - Ensure DNS records point to GitHub Pages (if not already)
  - Test custom domain resolves correctly
  - Verify HTTPS is enabled (GitHub Pages auto-SSL)

- [ ] 10.6 Test deployment workflow
  - Push code to master branch to trigger deployment
  - Monitor GitHub Actions workflow execution
  - Verify workflow completes successfully
  - Check that `gh-pages` branch is updated
  - Visit deployed site at custom domain
  - Test all pages load correctly on production
  - Verify no 404 errors or broken assets

- [ ] 10.7 Create deployment documentation
  - Document deployment process in project README
  - Include instructions for local development
  - Document build commands and scripts
  - Add troubleshooting section for common issues
  - Document environment variables if any
  - Include link to live site

- [ ] 10.8 Write 2-4 focused tests for deployment
  - Test static export generates all expected pages
  - Test CNAME file is present in build output
  - Test all pages are accessible after build
  - Test asset paths are correct for static export

- [ ] 10.9 Verify deployment configuration
  - Run the 2-4 tests written in 10.8
  - Test GitHub Actions workflow runs successfully
  - Verify deployed site is live and fully functional
  - Test all pages, navigation, and features on production
  - Check performance and SEO on live site
  - Commit deployment configuration

**Acceptance Criteria:**
- Static export build generates all pages correctly
- GitHub Actions workflow configured and running
- Deployment to GitHub Pages automated on push to master
- Custom domain configured and working
- All pages accessible on production site
- HTTPS enabled on custom domain
- Build optimizations applied (minification, tree-shaking)
- Deployment tests pass
- Deployment documentation created
- Live site fully functional with all features working

---

## Execution Order

**Recommended implementation sequence:**

1. **Group 1: Project Initialization and Configuration** (Foundation)
2. **Group 2: Chakra UI Pro Integration** (UI Framework)
3. **Group 3: Core Layout Components** (Site Structure)
4. **Group 4: Resume Data Structure and Page** (Standalone Feature)
5. **Group 5: MDX Blog Architecture** (Blog Foundation)
6. **Group 6: Enhanced Blog Post Features** (Blog Enhancement)
7. **Group 7: Content Migration from Jekyll** (Content Transfer)
8. **Group 8: Homepage/Landing Page** (Final User-Facing Page)
9. **Group 9: SEO and Performance Optimization** (Polish & Optimization)
10. **Group 10: Deployment and Build Configuration** (Launch)

---

## Testing Strategy

Following the minimal testing approach during development:

- **Each task group (1-10)** writes only 2-8 focused tests covering critical functionality
- Tests verify core behaviors, not exhaustive coverage
- Test execution limited to newly written tests per group (not full suite)
- Focus on integration and user workflows over unit tests
- Performance and accessibility testing done manually via Lighthouse

**Expected Total Tests:** Approximately 30-50 tests across all groups

---

## Key Technical Decisions

- **Framework:** Next.js 16 with App Router and TypeScript
- **UI Library:** Chakra UI Pro for professional component library
- **Content:** MDX for blog posts with custom components
- **Syntax Highlighting:** Shiki (preferred) or Prism.js
- **PDF Generation:** react-pdf or @react-pdf/renderer
- **SEO:** Next.js Metadata API + custom structured data
- **Deployment:** GitHub Pages with GitHub Actions automation
- **Testing:** Minimal focused tests during development (2-8 per group)

---

## Notes

- Preserve Jekyll URL structure for SEO: `/YYYY/MM/DD/slug/` format
- Maintain original publish dates from Jekyll posts (2010-2011)
- Focus on clean, professional developer portfolio aesthetic
- Ensure WCAG 2.1 AA accessibility compliance
- Target Lighthouse scores: 90+ for all categories
- All tasks should follow coding standards in `/agent-os/standards/`
- Out of scope: search functionality, dark mode, comments system, tools page (deferred to later phases)
