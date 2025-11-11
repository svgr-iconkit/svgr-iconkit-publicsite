import Iconsets from "../../../iconsets.config.json";

export const namespace = "@svgr-iconkit/";
export const pathPrefix = "/explorer/";

export const pageSize = 40;

export const iconsets = Iconsets;

export const sortedPackageNames = iconsets
  .map((item) => ({
    packageName: item.packageName,
    name: item.name,
    meta: item.meta,
  }))
  .sort((a, b) => {
    return String(a.name).localeCompare(b.name);
  });
