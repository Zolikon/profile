export function useLocalStorage(key) {
  const get = useImmutableLocalStorage(key);

  const set = (value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  return [get, set];
}

export function useImmutableLocalStorage(key) {
  return () => {
    const value = localStorage.getItem(key);
    if (value) return JSON.parse(value);
  };
}
