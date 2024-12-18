```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href='/about'>
        <a>Go to About page</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js

export default function About() {
  // This will cause an error if the fetch fails
  const data = await fetch('/api/data');

  if (!data.ok) {
    // Handle error properly
    throw new Error('Failed to fetch data');
  }

  const jsonData = await data.json();
  return (
    <div>
      <h1>About page</h1>
      <p>Data from API: {jsonData.message}</p>
    </div>
  );
}
```
```javascript
// pages/api/data.js

export default async function handler(req, res) {
  // Simulate an API call that might fail
  const success = Math.random() < 0.5; // 50% chance of failure
  if (success) {
    res.status(200).json({ message: 'Data from API' });
  } else {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}
```