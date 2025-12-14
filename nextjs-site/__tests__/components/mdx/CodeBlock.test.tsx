/**
 * Tests for CodeBlock component
 */

import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CodeBlock from '@/components/mdx/CodeBlock';

// Mock shiki
jest.mock('shiki', () => ({
  codeToHtml: jest.fn((code: string, options: { lang: string }) => {
    return Promise.resolve(`<pre><code class="language-${options.lang}">${code}</code></pre>`);
  }),
}));

// Mock useToast
jest.mock('@chakra-ui/react', () => {
  const original = jest.requireActual('@chakra-ui/react');
  return {
    ...original,
    useToast: () => ({
      toast: jest.fn(),
    }),
  };
});

describe('CodeBlock', () => {
  const mockCode = 'console.log("Hello, World!");';

  beforeEach(() => {
    // Mock clipboard API
    Object.assign(navigator, {
      clipboard: {
        writeText: jest.fn(() => Promise.resolve()),
      },
    });
  });

  it('displays code content', async () => {
    render(<CodeBlock className="language-javascript">{mockCode}</CodeBlock>);

    await waitFor(() => {
      expect(screen.getByText(mockCode)).toBeInTheDocument();
    });
  });

  it('extracts language from className', async () => {
    render(<CodeBlock className="language-typescript">{mockCode}</CodeBlock>);

    await waitFor(() => {
      expect(screen.getByText('TYPESCRIPT')).toBeInTheDocument();
    });
  });

  it('displays copy button', async () => {
    render(<CodeBlock className="language-javascript">{mockCode}</CodeBlock>);

    await waitFor(() => {
      expect(screen.getByRole('button', { name: /copy/i })).toBeInTheDocument();
    });
  });

  it('copies code to clipboard when copy button is clicked', async () => {
    const user = userEvent.setup();
    render(<CodeBlock className="language-javascript">{mockCode}</CodeBlock>);

    await waitFor(() => {
      expect(screen.getByRole('button', { name: /copy/i })).toBeInTheDocument();
    });

    const copyButton = screen.getByRole('button', { name: /copy/i });
    await user.click(copyButton);

    await waitFor(() => {
      expect(navigator.clipboard.writeText).toHaveBeenCalledWith(mockCode);
    });
  });

  it('handles plain text when no className provided', async () => {
    render(<CodeBlock>{mockCode}</CodeBlock>);

    await waitFor(() => {
      expect(screen.getByText(mockCode)).toBeInTheDocument();
    });
  });
});

