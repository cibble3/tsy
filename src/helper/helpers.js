import he from "he";

export const stripTags = (str) => {
  return str.replace(/<[^>]+>/g, "");
};

export const truncateString = (str, maxLength) => {
  if (str.length <= maxLength) {
    return str;
  }
  return str.substring(0, maxLength) + "...";
};

export const removeHtmlEntities = (str) => {
  return str.replace(/&[^\s;]+;/g, "");
};

export const renderProcessedContent = (text, limit = 160) => {
  return truncateString(
    removeHtmlEntities(stripTags(he.decode(text))),
    limit
  ).toLowerCase();
};

export const slugify = (str) => {
  return str
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
};

export const capitalizeString = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const checkCommonWords = (string1, string2) => {
  const words1 = new Set(string1.replace("/", "").split("/"));
  const words2 = new Set(string2.split("/"));
  let commonCount = 0;
  for (const word of words2) {
    if (words1.has(word)) {
      commonCount++;
      if (commonCount >= 2) {
        return true;
      }
    }
  }
  return false;
};
