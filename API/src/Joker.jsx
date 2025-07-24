import { useState, useEffect } from "react";

export default function Joker() {
  const [joke, setJoke] = useState(null);
  const URL = "https://official-joke-api.appspot.com/random_joke";

  const getJoke = async () => {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      setJoke(data);
    } catch (error) {
      console.error("Failed to fetch joke:", error);
    }
  };

  // Fetch one joke when component first mo
  // unts
  useEffect(() => {
    getJoke();
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Random Joke Generator</h2>
      <button onClick={getJoke}>Get a New Joke</button>

      {joke ? (
        <div style={{ marginTop: "20px" }}>
          <p>
            <strong>Setup:</strong> {joke.setup}
          </p>
          <p>
            <strong>Punchline:</strong> {joke.punchline}
          </p>
        </div>
      ) : (
        <p>Loading a joke...</p>
      )}
    </div>
  );
}
