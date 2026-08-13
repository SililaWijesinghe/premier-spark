import { motion } from 'motion/react';
import ReadingProgressBar from './ReadingProgressBar';

export default function TermsAndConditions() {
  return (
    <>
      <ReadingProgressBar />
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Terms and Conditions</h1>
          <div className="prose prose-invert max-w-none prose-p:text-[#A5B0C3] prose-headings:text-[#F8FAFC] prose-li:text-[#A5B0C3]">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            
            <h2 className="text-2xl mt-8 mb-4">1. Agreement to Terms</h2>
            <p>By accessing our website, you agree to be bound by these Terms and Conditions and agree that you are responsible for the agreement with any applicable local laws. If you disagree with any of these terms, you are prohibited from accessing this site.</p>

            <h2 className="text-2xl mt-8 mb-4">2. Use License</h2>
            <p>Permission is granted to temporarily download one copy of the materials on Premier Digital's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>modify or copy the materials;</li>
              <li>use the materials for any commercial purpose or for any public display;</li>
              <li>attempt to reverse engineer any software contained on Premier Digital's website;</li>
              <li>remove any copyright or other proprietary notations from the materials; or</li>
              <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
            </ul>

            <h2 className="text-2xl mt-8 mb-4">3. Disclaimer</h2>
            <p>All the materials on Premier Digital's website are provided "as is". Premier Digital makes no warranties, may it be expressed or implied, therefore negates all other warranties. Furthermore, Premier Digital does not make any representations concerning the accuracy or reliability of the use of the materials on its website or otherwise relating to such materials or any sites linked to this website.</p>

            <h2 className="text-2xl mt-8 mb-4">4. Limitations</h2>
            <p>Premier Digital or its suppliers will not be hold accountable for any damages that will arise with the use or inability to use the materials on Premier Digital's website, even if Premier Digital or an authorize representative of this website has been notified, orally or written, of the possibility of such damage.</p>

            <h2 className="text-2xl mt-8 mb-4">5. Revisions and Errata</h2>
            <p>The materials appearing on Premier Digital's website may include technical, typographical, or photographic errors. Premier Digital will not promise that any of the materials in this website are accurate, complete, or current. Premier Digital may change the materials contained on its website at any time without notice.</p>

            <h2 className="text-2xl mt-8 mb-4">6. Links</h2>
            <p>Premier Digital has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The presence of any link does not imply endorsement by Premier Digital of the site. The use of any linked website is at the user's own risk.</p>

            <h2 className="text-2xl mt-8 mb-4">7. Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us at:</p>
            <p>Email: sales@premierdigital.lk</p>
          </div>
        </motion.div>
      </div>
    </>
  );
}