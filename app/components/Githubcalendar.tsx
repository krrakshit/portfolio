// components/GitHubCalendar.tsx
'use client';

import GitHubCalendar from 'react-github-calendar';

export default function GitHubActivity() {
  return (
    <div className="flex flex-col items-center justify-center w-full py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">GitHub Contributions</h2>
      <div className="w-full max-w-6xl px-2">
        <GitHubCalendar 
          username="krrakshit"
          blockSize={16}
          blockMargin={4}
          fontSize={14}
        />
      </div>
    </div>
  );
}
