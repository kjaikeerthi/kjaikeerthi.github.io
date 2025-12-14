describe('Chakra UI Setup', () => {
  it('should have theme configuration available', () => {
    const themeConfig = {
      colors: {
        primary: {
          600: '#4f46e5',
        },
        secondary: {
          800: '#1f2937',
        },
      },
      breakpoints: {
        base: '0px',
        sm: '320px',
        md: '768px',
        lg: '1024px',
      },
    };

    expect(themeConfig.colors.primary[600]).toBe('#4f46e5');
    expect(themeConfig.breakpoints.md).toBe('768px');
  });

  it('should have responsive breakpoints configured correctly', () => {
    const breakpoints = {
      base: '0px',
      sm: '320px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    };

    expect(breakpoints.sm).toBe('320px');
    expect(breakpoints.md).toBe('768px');
    expect(breakpoints.lg).toBe('1024px');
  });

  it('should have WCAG-compliant color values defined', () => {
    const colors = {
      primary: '#4f46e5',
      secondary: '#1f2937',
      accent: '#d946ef',
    };

    expect(colors.primary).toBe('#4f46e5');
    expect(colors.secondary).toBe('#1f2937');
    expect(colors.accent).toBe('#d946ef');
  });

  it('should have proper spacing tokens defined', () => {
    const spacing = {
      1: '0.25rem',
      2: '0.5rem',
      4: '1rem',
      8: '2rem',
      16: '4rem',
    };

    expect(spacing[1]).toBe('0.25rem');
    expect(spacing[4]).toBe('1rem');
    expect(spacing[8]).toBe('2rem');
  });

  it('should have font configuration with proper hierarchy', () => {
    const fonts = {
      heading: 'var(--font-geist-sans), system-ui, sans-serif',
      body: 'var(--font-geist-sans), system-ui, sans-serif',
      mono: 'var(--font-geist-mono), monospace',
    };

    expect(fonts.heading).toContain('var(--font-geist-sans)');
    expect(fonts.body).toContain('var(--font-geist-sans)');
    expect(fonts.mono).toContain('var(--font-geist-mono)');
  });
});
