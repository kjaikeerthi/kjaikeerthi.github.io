import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const colors = {
  primary: {
    50: '#eef2ff',
    100: '#e0e7ff',
    200: '#c7d2fe',
    300: '#a5b4fc',
    400: '#818cf8',
    500: '#6366f1',
    600: '#4f46e5',
    700: '#4338ca',
    800: '#3730a3',
    900: '#312e81',
  },
  secondary: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
  },
  accent: {
    50: '#fdf4ff',
    100: '#fae8ff',
    200: '#f5d0fe',
    300: '#f0abfc',
    400: '#e879f9',
    500: '#d946ef',
    600: '#c026d3',
    700: '#a21caf',
    800: '#86198f',
    900: '#701a75',
  },
};

const fonts = {
  heading: 'var(--font-geist-sans), system-ui, -apple-system, sans-serif',
  body: 'var(--font-geist-sans), system-ui, -apple-system, sans-serif',
  mono: 'var(--font-geist-mono), Menlo, Monaco, "Courier New", monospace',
};

const fontSizes = {
  xs: '0.75rem',
  sm: '0.875rem',
  md: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
  '2xl': '1.5rem',
  '3xl': '1.875rem',
  '4xl': '2.25rem',
  '5xl': '3rem',
  '6xl': '3.75rem',
  '7xl': '4.5rem',
  '8xl': '6rem',
  '9xl': '8rem',
};

const fontWeights = {
  hairline: 100,
  thin: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
};

const lineHeights = {
  normal: 'normal',
  none: 1,
  shorter: 1.25,
  short: 1.375,
  base: 1.5,
  tall: 1.625,
  taller: 2,
};

const breakpoints = {
  base: '0px',
  sm: '320px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

const space = {
  px: '1px',
  0.5: '0.125rem',
  1: '0.25rem',
  1.5: '0.375rem',
  2: '0.5rem',
  2.5: '0.625rem',
  3: '0.75rem',
  3.5: '0.875rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  7: '1.75rem',
  8: '2rem',
  9: '2.25rem',
  10: '2.5rem',
  12: '3rem',
  14: '3.5rem',
  16: '4rem',
  20: '5rem',
  24: '6rem',
  28: '7rem',
  32: '8rem',
  36: '9rem',
  40: '10rem',
  44: '11rem',
  48: '12rem',
  52: '13rem',
  56: '14rem',
  60: '15rem',
  64: '16rem',
  72: '18rem',
  80: '20rem',
  96: '24rem',
};

const sizes = {
  ...space,
  max: 'max-content',
  min: 'min-content',
  full: '100%',
  '3xs': '14rem',
  '2xs': '16rem',
  xs: '20rem',
  sm: '24rem',
  md: '28rem',
  lg: '32rem',
  xl: '36rem',
  '2xl': '42rem',
  '3xl': '48rem',
  '4xl': '56rem',
  '5xl': '64rem',
  '6xl': '72rem',
  '7xl': '80rem',
  '8xl': '90rem',
  container: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
};

const styles = {
  global: {
    'html, body': {
      color: 'secondary.800',
      lineHeight: 'base',
    },
    a: {
      color: 'primary.600',
      _hover: {
        textDecoration: 'underline',
      },
      _focus: {
        outline: '2px solid',
        outlineColor: 'primary.500',
        outlineOffset: '2px',
        borderRadius: 'sm',
      },
    },
    '*:focus-visible': {
      outline: '2px solid',
      outlineColor: 'primary.500',
      outlineOffset: '2px',
      borderRadius: 'sm',
    },
  },
};

const components = {
  Button: {
    baseStyle: {
      fontWeight: 'semibold',
      borderRadius: 'md',
      _focus: {
        outline: '2px solid',
        outlineColor: 'primary.500',
        outlineOffset: '2px',
      },
    },
    variants: {
      solid: {
        bg: 'primary.600',
        color: 'white',
        _hover: {
          bg: 'primary.700',
          _disabled: {
            bg: 'primary.600',
          },
        },
        _active: {
          bg: 'primary.800',
        },
      },
      outline: {
        borderColor: 'primary.600',
        color: 'primary.600',
        _hover: {
          bg: 'primary.50',
        },
      },
      ghost: {
        color: 'primary.600',
        _hover: {
          bg: 'primary.50',
        },
      },
    },
    defaultProps: {
      variant: 'solid',
    },
  },
  Link: {
    baseStyle: {
      color: 'primary.600',
      _hover: {
        textDecoration: 'underline',
      },
      _focus: {
        outline: '2px solid',
        outlineColor: 'primary.500',
        outlineOffset: '2px',
        borderRadius: 'sm',
      },
    },
  },
  Heading: {
    baseStyle: {
      fontWeight: 'bold',
      color: 'secondary.900',
    },
    sizes: {
      '4xl': {
        fontSize: ['6xl', null, '7xl'],
        lineHeight: 'none',
      },
      '3xl': {
        fontSize: ['5xl', null, '6xl'],
        lineHeight: 'shorter',
      },
      '2xl': {
        fontSize: ['4xl', null, '5xl'],
        lineHeight: 'shorter',
      },
      xl: {
        fontSize: ['3xl', null, '4xl'],
        lineHeight: 'short',
      },
      lg: {
        fontSize: ['2xl', null, '3xl'],
        lineHeight: 'short',
      },
      md: {
        fontSize: 'xl',
        lineHeight: 'base',
      },
      sm: {
        fontSize: 'md',
        lineHeight: 'base',
      },
      xs: {
        fontSize: 'sm',
        lineHeight: 'base',
      },
    },
  },
  Text: {
    baseStyle: {
      color: 'secondary.700',
    },
  },
};

export const theme = extendTheme({
  config,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  breakpoints,
  space,
  sizes,
  styles,
  components,
});
