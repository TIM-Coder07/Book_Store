import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Grid Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="col-span-2">
            <h2 className="text-3xl font-bold mb-4 text-white">📚 Boi Poka</h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              Discover, read and manage your favorite books in one place. Your
              digital reading companion.
            </p>
          </div>

          {/* Services */}
          <div>
            <h6 className="text-white font-semibold mb-3">Services</h6>
            <ul className="space-y-2">
              <li className="hover:text-primary transition">Branding</li>
              <li className="hover:text-primary transition">Design</li>
              <li className="hover:text-primary transition">Marketing</li>
              <li className="hover:text-primary transition">Advertisement</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h6 className="text-white font-semibold mb-3">Company</h6>
            <ul className="space-y-2">
              <li className="hover:text-primary transition">About us</li>
              <li className="hover:text-primary transition">Contact</li>
              <li className="hover:text-primary transition">Jobs</li>
              <li className="hover:text-primary transition">Press kit</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h6 className="text-white font-semibold mb-3">Legal</h6>
            <ul className="space-y-2">
              <li className="hover:text-primary transition">Terms of use</li>
              <li className="hover:text-primary transition">Privacy policy</li>
              <li className="hover:text-primary transition">Cookie policy</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
          <p>© {new Date().getFullYear()} Boi Poka. All rights reserved.</p>
          <div className="flex gap-4 mt-3 md:mt-0">
            <span className="hover:text-primary transition cursor-pointer">
              Privacy
            </span>
            <span className="hover:text-primary transition cursor-pointer">
              Terms
            </span>
            <span className="hover:text-primary transition cursor-pointer">
              Support
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
