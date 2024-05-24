import { NavLink } from "./navLink";

export interface NavLinkAnchor {
  title: string;
  target?: string;
  dropdownLinks?: NavLink[];
}
