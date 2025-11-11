import { namespace } from "./config";

export const iconsetWithoutScope = (name) => name.replace(namespace, "");
export const iconsetWithScope = (name) => {
  if (! name) console.error('Unexpected')
  return String(name).startsWith(namespace) ? name : namespace + name;
}
