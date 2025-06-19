import { useParams } from "react-router-dom"
import { ProjectDashboard } from "@/components/project-dashboard"
import { AppLayout } from "@/components/app-layout"
import { ProtectedRoute } from "@/components/protected-route"

export default function ProjectPage() {
  const { id } = useParams<{ id: string }>()
  
  if (!id) {
    return <div>Project not found</div>
  }

  return (
    <ProtectedRoute>
      <AppLayout>
        <ProjectDashboard projectId={id} />
      </AppLayout>
    </ProtectedRoute>
  )
}