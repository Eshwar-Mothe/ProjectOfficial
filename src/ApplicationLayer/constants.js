// const baseUrl = 'https://projectbackend-7v9s.onrender.com'
// const baseUrl = 'http://localhost:5000'
const baseUrl = 'https://api.aadwiktaxsolutions.com'

// Registration Related Api
const emailVerificationUrl = `${baseUrl}/sendMail`
const registerUrl = `${baseUrl}/newUser`
const loginUrl = `${baseUrl}/login`

// User Panel URLS
const uploadUrl = `${baseUrl}/user/docs` //used to upload Docs
const newTicketUrl = `${baseUrl}/newTicket` //raise new ticket
const referralDataURL = `${baseUrl}/referralData` //used to send referral data to the backend

const adminDataUrl = `${baseUrl}/adminData` //used to create admin

// User Get Urls

const getTicketUpdate = `${baseUrl}/user/tickets` //used to raise tickets
const checkExistingUserUrl = `${baseUrl}/users/isExist` //used to check the userExistance in the referPolicy
const getDocsDataUrl = `${baseUrl}/viewDoc` //used to fetch the docs based on the userId
const getUserDocsUrl = `${baseUrl}/admin/user/docs` //fetches all docs to the upload component

// Admin get urls
const getReferralDataUrl = `${baseUrl}/users/referralData` //used to fetch the referrals data
const getAdminsDataUrl = `${baseUrl}/admin/list` //gives the list of all admins in the add admins
const getAdminStatsUrl = `${baseUrl}/api/admin/stats` //fetches all admins number in the overview
const getUsersDataUrl = `${baseUrl}/data` //Used to fetch all users Data
const getAllUserDocsUrl = `${baseUrl}/api/userDocs/all` //Used to fetch all user Docs

export {baseUrl,emailVerificationUrl, registerUrl, loginUrl, uploadUrl, newTicketUrl,referralDataURL,adminDataUrl, getTicketUpdate, checkExistingUserUrl, getReferralDataUrl, getAdminsDataUrl, getAdminStatsUrl, getUsersDataUrl, getDocsDataUrl, getUserDocsUrl, getAllUserDocsUrl}