import { ComponentType} from "react";
export interface IconsetInfo {
    name: string;
    packageName: string;
    originalAuthor?: {
      name: string;
      url: string;
      package?: string;
      version?: string;
    };
    license?: string;
    coreVersion?: string;
    colorize?: boolean;
    iconNames?: string[];
    defaultVariant?: string;
    variantNames?: string[];
    meta?: {
      colorize?: boolean;
      hasStrokeStyle?: boolean;
    };
    Iconset?: ComponentType<{
      variant?: string;
      name: string;
      size?: number;
      color?: string;
      strokeWidth?: number;
    }>;
  }