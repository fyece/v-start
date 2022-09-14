export type SvgInHtml = HTMLElement & SVGElement;

export interface MenuSection {
  title: string;
  url: string;
  subSections?: MenuSubsection[];
}

export interface MenuSubsection {
  title: string;
  url: string;
  icon?: SvgInHtml;
}
