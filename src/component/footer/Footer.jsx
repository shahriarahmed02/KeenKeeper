import React from 'react';

import Facebook from "../../assets/facebook.png"
import Instagram from "../../assets/instagram.png"
import Twitter from "../../assets/twitter.png"

const Footer = () => {
  return (
    <footer className="bg-[#244D3F] text-white py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center text-center space-y-6">
          
          {/* Brand Logo & Name */}
          <div className="flex flex-col items-center text-center mx-auto">
            <h2 className="text-5xl font-bold tracking-tight">KeenKeeper</h2>
            <p className="mt-4 text-gray-300 max-w-md text-sm  mx-auto  items-center">
              Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">Social Links</span>
            <div className="flex gap-5">
                    {/* Instagram */}
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all active:scale-95">
                <img src={Instagram} alt="Instagram" className="w-5 h-5 object-contain" />
              </a>
              
              {/* Facebook */}
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all active:scale-95">
                <img src={Facebook} alt="Facebook" className="w-5 h-5 object-contain" />
              </a>

              {/* Twitter */}
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all active:scale-95">
                <img src={Twitter} alt="Twitter" className="w-5 h-5 object-contain" />
              </a>

        

            </div>
          </div>

          {/* Divider */}
          <div className="w-full border-t border-white/10 pt-8 mt-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
              <p>© 2026 KeebKeeper. All rights reserved.</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-white transition-colors">Cookies</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;