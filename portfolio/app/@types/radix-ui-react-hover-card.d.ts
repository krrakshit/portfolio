declare module '@radix-ui/react-hover-card' {
  import * as React from 'react';

  export const Root: React.FC<{ openDelay?: number; closeDelay?: number; onOpenChange?: (open: boolean) => void; children: React.ReactNode }>;
  export const Trigger: React.FC<{ children: React.ReactNode; onMouseMove?: (event: React.MouseEvent) => void; className?: string; href?: string }>;
  export const Content: React.FC<{ children: React.ReactNode; className?: string; side?: string; align?: string; sideOffset?: number }>;
} 