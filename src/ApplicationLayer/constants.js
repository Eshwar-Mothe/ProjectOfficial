const baseUrl = 'https://projectbackend-7v9s.onrender.com'
// const baseUrl = 'http://localhost:5000'


// Registration Related Api
const emailVerificationUrl = `${baseUrl}/sendMail`
const registerUrl = `${baseUrl}/newUser`
const loginUrl = `${baseUrl}/login`

// User Panel URLS
const uploadUrl = `${baseUrl}/upload`
const newTicketUrl = `${baseUrl}/newTicket`

// User Get Urls

const getTicketUpdate = `${baseUrl}/user/tickets`

export {emailVerificationUrl, registerUrl, loginUrl, uploadUrl, newTicketUrl, getTicketUpdate}