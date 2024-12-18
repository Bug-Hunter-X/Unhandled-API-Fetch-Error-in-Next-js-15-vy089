```javascript
// pages/about.js

export default async function About() {
  let jsonData = null; 
  try {
    const data = await fetch('/api/data');
    if (!data.ok) {
      // Handle error properly
      throw new Error(`HTTP error! status: ${data.status}`);
    }
    jsonData = await data.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    jsonData = {message: 'Error fetching data'}; //or a default value
  }

  return (
    <div>
      <h1>About page</h1>
      <p>Data from API: {jsonData ? jsonData.message : 'Data unavailable'}</p>
    </div>
  );
}
```