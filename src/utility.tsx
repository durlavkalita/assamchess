export function createSlug(title: string, separator = "-") {
  // Convert title to lowercase
  const lowercaseTitle = title.toLowerCase();

  // Replace spaces with the separator
  const slug = lowercaseTitle.replace(/\s+/g, separator);

  // Remove special characters, punctuation, and non-alphanumeric characters
  const cleanedSlug = slug.replace(/[^a-z0-9-]/g, "");

  // Trim leading and trailing separator (if any)
  const trimmedSlug = cleanedSlug.replace(
    new RegExp(`^${separator}|${separator}$`, "g"),
    ""
  );

  return trimmedSlug;
}
