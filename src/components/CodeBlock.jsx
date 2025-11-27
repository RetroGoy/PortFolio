export const CodeBlock = ({ code }) => {
  const highlightJavaScript = (code) => {
    const lines = code.split('\n');

    return lines.map((line, idx) => {
      let highlighted = line
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');

      const commentMatch = highlighted.match(/(\/\/.*$|\/\*[\s\S]*?\*\/)/);
      if (commentMatch) {
        const commentIndex = highlighted.indexOf(commentMatch[0]);
        const beforeComment = highlighted.substring(0, commentIndex);
        const comment = highlighted.substring(commentIndex);

        const processedBefore = beforeComment
          .replace(/(".*?"|'.*?'|`.*?`)/g, '<span style="color: #ce9178;">$1</span>')
          .replace(/\b(const|let|var|function|if|else|return|for|while|async|await|try|catch|throw|new|class|import|export|from|default|break|continue|switch|case|typeof|instanceof)\b/g, '<span style="color: #c586c0;">$1</span>')
          .replace(/\b(\d+\.?\d*)\b/g, '<span style="color: #b5cea8;">$1</span>')
          .replace(/\b([a-zA-Z_$][a-zA-Z0-9_$]*)\s*(?=\()/g, '<span style="color: #dcdcaa;">$1</span>');

        return `<div key="${idx}">${processedBefore}<span style="color: #6a9955;">${comment}</span></div>`;
      }

      highlighted = highlighted
        .replace(/(".*?"|'.*?'|`.*?`)/g, '<span style="color: #ce9178;">$1</span>')
        .replace(/\b(const|let|var|function|if|else|return|for|while|async|await|try|catch|throw|new|class|import|export|from|default|break|continue|switch|case|typeof|instanceof)\b/g, '<span style="color: #c586c0;">$1</span>')
        .replace(/\b(\d+\.?\d*)\b/g, '<span style="color: #b5cea8;">$1</span>')
        .replace(/\b([a-zA-Z_$][a-zA-Z0-9_$]*)\s*(?=\()/g, '<span style="color: #dcdcaa;">$1</span>');

      return `<div key="${idx}">${highlighted}</div>`;
    }).join('');
  };

  if (!code || code.trim() === '') {
    return (
      <div className="bg-[#1e1e1e] border border-white/20 p-4 overflow-x-auto">
        <pre className="text-xs text-white/40 font-mono">
          // Collez votre code ici
        </pre>
      </div>
    );
  }

  return (
    <div className="bg-[#1e1e1e] border border-white/20 p-4 overflow-x-auto max-h-[600px] overflow-y-auto">
      <pre className="text-xs font-mono leading-relaxed text-white/90" style={{ whiteSpace: 'pre', tabSize: 2 }}>
        <code
          dangerouslySetInnerHTML={{
            __html: highlightJavaScript(code)
          }}
        />
      </pre>
    </div>
  );
};
