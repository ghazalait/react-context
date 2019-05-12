import React from 'react';

export const languageCodes = {
    enUS: 'en-US',
    frFR: 'fr-FR',
}

export const languagesLabels = [{
        code: languageCodes.enUS,
        name: 'English',
    },{
        code: languageCodes.frFR,
        name: 'French',
    },
]
export const LanguageContext = React.createContext({
    language: languageCodes.enUS,
    switchLanguage:() => {},
});
