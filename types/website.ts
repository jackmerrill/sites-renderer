export interface Website {
  pages: Pages;
}

export interface Pages {
  [pageName: string]: Page;
}

export interface Page {
  path: string;
  metadata: Metadata;
  children: Child[];
}

export interface Child {
  component: string;
}

export interface Metadata {
  title: string;
  description: string;
}
