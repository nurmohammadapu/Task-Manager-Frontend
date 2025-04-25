"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Button,
  Input,
  Link,
  Spinner,
  Box,
  Field,
} from "@chakra-ui/react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { login } from "@/services/operations/authAPI"; 
import toast from "react-hot-toast"; // Import toast from react-hot-toast

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true); // Show loading spinner

    // Show loading toast
    const loadingToast = toast.loading("Logging in...");

    try {
      // Call the login API
      const response = await login(email, password);

      // If successful, show success toast and redirect
      if (response.data.success) {
        toast.success("Login successful! Redirecting...", {
          id: loadingToast, // Dismiss the loading toast
        });
        router.push("/"); // Redirect to the tasks page
      } else {
        // If the login fails, show the server-side error message in the toast
        toast.error(response.data.message || "Login failed.", {
          id: loadingToast, // Dismiss the loading toast
        });
      }
    } catch (err: any) {
      // Handle any error that occurs during the API call

      // Check if there's a server-side error message and show it
      const errorMessage = err?.response?.data?.message || "Login failed. Please try again later.";
      console.error(err);
      toast.error(errorMessage, {
        id: loadingToast, // Dismiss the loading toast
      });
    } finally {
      // Stop the loading spinner
      setIsLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box spacing={6}>
        <Box mb={6}>
          <Field.Root>
            <Input
              id="email"
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Field.ErrorText>This field is required</Field.ErrorText>
          </Field.Root>
        </Box>

        <Box mb={6}>
          <Field.Root>
            <Input
              id="password"
              type={showPassword ? "text" : "password"} // Toggle between text and password
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              pr="3rem" // Add space for the icon
            />
            <Field.ErrorText>This field is required</Field.ErrorText>
            <Box
              position="absolute"
              top="50%"
              right="0.5rem"
              transform="translateY(-50%)"
              cursor="pointer"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <FaEyeSlash size={20} />
              ) : (
                <FaEye size={20} />
              )}
            </Box>
          </Field.Root>
        </Box>

        <Button
          type="submit"
          width="full"
          colorScheme="blue"
          isLoading={isLoading}
          loadingText="Please wait"
          leftIcon={isLoading ? <Spinner size="sm" /> : null}
        >
          {isLoading ? "" : "Sign In"}
        </Button>

        <Box textAlign="center" fontSize="sm" mt={4}>
          Don't have an account?{" "}
          <Link href="/signup" color="blue.500" textDecoration="underline">
            Sign up
          </Link>
        </Box>
      </Box>
    </form>
  );
}
