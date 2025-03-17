export const registerApi = async (data) => {
    try {
        const response = await fetch('http://localhost:3000/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Fehler bei der Registrierung');
        }

        return await response.json();
    } catch (error) {
        console.error('Registrierungsfehler:', error);
        throw error;
    }
    // Request für die Registrierung. Das Frontend erwartet keine Daten vom Backend
}

export const loginApi = async (data) => {
        try {
          const response = await fetch("http://localhost:3000/users/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify(data),
          });
      
          if (!response.ok) {
            throw new Error("Login fehlgeschlagen");
          }
      
          return await response.json();
        } catch (error) {
          console.error("Fehler beim Login:", error);
          throw error
        }
    // Request für das Login. Das Frontend erwartet die Benutzerdaten vom Backend
}

export const payInApi = async (newBalance, transactions) => {
    // Request zum Geld Einzahlen. Das Frontend erwartet die Benutzerdaten vom Backend
}

export const chargeOffApi = async (newBalance, transactions) => {
    // Request zum Geld abheben. Das Frontend erwartet die Benutzerdaten vom Backend
}

export const getUserApi = async () => {
    // Request um die Benutzerdaten zu holen. Das Frontend erwartet "balance" und "transactions" vom Backend
}

export const logoutApi = async () => {
    // Request zum Ausloggen. Das Frontend erwartet keine Daten vom Backend
}

