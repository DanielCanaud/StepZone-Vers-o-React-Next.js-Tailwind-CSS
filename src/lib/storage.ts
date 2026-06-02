export const getStorageItem = <T>(key: string): T | null => {
    if (typeof window === 'undefined') return null;
    const data = window.localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  };
  
  export const setStorageItem = <T>(key: string, value: T): void => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(key, JSON.stringify(value));
    }
  };