import { message } from "antd";
import { registerUrl, loginUrl, emailVerificationUrl, uploadUrl, newTicketUrl, getTicketUpdate, referralDataURL, adminDataUrl, checkExistingUserUrl, getReferralDataUrl, getAdminsDataUrl, getAdminStatsUrl, getUsersDataUrl } from "./constants";

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

const postDocData = async (formData) => {
  console.log(formData, "going to upload")
  try {
    const res = await fetch(uploadUrl, {
      method: "POST",
      body: formData, // no JSON, because it's FormData!
    });

    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Failed to upload documents:", err);
    return { success: false, message: "Failed to upload document" };
  }
};


const postNewTicketData = async (payload) => {
  try {
    const res = await fetch(newTicketUrl, {
      method: "POST",
      headers: {
        "content-Type": 'application/json'
      },
      body: JSON.stringify(payload)
    })

    const data = await res.json()
    return data
  }
  catch (err) {
    console.log("Failed to upload", err)
    return { status: 500, message: "Failed to Raise a Request, try again..!" }
  }
}

const postReferralData = async (payload) => {
  console.log(payload, "received Payload")
  try {
    const res = await fetch(referralDataURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    })
    const data = await res.json()
    return data
  } catch (err) {
    console.log("Referral Failed", err)
    return { status: 500, message: "Failed to send data, try again..!" }
  }
}

const postAdminData = async (payload) => {
  console.log(payload)
  try {
    const res = await fetch(adminDataUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    })
    const data = await res.json()
    return data;

  } catch (err) {
    console.log("Failed to upload admin Data", err)
    return { status: 500, message: "Failed to add Admin, try again later" }
  }
}

const postCheckExistingUserData = async (payload) => {
  try {
    const res = await fetch(checkExistingUserUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    const data = await res.json();
    return data;

  } catch (err) {
    console.log("Error posting Checking Data", err)
    return { status: 501, message: "Failed to Fetch, try again" }
  }
}


// Users data Get Apis

const getTicketsData = async () => {
  try {
    const res = await fetch(getTicketUpdate)
    const data = await res.json()
    return data
  } catch (err) {
    console.log("Failed to upload", err)
    return { status: 500, message: "Error While fetching Tickets..try again..!" }
  }
}

const getReferralData = async () => {
  try {
    const res = await fetch(getReferralDataUrl)
    const data = await res.json()
    return data
  } catch (err) {
    console.log("Error fetching the referral Data", err)
    return { status: 404, message: "Failed to fetch referrals Data" }
  }
}

const getAdminsData = async () => {
  try {
    const res = await fetch(getAdminsDataUrl)
    const data = await res.json()
    return data
  } catch (err) {
    console.log("Error fetching the Admin Data", err)
    return { status: 404, message: "Failed to fetch Admins Data" }
  }
}

const getAdminStats = async () => {
  try {
    const res = await fetch(getAdminStatsUrl)
    const data = await res.json()
    return data
  } catch (err) {
    console.log("Error while fetching the Admin stats")
    return { status: 404, message: "Failed to fetch Admin Stats" }
  }
}

const getUsersData = async () => {
  try{
    const res = await fetch(getUsersDataUrl)
    const data = await res.json()
    return data
  }catch(err){
    console.log("Error while fetching the Admin stats")
    return { status: 404, message: "Failed to fetch Users Data" } 
  }
}
export { postRegisterData, postEmailData, postLoginData, postDocData, postNewTicketData, postReferralData, postAdminData, postCheckExistingUserData, getTicketsData, getReferralData, getAdminsData, getAdminStats, getUsersData }