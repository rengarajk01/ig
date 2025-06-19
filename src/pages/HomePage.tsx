import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "@/components/auth-provider"
import { LoadingScreen } from "@/components/loading-screen"

export default function HomePage() {
  const { isAuthenticated, isLoading } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isLoading) {
      if (isAuthenticated) {
        // Check if credentials are already set up
        const hasCredentials = localStorage.getItem("terraform-credentials-setup")

        if (hasCredentials) {
          navigate("/projects")
        } else {
          navigate("/credentials")
        }
      } else {
        navigate("/login")
      }
    }
  }, [isAuthenticated, isLoading, navigate])

  return <LoadingScreen />
}