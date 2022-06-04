import data from "./data.json";

import { Page } from "../types/website";

export function GetAllPages(): Page[] {
  return data.pages;
}

export function GetPage(path: string): Page | undefined {
  return data.pages.find((p) => p.path === path);
}
