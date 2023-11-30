/** @format */

import React, { createContext, useState, useContext, useEffect } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
	const [language, setLanguage] = useState(getInitialLanguage);

	function getInitialLanguage() {
		// Check if language is stored in cookies, otherwise use a default language
		const languageCookie = document.cookie.replace(
			/(?:(?:^|.*;\s*)language\s*=\s*([^;]*).*$)|^.*$/,
			"$1"
		);
		return languageCookie || "en";
	}

	const switchLanguage = (newLanguage) => {
		setLanguage(newLanguage);
		document.cookie = `language=${newLanguage}; path=/; max-age=${
			60 * 60 * 24 * 365
		}`;
	};

	return (
		<LanguageContext.Provider value={{ language, switchLanguage }}>
			{children}
		</LanguageContext.Provider>
	);
};

export const useLanguage = () => {
	return useContext(LanguageContext);
};
