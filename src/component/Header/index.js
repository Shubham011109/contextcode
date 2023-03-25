import React, { useState } from 'react';
import LanguageContext from '../../context/LanguageContext';
import FeaturesSection from '../FeaturesSection';
import LandingSection from '../LandingSection';
import './index.css';

const langOptions = [
  { id: 1, value: 'EN', language: 'English' },
  { id: 2, value: 'HI', language: 'हिंदी' },
  { id: 3, value: 'TE', language: 'తెలుగు' },
];

const Header = () => {
  const [activeLanguage, setActiveLanguage] = useState('EN');

  const handleChange = (value) => {
    setActiveLanguage(value);
  };

  const LanguageCont = {
    activeLanguage,
    changeLanguage: handleChange,
  };

  return (
    <LanguageContext.Provider value={LanguageCont}>
      <nav className="nav-header">
        <img
          className="website-logo"
          src="https://assets.ccbp.in/frontend/react-js/windows-logo-img.png"
          alt="website logo"
        />
        <select
          className="language-dropdown"
          value={activeLanguage}
          onChange={(e) => {
            handleChange(e.target.value);
          }}
        >
          {langOptions.map((eachOption) => (
            <option key={eachOption.id} value={eachOption.value}>
              {eachOption.language}
            </option>
          ))}
        </select>
      </nav>
      <div>
      <LandingSection/>
      <FeaturesSection />
      </div>
    </LanguageContext.Provider>
  );
};

export default Header;
