import "dotenv/config";

const getGeminiAPIResponse = async(message) =>{
  const API_KEY = `${process.env.GEMINI_API_KEY}`;
  const url = `https://generativelanguage.googleapis.com/v1beta/chat/completions?key=${API_KEY}`;

  const options = {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "gemini-2.5-flash",
      messages: [{
        role: "user",
        content: message
      }]
    })

  }
  try {
    const response = await fetch(url,options);
    const data = await response.json();
    return data.choices[0].message.content;
  } catch(err) {
    console.log(err);
  }

}

export default getGeminiAPIResponse;