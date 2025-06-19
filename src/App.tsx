import { Routes, Route, Navigate } from 'react-router-dom'
import { ThemeProvider } from "@/components/theme-provider"
import { AuthProvider } from "@/components/auth-provider"
import { Toaster } from "@/components/ui/toaster"

// Pages
import HomePage from "@/pages/HomePage"
import LoginPage from "@/pages/LoginPage"
import CredentialsPage from "@/pages/CredentialsPage"
import ProjectsPage from "@/pages/ProjectsPage"
import ProjectPage from "@/pages/ProjectPage"
import WorkspacePage from "@/pages/WorkspacePage"
import EditorPage from "@/pages/EditorPage"
import PromptPage from "@/pages/PromptPage"
import ProfilePage from "@/pages/ProfilePage"
import SettingsPage from "@/pages/SettingsPage"

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/credentials" element={<CredentialsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:id" element={<ProjectPage />} />
          <Route path="/projects/:id/workspaces/:workspaceId" element={<WorkspacePage />} />
          <Route path="/editor" element={<EditorPage />} />
          <Route path="/prompt" element={<PromptPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Toaster />
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App