import { PageBreadcrumb } from "@/components/PageBreadcrumb"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <PageBreadcrumb items={[{ label: "Terms of Service" }]} />
          
          <h1 className="text-3xl font-bold text-foreground mb-6">Terms of Service</h1>
          
          <div className="prose prose-sm dark:prose-invert">
            <h2>1. Terms</h2>
            <p>
              By accessing Smash Court, you agree to be bound by these terms of service and agree that you are responsible for compliance with any applicable local laws.
            </p>

            <h2>2. Use License</h2>
            <p>
              Permission is granted to temporarily access Smash Court for personal, non-commercial transitory viewing only.
            </p>

            <h2>3. Disclaimer</h2>
            <p>
              The materials on Smash Court are provided on an 'as is' basis. Smash Court makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>

            <h2>4. Limitations</h2>
            <p>
              In no event shall Smash Court or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use Smash Court.
            </p>

            <h2>5. Revisions and Errata</h2>
            <p>
              The materials appearing on Smash Court could include technical, typographical, or photographic errors. Smash Court does not warrant that any of the materials on its website are accurate, complete, or current.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 