declare module '@radix-ui/react-tooltip' {
  import * as React from 'react';

  export const Provider: React.FC<{ children: React.ReactNode }>;
  export const Root: React.FC<{ children: React.ReactNode }>;
  export const Trigger: React.FC<{ children: React.ReactNode }>;
  export const Content: React.FC<React.ComponentProps<'div'>>;
  // Add other components and props as needed
} 