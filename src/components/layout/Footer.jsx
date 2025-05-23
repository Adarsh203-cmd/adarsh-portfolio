// src/components/layout/Footer.jsx
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { SOCIAL_LINKS, PERSONAL_INFO } from '../../utils/constants';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container-max-width section-padding">
        <div className="text-center">
          <p className="text-gray-400 mb-4">
            Designed & built by Adarsh P • {new Date().getFullYear()}
          </p>
          <div className="flex justify-center gap-6">
            {SOCIAL_LINKS.github && (
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                <Github size={20} />
              </a>
            )}
            {SOCIAL_LINKS.linkedin && (
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                <Linkedin size={20} />
              </a>
            )}
            {PERSONAL_INFO.email && (
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="hover:text-blue-400"
              >
                <Mail size={20} />
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
