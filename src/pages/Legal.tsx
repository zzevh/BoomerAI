import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/logo-nobg-large.png';

const Legal = () => {
  return (
    <div className="min-h-screen bg-dark text-gray-100">
      {/* Navigation */}
      <nav className="w-full z-10 px-6 py-4 bg-dark-lighter">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/">
            <div className="flex items-center space-x-2">
              <img src={Logo} alt="BoomerAI Logo" className="w-20 -mr-2" />
              <span className="text-2xl font-bold">BoomerAI</span>
            </div>
          </Link>
          <Link to="/" className="text-gray-400 hover:text-gray-200 transition-colors">
            Back to Home
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto py-12 px-6">
        <div className="mb-12">
          <h1 className="text-3xl font-bold mb-8">Legal Documents</h1>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <button
              className="bg-dark-lighter px-6 py-3 rounded-lg hover:bg-dark-light transition-colors"
              onClick={() => document.getElementById('privacy-policy')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Privacy Policy
            </button>
            <button
              className="bg-dark-lighter px-6 py-3 rounded-lg hover:bg-dark-light transition-colors"
              onClick={() => document.getElementById('terms-of-service')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Terms of Service
            </button>
          </div>
        </div>

        {/* Privacy Policy */}
        <section id="privacy-policy" className="mb-16">
          <div className="bg-dark-lighter p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-6">Privacy Policy</h2>
            <div className="prose prose-invert max-w-none">
              <h3>Last Updated: April 2, 2024</h3>

              <h1>BoomerAI Privacy Policy</h1>

              <h2>Introduction</h2>
              <p>This Privacy Policy describes how the BoomerAI - AI Task Optimizer extension protects user privacy.</p>

              <h2>Data Collection</h2>
              <p>BoomerAI <strong>does not collect, store, or transmit</strong> any user data. All operations performed in the
                extension take place locally on the user's device.</p>

              <h2>Use of Permissions</h2>
              <p>The extension uses the following permissions solely to fulfill its core functionality:</p>
              <ul>
                <li><strong>clipboardRead</strong>: Allows pasting text from the clipboard into the extension</li>
                <li><strong>clipboardWrite</strong>: Allows copying optimized text to the clipboard</li>
                <li><strong>tabs</strong>: Allows opening the ChatGPT page in a new tab</li>
              </ul>

              <h2>Cookies and Tracking Technologies</h2>
              <p>The extension does not use cookies or any other tracking technologies.</p>

              <h2>Security</h2>
              <p>Since we do not collect user data, there is no risk of data leakage from our side.</p>

              <h2>Changes to the Privacy Policy</h2>
              <p>In case of any changes to our privacy policy, we will update this page.</p>

              <h2>Contact</h2>
              <p>If you have any questions regarding our privacy policy, please contact us at: contact@boomerai.com</p>

              <h4>1. Information We Collect</h4>
              <p>
                We collect minimal information through our Service. The only data collected is what Vercel (our hosting provider)
                automatically collects for hosting purposes, such as:
              </p>
              <ul>
                <li>IP address (anonymized)</li>
                <li>Browser type and version</li>
                <li>Time and date of access</li>
                <li>Pages visited</li>
              </ul>
              <p>
                <strong>Important:</strong> Our Chrome extension does not collect, store, or process any user data or content.
                All prompt enhancement happens locally in your browser. We do not have access to your prompts or any other data
                processed by the extension.
              </p>

              <h4>2. How We Use Information</h4>
              <p>
                The limited information collected by Vercel is used only for:
              </p>
              <ul>
                <li>Providing and maintaining our Service</li>
                <li>Monitoring and analyzing usage patterns and trends</li>
                <li>Detecting, preventing, and addressing technical issues</li>
              </ul>

              <h4>3. Google Web Store</h4>
              <p>
                Our Chrome extension is distributed through the Google Web Store. Google may collect certain information as
                described in their privacy policy. This collection is governed by Google's privacy practices, and we do not
                have access to this data.
              </p>
              <p>
                For information about Google's privacy practices, please visit:
                <a href="https://policies.google.com/privacy" className="text-primary ml-1" target="_blank" rel="noopener noreferrer">
                  https://policies.google.com/privacy
                </a>
              </p>

              <h4>4. Data Security</h4>
              <p>
                We implement appropriate technical and organizational measures to protect the limited data we collect.
                However, no method of transmission over the Internet or electronic storage is 100% secure, so we cannot
                guarantee absolute security.
              </p>

              <h4>5. Children's Privacy</h4>
              <p>
                Our Service is not intended for individuals under the age of 13. We do not knowingly collect personally
                identifiable information from children under 13.
              </p>

              <h4>6. International Data Transfers</h4>
              <p>
                The limited information collected may be processed in countries where Vercel operates its servers.
                By using our Service, you consent to this processing.
              </p>

              <h4>7. Changes to This Privacy Policy</h4>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
                Privacy Policy on this page and updating the "Last Updated" date at the top.
              </p>

              <h4>8. Contact Us</h4>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p>
                Email: contact@boomerai.com
              </p>
            </div>
          </div>
        </section>

        {/* Terms of Service */}
        <section id="terms-of-service">
          <div className="bg-dark-lighter p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-6">Terms of Service</h2>
            <div className="prose prose-invert max-w-none">
              <h3>Last Updated: April 2, 2025</h3>

              <h4>1. Acceptance of Terms</h4>
              <p>
                By using the BoomerAI Chrome extension and website (collectively, the "Service"), you agree to be bound by these
                Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are
                prohibited from using the Service.
              </p>

              <h4>2. Use License</h4>
              <p>
                Permission is granted to temporarily install and use one copy of the BoomerAI Chrome extension per device, for
                personal, non-commercial use only. This license does not include:
              </p>
              <ul>
                <li>Modifying or copying the extension's materials</li>
                <li>Using the extension for any commercial purpose</li>
                <li>Attempting to decompile or reverse engineer the extension</li>
                <li>Removing any copyright or proprietary notations</li>
                <li>Transferring the extension to another person or "mirroring" it on any other server</li>
              </ul>
              <p>
                This license will automatically terminate if you violate any of these restrictions and may be terminated by
                BoomerAI at any time.
              </p>

              <h4>3. Disclaimer</h4>
              <p>
                The Service is provided on an "AS IS" and "AS AVAILABLE" basis. BoomerAI makes no warranties, expressed or implied,
                and hereby disclaims all warranties, including without limitation, implied warranties of merchantability, fitness
                for a particular purpose, and non-infringement.
              </p>

              <h4>4. Limitations</h4>
              <p>
                In no event shall BoomerAI be liable for any damages (including, without limitation, damages for loss of data or
                profit, or due to business interruption) arising out of the use or inability to use the Service, even if BoomerAI
                has been notified of the possibility of such damages.
              </p>

              <h4>5. User Content and Behavior</h4>
              <p>
                Our extension enhances your prompts locally in your browser. You remain solely responsible for the content
                of your prompts and how you use the enhanced results. You agree not to use the Service for any unlawful or
                prohibited purpose.
              </p>

              <h4>6. Chrome Web Store Terms</h4>
              <p>
                By using our extension from the Google Chrome Web Store, you also agree to Google's Terms of Service.
                The extension is subject to the Chrome Web Store policies, which are incorporated by reference.
              </p>

              <h4>7. Modifications to the Service</h4>
              <p>
                BoomerAI reserves the right to modify or discontinue, temporarily or permanently, the Service with or without
                notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuance
                of the Service.
              </p>

              <h4>8. Governing Law</h4>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of Poland, without regard to its
                conflict of law provisions.
              </p>

              <h4>9. Changes to Terms</h4>
              <p>
                BoomerAI reserves the right to update or change these Terms of Service at any time. We will notify users of any
                changes by updating the "Last Updated" date at the top of these Terms. Your continued use of the Service after
                any such changes constitutes your acceptance of the new Terms.
              </p>

              <h4>10. Contact Us</h4>
              <p>
                If you have any questions about these Terms, please contact us at:
              </p>
              <p>
                Email: zehvbiz@gmail.com
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-dark-lighter py-8 px-6 mt-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <Link to="/">
            <div className="flex items-center space-x-2">
              <img src={Logo} alt="BoomerAI Logo" className="w-20 -mr-2" />
              <span className="text-xl font-bold">BoomerAI</span>
            </div>
          </Link>
          <div className="text-gray-400 text-sm">
            © 2025 BoomerAI. All rights reserved.
          </div>
          <div className="flex gap-4">
            <Link to="/legal" className="text-gray-400 hover:text-gray-200 text-sm">
              Legal
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Legal; 