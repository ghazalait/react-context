import React from 'react';
import { localizedContent } from '../localizedContent';
import { LanguageContext } from '../context/LanguageContext'

const Sidebar = () => {
    return (
        <LanguageContext.Consumer>
            {({language}) => (
                <ul className="sidebar">
                    <li>{localizedContent[language].about}</li>
                    <li>{localizedContent[language].taketour}</li>
                    <li>{localizedContent[language].contact}</li>
                </ul>
            )}
        </LanguageContext.Consumer>
    )
}

export default Sidebar;