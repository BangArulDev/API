import type { ApiResponse, PersonalData } from "./types";

const API_URL = "http://localhost:3000";

export const fetchPersonalData = async (): Promise<PersonalData | null> => {
  try {
    const response = await fetch(`${API_URL}/`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const json: ApiResponse = await response.json();
    return json.data;
  } catch (error) {
    console.error("Failed to fetch personal data:", error);
    return null;
  }
};
