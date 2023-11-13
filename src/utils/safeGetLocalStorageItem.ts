export const safeGetLocalStorageItem = (key: string) => {
  try {
    return (
      typeof window.localStorage.getItem === 'function' &&
      window.localStorage.getItem(key)
    );
  } catch (error) {
    // Ignore Local Storage Browser error
    // - NS_ERROR_FILE_CORRUPTED
    // - QuotaExceededError
    console.error(`Local Storage error: ${(error as Error).message}`);
    return null;
  }
};
