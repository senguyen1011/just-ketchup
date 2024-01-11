declare module '*.svg' {
  import * as React from 'react';

  const ReactComponent: React.FC<React.SVGProps<SVGElement>>;
  export default ReactComponent;
}

/// <reference types="./@types/svg" />
/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />
