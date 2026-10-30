// Rough reading time at ~200 words per minute, ignoring code fences.
export function readingTime(markdown: string = ''): string {
  const text = markdown.replace(/```[\s\S]*?```/g, ' ');
  const words = text.split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
}
