import React from 'react';
import { LanguageContext, languagesLabels } from '../context/LanguageContext'

const Header = () => {
    return(
        <div className="header">
            <div className="logo">logo</div>
            <div className="language">
            <LanguageContext.Consumer>
            {({language, switchLanguage}) => (
            
                <select value={language}  onChange={switchLanguage}>
                    {languagesLabels && languagesLabels.map((l) =>
                        <option key={l.code} value={l.code}>{l.name}</option>
                    )}
                </select>
            
                )
            }
            </LanguageContext.Consumer>
            </div>
        </div>
    );
}

export default Header;