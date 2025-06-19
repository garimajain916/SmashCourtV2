import { PageBreadcrumb } from "@/components/PageBreadcrumb"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <PageBreadcrumb items={[{ label: "Privacy Policy" }]} />
          
          <h1 className="text-3xl font-bold text-foreground mb-6">Privacy Policy</h1>
          
          <div className="prose prose-sm dark:prose-invert">
            <h2>1. Information We Collect</h2>
            <p>
              We collect information that you provide directly to us, including when you create an account, update your profile, or communicate with other users.
            </p>

            <h2>2. How We Use Your Information</h2>
            <p>
              We use the information we collect to operate and improve our services, communicate with you, and personalize your experience.
            </p>

            <h2>3. Information Sharing</h2>
            <p>
              We do not sell or rent your personal information to third parties. We may share your information only in the circumstances described in this policy.
            </p>

            <h2>4. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized or unlawful processing, accidental loss, destruction, or damage.
            </p>

            <h2>5. Your Rights</h2>
            <p>
              You have the right to access, correct, or delete your personal information. You can also object to or restrict certain processing of your information.
            </p>

            <h2>6. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us through our contact form.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 