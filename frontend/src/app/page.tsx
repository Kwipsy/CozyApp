'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8 flex flex-col items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to CozyApp</h1>
        <p className="text-xl text-gray-600 mb-8">
          Explore our character collection
        </p>
        <Link
          href="/characters"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition"
        >
          View Characters
        </Link>
      </div>
    </main>
  );
}