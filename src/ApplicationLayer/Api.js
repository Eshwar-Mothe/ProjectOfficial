import { registerUrl, loginUrl, emailVerificationUrl } from "./constants";

const postRegisterData = async (payload) => {
  console.log("received payload is: ", payload)
  try {
    const res = await fetch(registerUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload)
    });

    return await res.json()
  }
  catch (error) {
    console.error("Error in API call:", error);
    return { status: 500, message: "Network error" };
  }
}

const postEmailData = async (payload) => {
  console.log("payload in postRegisterData", payload);

  try {
    const res = await fetch(emailVerificationUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    return await res.json();
  } catch (error) {
    console.error("Error in API call:", error);
    return { status: 500, message: "Network error" };
  }
};

const postLoginData = async (payload) => {
  console.log("payload in postLoginData", payload);

  try {
    const res = await fetch(loginUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload)
    })
    const data = await res.json();
    console.log("Response data:", data);
    return data;
  } catch (error) {
    console.error("Error in API call:", error);
    return { status: 500, message: "Network error" };
  }
}



export { postRegisterData, postEmailData, postLoginData }