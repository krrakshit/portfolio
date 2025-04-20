// components/GitHubCalendar.tsx
'use client';

import { useEffect } from 'react';
import GitHubCalendar from 'react-github-calendar';

export default function GitHubActivity() {
  const username = "krrakshit";
  const CACHE_KEY = `github-calendar-${username}`;
  const CACHE_EXPIRY = 6 * 60 * 60 * 1000; // 6 hours in milliseconds

  // Function to check if cache is valid
  const isCacheValid = (timestamp: number) => {
    return Date.now() - timestamp < CACHE_EXPIRY;
  };

  useEffect(() => {
    // Check if data is in local storage
    const cachedData = localStorage.getItem(CACHE_KEY);
    
    if (cachedData) {
      const { timestamp } = JSON.parse(cachedData);
      
      // If cache is still valid, we're good to go
      if (isCacheValid(timestamp)) {
        return;
      }
    }
    
    // If we reach here, either no cache or expired cache
    // The data will be fetched by the GitHubCalendar component directly
    // We just need to save it after it's loaded
    
    // Set a timeout to update local storage after component renders and data loads
    const timer = setTimeout(() => {
      // Create a simple timestamp cache to track when the data was last fetched
      const cacheData = {
        timestamp: Date.now()
      };
      localStorage.setItem(CACHE_KEY, JSON.stringify(cacheData));
    }, 2000); // Assuming 2 seconds is enough for the calendar to load
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">GitHub Contributions</h2>
      <div className="w-full max-w-6xl px-2">
        <GitHubCalendar 
          username={username}
          blockSize={16}
          blockMargin={4}
          fontSize={14}
        />
      </div>
    </div>
  );
}
