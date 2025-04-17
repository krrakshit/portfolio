// components/Terminal.tsx
'use client';

import { useState, useRef, useEffect } from 'react';

const commands = {
  help: `help - Show a list of available commands.
clear - Empty the terminal window.
whoami - Prints my name and current role
about - Displays a brief summary about me
education - Shows my educational background
socials - Lists my social media profiles
skills - Presents my technical skills and expertise
experience - Lists my work experience
email - Reveals my email address for contact`,
  whoami: "Rakshit - Full Stack Developer 🚀",
  about: "I'm a B.Tech student passionate about web dev, system design, and real-time apps.",
  education: "B.Tech in CSIT, graduating in 2027.",
  socials: "GitHub: github.com/yourhandle\nLinkedIn: linkedin.com/in/yourprofile",
  skills: "React, Next.js, TypeScript, Node.js, Prisma, PostgreSQL, Redis, Docker, and more...",
  experience: "Still exploring, but building exciting projects along the way!",
  email: "youremail@example.com",
};

export default function Terminal() {
  const [history, setHistory] = useState<string[]>([
    "Welcome! For a list of available commands, type `help`",
  ]);
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const handleCommand = (cmd: string) => {
    if (cmd === 'clear') {
      setHistory([]);
      return;
    }

    const output = commands[cmd as keyof typeof commands] || `Command not found: ${cmd}`;
    setHistory(prev => [...prev, `~$ ${cmd}`, output]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(input.trim());
    setInput('');
  };

  const handleTerminalClick = () => {
    inputRef.current?.focus();
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  return (
    <div 
      className="bg-black text-green-400 font-mono p-4 rounded-lg shadow-lg h-full flex flex-col"
      onClick={handleTerminalClick}
    >
      <div className="flex items-center mb-2">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="ml-2 text-sm text-gray-400">Terminal</div>
      </div>
      <div ref={terminalRef} className="flex-1 overflow-y-auto mb-2">
        {history.map((line, idx) => (
          <div key={idx} className="whitespace-pre-wrap">{line}</div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="flex items-center border-t border-gray-700 pt-2">
        <span className="pr-2 text-green-500">~$</span>
        <label htmlFor="terminal-input" className="sr-only">Terminal input</label>
        <input
          id="terminal-input"
          ref={inputRef}
          type="text"
          className="bg-black text-green-400 outline-none flex-1"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          autoComplete="off"
          placeholder="Type a command..."
        />
      </form>
    </div>
  );
}
