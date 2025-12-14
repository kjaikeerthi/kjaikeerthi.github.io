declare module '*.mdx' {
  import type { MDXProps } from 'mdx/types';

  export const frontmatter: {
    title: string;
    date: string;
    categories?: string[];
    tags?: string[];
    meta_description?: string;
    meta_keywords?: string;
    slug?: string;
    excerpt?: string;
  };

  const MDXComponent: (props: MDXProps) => JSX.Element;
  export default MDXComponent;
}
