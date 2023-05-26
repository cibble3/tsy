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

export const renderProcessedContent = (text, limit = 250) => {
  return truncateString(removeHtmlEntities(stripTags(he.decode(text))), limit);
};

export const slugify = (str) => {
  return str
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}