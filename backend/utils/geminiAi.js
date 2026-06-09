import "dotenv/config";

const getGeminiAPIResponse = async (message) => {
  const API_KEY = process.env.GEMINI_API_KEY;
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`;

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      contents: [{
        parts: [{ text: message }]
      }]
    })
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();

    // DIAGNOSTIC LOG: This will show you the exact structure in your VS Code Terminal
    console.log("--- GOOGLE API RESPONSE STRUCTURE ---");
    console.dir(data, { depth: null });
    console.log("-------------------------------------");

    // Strategy 1: Standard layout
    if (data.candidates?.[0]?.content?.parts?.[0]?.text) {
      return data.candidates[0].content.parts[0].text;
    }

    // Strategy 2: Alternative layout fallback
    if (data.candidates?.[0]?.output?.text) {
      return data.candidates[0].output.text;
    }

    // Strategy 3: Check if Google returned an error payload directly inside the 200 block
    if (data.error) {
      return `API Error: ${data.error.message || "Unknown API issue"}`;
    }

    return "Sorry, I couldn't parse the API response layout.";

  } catch (err) {
    console.log("Gemini API Fetch Error:", err);
    return "Sorry, an error occurred while connecting to the AI.";
  }
};

export default getGeminiAPIResponse;