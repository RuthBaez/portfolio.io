// SocialIcons.tsx

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';

interface SocialIconsProps {
  linkedinLink: string;
  githubLink: string;
  gmailLink: string;
  googleDeveloperLink: string;
}

const SocialIcons: React.FC<SocialIconsProps> = ({
  linkedinLink,
  githubLink,
  gmailLink,
  googleDeveloperLink,
}) => {
  return (
    <div className="flex justify-center space-x-4">
      <div className="flex flex-col items-center">
        <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <p className="mt-2">LinkedIn</p>
      </div>
      <div className="flex flex-col items-center">
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <p className="mt-2">GitHub</p>
      </div>
      <div className="flex flex-col items-center">
        <a href={gmailLink} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGoogle} size="2x" />
        </a>
        <p className="mt-2">Gmail</p>
      </div>
      <div className="flex flex-col items-center">
        <a href={googleDeveloperLink} target="_blank" rel="noopener noreferrer">
          {/* Use una imagen SVG o de otro tipo para el ícono de Google Developer */}
          <img
            src="https://res.cloudinary.com/de5c9p8wb/image/upload/f_auto,q_auto/zbekaixalysstwzg7uzs"
            alt="Google Developer"
            className="w-8 h-8"
          />
        </a>
        <p className="mt-2">Google Developer</p>
      </div>
    </div>
  );
};

export default SocialIcons;
