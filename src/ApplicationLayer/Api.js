import { message } from "antd";
import { registerUrl, loginUrl, emailVerificationUrl, uploadUrl, newTicketUrl, getTicketUpdate } from "./constants";

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

const postDocData = async (payload) => {
  try {
    const res = await fetch(uploadUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: payload
    })
    const data = await res.json()
    return data
  } catch (err) {
    console.log("Failed to upload", err)
    return { status: 500, message: "Failed to upload Document" }
  }
}

const postNewTicketData = async (payload) => {
  try{
    const res = await fetch(newTicketUrl, {
      method: "POST",
      headers:{
        "content-Type": 'application/json'
      },
      body: JSON.stringify(payload)
    })

    const data = await res.json()
    return data
  }
  catch(err){
    console.log("Failed to upload", err)
    return { status: 500, message: "Failed to Raise a Request, try again..!" }
  }
}


// Users data Get Apis

const getTicketsData = async() => {
  try{
    const res = await fetch(getTicketUpdate)
    const data = await res.json()
    return data
  }catch(err){
     console.log("Failed to upload", err)
    return { status: 500, message: "Error While fetching Tickets..try again..!" }
  }
}


export { postRegisterData, postEmailData, postLoginData, postDocData, postNewTicketData, getTicketsData }