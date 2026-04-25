/**
 * Converts a standard Google Drive sharing link into a direct download URL
 * that can be used in <img> tags.
 */
export function getDirectDriveUrl(url: string | undefined | null): string | undefined {
  if (!url || url.trim() === "") return undefined;
  
  // If it's already a direct link or not a drive link, return as is
  if (!url.includes("drive.google.com")) return url;

  try {
    // Extract ID from /file/d/[ID] or ?id=[ID]
    const match = url.match(/\/d\/([a-zA-Z0-9_-]+)/) || url.match(/[?&]id=([a-zA-Z0-9_-]+)/);
    const fileId = match ? match[1] : null;

    if (fileId) {
      // Use the classic uc endpoint which bypassed recent lh3 cross-origin restrictions
      return `https://drive.google.com/uc?export=view&id=${fileId}`;
    }
  } catch (e) {
    console.error("Error parsing Drive URL:", e);
  }

  return url;
}
