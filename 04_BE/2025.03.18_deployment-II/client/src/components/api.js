const BASE_URL = import.meta.env.VITE_API_URL || "";

export const registerApi = async (data) => {
  // Request für die Registrierung. Das Frontend erwartet keine Daten vom Backend
  try {
    const response = await fetch(`${BASE_URL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Registrierung fehlgeschlagen");
    }

    console.log("Registrierung erfolgreich");
  } catch (error) {
    console.error("Fehler bei der Registrierung:", error.message);
  }
};

export const loginApi = async ({ email, password }) => {
  try {
    const response = await fetch(`${BASE_URL}/users/login`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Login failed");
    }

    return data;
  } catch (error) {
    console.error("Login API Error:", error.message);
    throw error;
  }
};

export const payInApi = async (newBalance, transactions) => {
  try {
    const res = await fetch(`${BASE_URL}/users/deposit`, {
      method: "PUT",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        newBalance,
        transactions,
      }),
    });

    if (!res.ok) {
      throw new Error("Deposit failed");
    }

    return await res.json();
  } catch (error) {
    console.error("Error in payInApi:", error);
    return null;
  }
};

export const chargeOffApi = async (newBalance, transactions) => {
  // Request zum Geld abheben. Das Frontend erwartet die Benutzerdaten vom Backend
  try {
    const res = await fetch(`${BASE_URL}/users/withdraw`, {
      method: "PUT",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        newBalance,
        transactions,
      }),
    });

    if (!res.ok) throw new Error("Withdrawal failed");

    return await res.json;
  } catch (error) {
    console.error("Error in chargeOffApi", error.message);
    return null;
  }
};

export const getUserApi = async () => {
  // Request um die Benutzerdaten zu holen. Das Frontend erwartet "balance" und "transactions" vom Backend
  try {
    const res = await fetch(`${BASE_URL}/users/me`, {
      method: "GET",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) throw new Error("Failed to fetch user data");
    return await res.json();
  } catch (error) {
    console.error("Error fetching user data:", error.message);
    return null;
  }
};

export const logoutApi = async () => {
  // Request zum Ausloggen. Das Frontend erwartet keine Daten vom Backend
  try {
    const res = await fetch(`${BASE_URL}/users/logout`, {
      method: "POST",
      credentials: "include",
    });
    if (!res.ok) throw new Error("Logout failed");
    console.log("Logout successfull");
  } catch (error) {
    console.error("Error in logoutApi:", error.message);
  }
};
