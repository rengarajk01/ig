import { SettingsPage as SettingsComponent } from "@/components/settings-page"
import { AppLayout } from "@/components/app-layout"
import { ProtectedRoute } from "@/components/protected-route"

export default function SettingsPage() {
  return (
    <ProtectedRoute>
      <AppLayout>
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <h1 className="text-3xl font-bold mb-2">Settings</h1>
            <p className="text-muted-foreground">Configure your application preferences and account settings.</p>
          </div>
          <SettingsComponent />
        </div>
      </AppLayout>
    </ProtectedRoute>
  )
}