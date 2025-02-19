declare module 'react-icon-cloud' {
  export const Cloud: any;
  export const fetchSimpleIcons: any;
  export interface ICloud {
    children?: React.ReactNode;
    containerProps?: any;
    options?: any;
  }
  export const renderSimpleIcon: (props: {
    icon: SimpleIcon;
    bgHex: string;
    fallbackHex: string;
    minContrastRatio: number;
    size: number;
    aProps: {
      href?: string;
      target?: string;
      rel?: string;
      onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
    };
  }) => JSX.Element;
  export type SimpleIcon = any;
} 