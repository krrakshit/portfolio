declare module 'qss' {
  export function encode(params: Record<string, any>): string;
  export function decode(queryString: string): Record<string, any>;
} 