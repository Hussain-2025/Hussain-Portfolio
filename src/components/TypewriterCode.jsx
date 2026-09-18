import React, { useState, useEffect, useMemo } from 'react';

const RAW_LINES = [
  {
    num: "01",
    indent: false,
    tokens: [
      { text: "const ", className: "token-keyword" },
      { text: "developer", className: "token-var" },
      { text: ": ", className: "token-plain" },
      { text: "Engineer", className: "token-type" },
      { text: " = {", className: "token-plain" }
    ]
  },
  {
    num: "02",
    indent: true,
    tokens: [
      { text: "name", className: "token-key" },
      { text: ": ", className: "token-plain" },
      { text: '"Hussain Asghar"', className: "token-string" },
      { text: ",", className: "token-plain" }
    ]
  },
  {
    num: "03",
    indent: true,
    tokens: [
      { text: "role", className: "token-key" },
      { text: ": ", className: "token-plain" },
      { text: '"Full Stack & AI Engineer"', className: "token-string" },
      { text: ",", className: "token-plain" }
    ]
  },
  {
    num: "04",
    indent: true,
    tokens: [
      { text: "stack", className: "token-key" },
      { text: ": [", className: "token-plain" },
      { text: '"React 19"', className: "token-string" },
      { text: ", ", className: "token-plain" },
      { text: '"Node.js"', className: "token-string" },
      { text: ", ", className: "token-plain" },
      { text: '"Gemini AI"', className: "token-string" },
      { text: "],", className: "token-plain" }
    ]
  },
  {
    num: "05",
    indent: true,
    tokens: [
      { text: "specialty", className: "token-key" },
      { text: ": ", className: "token-plain" },
      { text: '"Real-time & AI-driven SaaS"', className: "token-string" },
      { text: ",", className: "token-plain" }
    ]
  },
  {
    num: "06",
    indent: true,
    tokens: [
      { text: "status", className: "token-key" },
      { text: ": ", className: "token-plain" },
      { text: '"Building impactful platforms 🚀"', className: "token-string" }
    ]
  },
  {
    num: "07",
    indent: false,
    tokens: [
      { text: "};", className: "token-plain" }
    ]
  }
];

export default function TypewriterCode() {
  const { lines, totalChars } = useMemo(() => {
    let running = 0;
    const computedLines = RAW_LINES.map(line => {
      const lineStart = running;
      const lineTokens = line.tokens.map(token => {
        const start = running;
        const end = running + token.text.length;
        running = end;
        return { ...token, start, end };
      });
      return {
        ...line,
        lineStart,
        lineEnd: running,
        tokens: lineTokens
      };
    });
    return { lines: computedLines, totalChars: running };
  }, []);

  const [charIndex, setCharIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    let timer;
    if (charIndex < totalChars) {
      // Natural typing cadence (20-35ms)
      const speed = Math.floor(Math.random() * 15) + 20;
      timer = setTimeout(() => {
        setCharIndex(prev => prev + 1);
      }, speed);
    } else {
      // Pause 7.5s at full text before looping smoothly
      timer = setTimeout(() => {
        setCharIndex(0);
      }, 7500);
    }

    return () => clearTimeout(timer);
  }, [charIndex, totalChars, isPaused]);

  return (
    <div 
      className="code-editor-area"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      title="Interactive Code Preview (Hover to pause typing)"
    >
      {lines.map((line, lIdx) => {
        const hasStartedLine = charIndex >= line.lineStart;
        const isCursorAtStartOfLine = charIndex === 0 && lIdx === 0;

        return (
          <div key={lIdx} className={`code-line ${line.indent ? 'indent' : ''}`}>
            <span className="line-num">{line.num}</span>

            {isCursorAtStartOfLine && (
              <span className="typewriter-cursor">|</span>
            )}

            {hasStartedLine && line.tokens.map((token, tIdx) => {
              if (charIndex <= token.start) return null;

              const isHeadOfToken = charIndex > token.start && charIndex <= token.end;
              const sliceText = token.text.slice(0, charIndex - token.start);

              return (
                <React.Fragment key={tIdx}>
                  <span className={token.className}>{sliceText}</span>
                  {isHeadOfToken && (
                    <span className="typewriter-cursor">|</span>
                  )}
                </React.Fragment>
              );
            })}

            {/* If completed all text, show blinking cursor at the very end of last line */}
            {charIndex >= totalChars && lIdx === lines.length - 1 && (
              <span className="typewriter-cursor blinking">|</span>
            )}
          </div>
        );
      })}
    </div>
  );
}
