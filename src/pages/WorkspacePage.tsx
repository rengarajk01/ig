import { useParams } from "react-router-dom"
import { WorkspaceEditor } from "@/components/workspace-editor"
import { AppLayout } from "@/components/app-layout"
import { ProtectedRoute } from "@/components/protected-route"

export default function WorkspacePage() {
  const { id, workspaceId } = useParams<{ id: string; workspaceId: string }>()
  
  if (!id || !workspaceId) {
    return <div>Workspace not found</div>
  }

  return (
    <ProtectedRoute>
      <AppLayout>
        <WorkspaceEditor projectId={id} workspaceId={workspaceId} />
      </AppLayout>
    </ProtectedRoute>
  )
}