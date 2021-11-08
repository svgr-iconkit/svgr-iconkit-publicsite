import { namespace } from "./config";

export const iconsetWithoutScope = (name) => name.replace(namespace, "");
export const iconsetWithScope = (name) =>
  name.startsWith(namespace) ? name : namespace + name;
