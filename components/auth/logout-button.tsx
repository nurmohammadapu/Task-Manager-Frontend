"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
// import { useDispatch } from "react-redux"
// import { logout } from "@/store/authSlice"
import { Button, Spinner } from "@chakra-ui/react"
import { LogOut } from "lucide-react"

interface LogoutButtonProps {
  variant?: "solid" | "outline" | "ghost" | "link" | "unstyled"
}

export default function LogoutButton({ variant = "ghost" }: LogoutButtonProps) {
  const router = useRouter()
  // const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false)

  const handleLogout = async () => {
    setIsLoading(true)

    try {
      const response = await fetch("/api/auth/logout", {
        method: "POST",
      })

      if (response.ok) {
        // Clear auth state in Redux
        // dispatch(logout())

        // Redirect to login page
        router.push("/login")
      }
    } catch (error) {
      console.error("Logout error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Button
      variant={variant}
      onClick={handleLogout}
      isLoading={isLoading}
      leftIcon={isLoading ? <Spinner size="sm" /> : <LogOut className="h-4 w-4" />}
    >
      {isLoading ? "Logging out..." : "Logout"}
    </Button>
  )
}
