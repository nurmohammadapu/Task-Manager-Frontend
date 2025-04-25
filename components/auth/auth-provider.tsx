"use client"

import type React from "react"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setUser } from "@/store/authSlice"

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const dispatch = useDispatch()

  useEffect(() => {
    // Check for token in localStorage
    const token = localStorage.getItem("token")

    if (token) {
      // Fetch user data with the token
      const fetchUserData = async () => {
        try {
          const response = await fetch("/api/auth/me", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })

          if (response.ok) {
            const data = await response.json()
            dispatch(
              setUser({
                token,
                user: data.user,
              })
            )
          } else {
            // If token is invalid, clear it
            localStorage.removeItem("token")
          }
        } catch (error) {
          console.error("Error fetching user data:", error)
        }
      }

      fetchUserData()
    }
  }, [dispatch])

  return (
    <>
      {/* Optionally display an alert if an error occurs */}
      {/* <Alert status="error">
        <AlertIcon />
        <AlertDescription>Failed to fetch user data</AlertDescription>
      </Alert> */}
      {children}
    </>
  )
}
