import React, { useState } from "react";
import './App.css';
import Dropdown from "./components/dropdown";
import 'h8k-components';

const title = "Employee Information";

const countryOptions = [
  'USA',
  'Germany',
  'France',
  'Canada',
  'India',
  'Poland',
  'Japan',
  'Spain',
  'Australia'
];

const languageOptions = [
  'English',
  'Spanish',
  'French',
  'German'
];

function App() {
  const [country, setCountry] = useState('');
  const [language, setLanguage] = useState('');

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <div>
      <h8k-navbar header={title}></h8k-navbar>
      <div className="layout-row align-items-center justify-content-center mt-50">
        <section className="layout-column">
          <div data-testid="country-options">
            <Dropdown options={countryOptions} labelText={'Select Country'} onChange={handleCountryChange}/>
          </div >
          <div data-testid="language-options">
            <Dropdown options={languageOptions} labelText={'Select Language'} onChange={handleLanguageChange}/>
          </div>
          <label className="mt-50 text-align-center">
            Final Selections:
          </label>
          <label className="mt-10 finalText" data-testid="country-selected">
            Country Selected: {country}
          </label>
          <label className="mt-10 finalText" data-testid="language-selected">
            Language Selected: {language}
          </label>
        </section>
      </div>
    </div>
  );
}

export default App;
