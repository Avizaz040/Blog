// Define the base URL for the API, using the environment variable or a default value
const baseURL = import.meta.env.VITE_API_URL ?? "http://localhost:5000";


// Function to make API requests
const checkAPI = async (endpoint, options = {}) => {
  // Construct the full URL by appending the endpoint to the base URL
  const url = `${baseURL}${endpoint}`;

  // Ensure default options, including credentials and headers
  const finalOptions = {
    credentials: "include", // Include cookies in the request
    ...options,
    headers: {
      "Content-Type": "application/json", // Default content type
      ...(options.headers || {}), // Merge additional headers if provided
    },
  };

  try {
    // Make the API request using fetch
    const response = await fetch(url, finalOptions);

    // Check if the response status is not OK (e.g., 4xx or 5xx)
    if (!response.ok) {
      throw new Error(`API error: ${response.status} ${response.statusText}`);
    }

    // Return the response object for further processing
    return response;
  } catch (error) {
    // Log the error for debugging purposes
    console.error("API request failed:", error);

    // Re-throw the error to allow the caller to handle it
    throw error;
  }
};

// Export the function for use in other parts of the application
export default checkAPI;
