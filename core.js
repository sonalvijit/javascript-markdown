function customMarkdownParser(text) {
  return text
    // Code block ```
    .replace(/```([\s\S]*?)```/g, '<pre class="code-block"><code class="code-style">$1</code></pre>')
    // Inline code `
    .replace(/`([^`]+)`/g, '<code class="code-style">$1</code>')
    // Bold **
    .replace(/\*\*(.*?)\*\*/g, '<span class="ft-bold">$1</span>')
    // Italic *
    .replace(/\*(.*?)\*/g, '<span class="ft-italic">$1</span>')
    // Underline __
    .replace(/__(.*?)__/g, '<span class="ft-underline">$1</span>')
    // Strikethrough ~~
    .replace(/~~(.*?)~~/g, '<span class="ft-strike">$1</span>')
    // Headings
    .replace(/^### (.*$)/gim, '<h3 class="ft-h3">$1</h3>')
    .replace(/^## (.*$)/gim, '<h2 class="ft-h2">$1</h2>')
    .replace(/^# (.*$)/gim, '<h1 class="ft-h1">$1</h1>');
    // Line breaks
//     .replace(/\n/g, '<br>');
}
