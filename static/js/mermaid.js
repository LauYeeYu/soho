import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.esm.min.mjs';

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  // dark mode
  mermaid.initialize({ theme: 'dark' });
} else {
  // light mode
  mermaid.initialize({ theme: 'default' });
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    location.reload();
});