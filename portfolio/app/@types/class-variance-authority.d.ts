declare module 'class-variance-authority' {
  export function cva(
    base: string,
    options?: {
      variants?: Record<string, any>;
      defaultVariants?: Record<string, any>;
    }
  ): (props?: Record<string, any>) => string;

  export type VariantProps<T> = {
    [K in keyof T]?: T[K];
  };
} 