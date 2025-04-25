import { apiConnector } from '../apiConnector'; 

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL + '/api/v1/auth'; 

// Send OTP API
export const sendOtp = async (email: string) => {
  const url = `${baseURL}/sendotp`; // Append the specific endpoint for sending OTP
  const bodyData = { email };
  return apiConnector({
    method: 'POST',
    url,
    bodyData,
  });
};

// Signup API
export const signup = async (userData: {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  otp: string;
}) => {
  const url = `${baseURL}/signup`; // Endpoint for signup
  return apiConnector({
    method: 'POST',
    url,
    bodyData: userData,
  });
};

// Login API
export const login = async (email: string, password: string) => {
  const url = `${baseURL}/login`; // Endpoint for login
  const bodyData = { email, password };
  return apiConnector({
    method: 'POST',
    url,
    bodyData,
  });
};

// Logout API
export const logout = async () => {
  const url = `${baseURL}/logout`; // Endpoint for logout
  return apiConnector({
    method: 'POST',
    url,
  });
};
