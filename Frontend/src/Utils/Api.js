// Define the base URL for the API, using the environment variable or a default value
const baseURL = import.meta.env.VITE_API_URL ?? "http://localhost:5000";


// Function to make API requests
const checkAPI = async (endpoint, options = {}) => {
  const url = `${baseURL}${endpoint}`;

  const finalOptions = {
    credentials: "include",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  };

  try {
    const response = await fetch(url, finalOptions);
    const data = await response.json().catch(() => null); // safely parse JSON

    return {
      ok: response.ok,
      data,
    };
  } catch (error) {
    console.error("API request failed:", error);

    return {
      ok: false,
      data: { message: error.message || "Network error" },
    };
  }
};

// Export the function for use in other parts of the application
export default checkAPI;
