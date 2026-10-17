/**
 * Resolves a path that lives in /public (images, cv, projects.json)
 * so it keeps working when Vite's `base` is not "/".
 */
export function assetUrl(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;
}
