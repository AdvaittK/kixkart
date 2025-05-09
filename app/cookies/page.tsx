"use client"

import { motion } from "framer-motion"

export default function CookiePolicy() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="container py-8"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight cyberpunk-text mb-8">Cookie Policy</h1>
        
        <div className="space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. What Are Cookies</h2>
            <p>Cookies are small text files that are placed on your computer or mobile device when you visit our website. They are widely used to make websites work more efficiently and provide a better user experience.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. How We Use Cookies</h2>
            <p>We use cookies for the following purposes:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Essential cookies: Required for the website to function properly</li>
              <li>Performance cookies: Help us understand how visitors interact with our website</li>
              <li>Functionality cookies: Remember your preferences and settings</li>
              <li>Targeting cookies: Used to deliver relevant advertisements</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Types of Cookies We Use</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Session Cookies</h3>
                <p>Temporary cookies that expire when you close your browser. They help maintain your session while you browse our website.</p>
              </div>
              <div>
                <h3 className="font-semibold">Persistent Cookies</h3>
                <p>These cookies remain on your device for a specified period of time. They help us remember your preferences and settings.</p>
              </div>
              <div>
                <h3 className="font-semibold">Third-Party Cookies</h3>
                <p>Cookies set by third-party services we use, such as analytics and advertising partners.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Managing Cookies</h2>
            <p>You can control and manage cookies in your browser settings. However, please note that disabling certain cookies may affect the functionality of our website.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Updates to This Policy</h2>
            <p>We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated revision date.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Contact Us</h2>
            <p>If you have any questions about our Cookie Policy, please contact us at:</p>
            <p className="mt-2">Email: privacy@cyberkicks.com</p>
          </section>
        </div>
      </div>
    </motion.div>
  )
} 