export const getCookies = (name: string): string | null => {
  const value = `${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if(parts.length === 2) return parts.pop()?.split(";").shift() || null;
  return null;
}

export const setCookies = (name: string, value: string): void => {
  document.cookie = `${name}=${value}; path=/;`;
}

export const removeCookies = (name: string): void => {
  document.cookie = `${name}=; expies=Thu, 01 Jan 1970 00:00:00 GMT; path=/;`;
}