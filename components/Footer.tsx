import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">AB INFOTECH SOLUTIONS Pvt Ltd</h3>
            <p className="text-sm">
              India&apos;s leading IT services provider delivering innovative technology solutions.
            </p>
            <p className="text-xs text-gray-400 mt-2">ISO CERTIFIED 9001:2015</p>
            <p className="text-xs text-gray-400">REG NO : 230422082732QRA</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-white transition">Home</a></li>
              <li><a href="#services" className="hover:text-white transition">Services</a></li>
              <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="mailto:hr@abinfotechsolutions.com" className="hover:text-white transition">hr@abinfotechsolutions.com</a></li>
              <li><a href="tel:+919545897754" className="hover:text-white transition">+91 9545897754</a></li>
              <li><a href="tel:+918999897754" className="hover:text-white transition">+91 8999897754</a></li>
              <li><a href="http://www.abinfotechsolutions.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">www.abinfotechsolutions.com</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Follow Us</h4>
            <div className="flex flex-wrap gap-3 text-sm">
              <a href="https://in.linkedin.com/company/ab-infotech-solutions" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">LinkedIn</a>
              <a href="https://www.instagram.com/ab_infotech_solutions_pvt_ltd" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Instagram</a>
              <a href="https://www.facebook.com/profile.php?id=100002558135236" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Facebook</a>
              <a href="https://wa.link/owltax" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">WhatsApp</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              &copy; 2024 AB INFOTECH SOLUTIONS Pvt Ltd. All rights reserved. | ISO CERTIFIED 9001:2015 | REG NO: 230422082732QRA
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
