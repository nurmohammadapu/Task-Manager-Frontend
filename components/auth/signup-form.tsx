"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Box,
  Button,
  Input,
  Spinner,
  Field,
  AlertRoot,
  AlertIndicator,
  AlertContent,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { sendOtp, signup } from "@/services/operations/authAPI";

export default function SignupForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    otp: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [sendingOtp, setSendingOtp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const togglePasswordVisibility = () => setShowPassword(prev => !prev);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(prev => !prev);

  const handleSendOtp = async () => {
    if (!formData.email) {
      setError("Email is required to send OTP");
      return;
    }
    setSendingOtp(true);
    setError("");
    setSuccess("");
    try {
      const response = await sendOtp(formData.email);
      if (response.data.success) {
        setOtpSent(true);
        setSuccess(response.data.message);
      } else {
        setError(response.data.message || "Failed to send OTP");
      }
    } catch (err: unknown) {
      if (err && typeof err === "object" && "response" in err) {
        const axiosError = err as { response?: { data?: { message?: string } } };
        setError(axiosError.response?.data?.message || "An error occurred while sending OTP");
      } else if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred while sending OTP");
      }
    } finally {
      setSendingOtp(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    setIsLoading(true);
    try {
      const response = await signup(formData);
      if (response.data.success) {
        setSuccess(response.data.message);
        setTimeout(() => {
          router.push("/login");
        }, 2000);
      } else {
        setError(response.data.message || "Registration failed");
      }
    } catch (err: unknown) {
      if (err && typeof err === "object" && "response" in err) {
        const axiosError = err as { response?: { data?: { message?: string } } };
        setError(axiosError.response?.data?.message || "An error occurred during registration");
      } else if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred during registration");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box maxW="md" mx="auto" p={6} borderWidth={1} borderRadius="md" boxShadow="lg">
      <form onSubmit={handleSubmit}>
        <Box mb={4}>
          {error && (
            <AlertRoot status="error" mb={4}>
              <AlertIndicator />
              <AlertContent>
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </AlertContent>
            </AlertRoot>
          )}
          {success && (
            <AlertRoot status="success" mb={4}>
              <AlertIndicator />
              <AlertContent>
                <AlertTitle>Success</AlertTitle>
                <AlertDescription>{success}</AlertDescription>
              </AlertContent>
            </AlertRoot>
          )}
        </Box>

        <Box display="grid" gridTemplateColumns="repeat(2, 1fr)" gap={4} mb={4}>
          <Field.Root name="firstName">
            <Field.Label>First Name</Field.Label>
            <Input
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
            <Field.ErrorText>This field is required</Field.ErrorText>
          </Field.Root>
          <Field.Root name="lastName">
            <Field.Label>Last Name</Field.Label>
            <Input
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
            <Field.ErrorText>This field is required</Field.ErrorText>
          </Field.Root>
        </Box>

        <Field.Root name="email" mb={4}>
          <Field.Label>Email</Field.Label>
          <Box display="flex">
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="name@example.com"
              value={formData.email}
              onChange={handleChange}
              disabled={otpSent}
            />
            <Button
              type="button"
              variant="outline"
              onClick={handleSendOtp}
              isLoading={sendingOtp}
              isDisabled={otpSent || !formData.email}
              ml={2}
            >
              {otpSent ? "Resend OTP" : "Send OTP"}
            </Button>
          </Box>
          <Field.ErrorText>This field is required</Field.ErrorText>
        </Field.Root>

        <Field.Root name="otp" mb={4}>
          <Field.Label>OTP</Field.Label>
          <Input
            id="otp"
            name="otp"
            placeholder="Enter 6-digit OTP"
            value={formData.otp}
            onChange={handleChange}
          />
          <Field.ErrorText>This field is required</Field.ErrorText>
        </Field.Root>

        <Field.Root name="password" mb={4} position="relative">
          <Field.Label>Password</Field.Label>
          <Input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            value={formData.password}
            onChange={handleChange}
            pr="3rem"
          />
          <Field.ErrorText>This field is required</Field.ErrorText>
          <Box
            position="absolute"
            top="70%"
            right="0.75rem"
            transform="translateY(-50%)"
            cursor="pointer"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
          </Box>
        </Field.Root>

        <Field.Root name="confirmPassword" mb={4} position="relative">
          <Field.Label>Confirm Password</Field.Label>
          <Input
            id="confirmPassword"
            name="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            value={formData.confirmPassword}
            onChange={handleChange}
            pr="3rem"
          />
          <Field.ErrorText>This field is required</Field.ErrorText>
          <Box
            position="absolute"
            top="70%"
            right="0.75rem"
            transform="translateY(-50%)"
            cursor="pointer"
            onClick={toggleConfirmPasswordVisibility}
          >
            {showConfirmPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
          </Box>
        </Field.Root>

        <Button
          type="submit"
          colorScheme="teal"
          width="full"
          isLoading={isLoading}
          isDisabled={!otpSent}
        >
          {isLoading ? <Spinner size="sm" mr={2} /> : "Sign Up"}
        </Button>

        <Box mt={4} textAlign="center">
          <Link href="/login">
            <Button variant="link" colorScheme="teal">
              Already have an account? Sign in
            </Button>
          </Link>
        </Box>
      </form>
    </Box>
  );
}
