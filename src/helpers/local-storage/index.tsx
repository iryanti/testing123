const setLocalStorage = (
  key: string,
  value: string | number | object | Array<any>
): void => {
  if (typeof globalThis === "undefined" || !globalThis?.localStorage) {
    return;
  }
  localStorage.setItem(key, JSON.stringify(value));
};

const getLocalStorage = (key: string): any => {
  if (typeof globalThis === "undefined" || !globalThis?.localStorage) {
    return undefined;
  }
  const storageValue = localStorage.getItem(key);
  if (
    storageValue === null ||
    storageValue === undefined ||
    storageValue === "undefined"
  )
    return undefined;
  try {
    var o = JSON.parse(storageValue);
    if (o && typeof o === "object") {
      return o;
    }
  } catch (e) {}
  return storageValue;
};

const destroyLocalStorage = (key: string): void => {
  if (typeof globalThis === "undefined" || !globalThis?.localStorage) {
    return;
  }
  localStorage.removeItem(key);
};

export { setLocalStorage, destroyLocalStorage, getLocalStorage };
