import { existsSync, readFileSync } from 'fs';
import { join } from 'path';
import nextConfig from '../next.config';

describe('Project Configuration', () => {
  describe('TypeScript Configuration', () => {
    test('tsconfig.json exists and has strict mode enabled', () => {
      const tsconfigPath = join(process.cwd(), 'tsconfig.json');
      expect(existsSync(tsconfigPath)).toBe(true);

      const tsconfigContent = readFileSync(tsconfigPath, 'utf-8');
      const tsconfig = JSON.parse(tsconfigContent);
      expect(tsconfig.compilerOptions.strict).toBe(true);
    });

    test('path aliases are configured correctly', () => {
      const tsconfigPath = join(process.cwd(), 'tsconfig.json');
      const tsconfigContent = readFileSync(tsconfigPath, 'utf-8');
      const tsconfig = JSON.parse(tsconfigContent);
      const paths = tsconfig.compilerOptions.paths;

      expect(paths).toHaveProperty('@/*');
      expect(paths).toHaveProperty('@/components/*');
      expect(paths).toHaveProperty('@/lib/*');
      expect(paths).toHaveProperty('@/data/*');
      expect(paths).toHaveProperty('@/content/*');
      expect(paths).toHaveProperty('@/styles/*');
    });
  });

  describe('Next.js Configuration', () => {
    test('static export is configured', () => {
      expect(nextConfig.output).toBe('export');
    });

    test('images are unoptimized for static export', () => {
      expect(nextConfig.images?.unoptimized).toBe(true);
    });

    test('trailing slashes are enabled for GitHub Pages', () => {
      expect(nextConfig.trailingSlash).toBe(true);
    });

    test('MDX page extensions are configured', () => {
      expect(nextConfig.pageExtensions).toContain('mdx');
      expect(nextConfig.pageExtensions).toContain('tsx');
    });
  });

  describe('Project Structure', () => {
    test('required directories exist', () => {
      const requiredDirs = [
        'app',
        'components',
        'lib',
        'data',
        'content',
        'content/blog',
        'styles',
        'public',
      ];

      requiredDirs.forEach((dir) => {
        const dirPath = join(process.cwd(), dir);
        expect(existsSync(dirPath)).toBe(true);
      });
    });
  });

  describe('Prettier Configuration', () => {
    test('.prettierrc exists and has correct settings', () => {
      const prettierPath = join(process.cwd(), '.prettierrc');
      expect(existsSync(prettierPath)).toBe(true);

      const prettierContent = readFileSync(prettierPath, 'utf-8');
      const prettier = JSON.parse(prettierContent);
      expect(prettier.singleQuote).toBe(true);
      expect(prettier.trailingComma).toBe('es5');
      expect(prettier.tabWidth).toBe(2);
    });
  });
});
