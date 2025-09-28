declare module 'glob' {
  export interface GlobOptions {
    ignore?: string | string[];
    cwd?: string;
    nodir?: boolean;
  }

  export function glob(pattern: string, options?: GlobOptions): Promise<string[]>;
}