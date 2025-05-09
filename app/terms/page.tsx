"use client"

import { motion } from "framer-motion"

export default function TermsOfService() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="container py-8"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight cyberpunk-text mb-8">Terms of Service</h1>
        
        <div className="space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
            <p>By accessing and using CyberKicks, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
            <p>Permission is granted to temporarily access the materials on CyberKicks for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose</li>
              <li>Attempt to decompile or reverse engineer any software contained on CyberKicks</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Product Information</h2>
            <p>We strive to display as accurately as possible the colors and images of our products. However, we cannot guarantee that your computer monitor's display of any color will be accurate.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Pricing and Payment</h2>
            <p>All prices are subject to change without notice. We reserve the right to modify or discontinue any product without notice. We shall not be liable to you or any third party for any modification, price change, suspension, or discontinuance of any product.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Shipping and Returns</h2>
            <p>Shipping times and costs are estimates only. We are not responsible for any delays in shipping. Please refer to our Return Policy for information about returns and refunds.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
            <p>In no event shall CyberKicks or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on CyberKicks.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Contact Information</h2>
            <p>Questions about the Terms of Service should be sent to us at:</p>
            <p className="mt-2">Email: legal@cyberkicks.com</p>
          </section>
        </div>
      </div>
    </motion.div>
  )
} 