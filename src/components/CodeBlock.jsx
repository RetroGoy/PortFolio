export const CodeBlock = ({ code }) => {
  const highlightJavaScript = (code) => {
    const keywords = /\b(const|let|var|function|if|else|return|for|while|async|await|try|catch|throw|new|class|import|export|from|default|break|continue|switch|case|typeof|instanceof)\b/g;
    const strings = /(".*?"|'.*?'|`.*?`)/g;
    const numbers = /\b(\d+\.?\d*)\b/g;
    const comments = /(\/\/.*$|\/\*[\s\S]*?\*\/)/gm;
    const functions = /\b([a-zA-Z_$][a-zA-Z0-9_$]*)\s*(?=\()/g;
    const properties = /\.([a-zA-Z_$][a-zA-Z0-9_$]*)/g;

    let highlighted = code
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    highlighted = highlighted
      .replace(comments, '<span class="text-green-400">$1</span>')
      .replace(strings, '<span class="text-orange-300">$1</span>')
      .replace(keywords, '<span class="text-purple-400">$1</span>')
      .replace(numbers, '<span class="text-blue-300">$1</span>')
      .replace(functions, '<span class="text-yellow-300">$1</span>')
      .replace(properties, '.<span class="text-cyan-300">$1</span>');

    return highlighted;
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
      <pre className="text-xs font-mono leading-relaxed">
        <code
          dangerouslySetInnerHTML={{
            __html: highlightJavaScript(code)
          }}
        />
      </pre>
    </div>
  );
};
