import { namespace } from "./config";

export const iconsetWithoutScope = (name: string) => name.replace(namespace, "");
export const iconsetWithScope = (name: string) => {
  if (!name) console.error('Unexpected')
  return String(name).startsWith(namespace) ? name : namespace + name;
}



const _win = (typeof window === 'object' ? window : { localStorage: { getItem: () => null, setItem: () => { } } });

export function useLocalStorage(...keys: string[]) {
  return keys.map((key) => getLocalStorageItem(key));
}
export function setLocalStorageItem(key: string, value: string) {
  _win.localStorage.setItem(key, value);
}
export function getLocalStorageItem(key: string) {
  return _win.localStorage.getItem(key);
}


