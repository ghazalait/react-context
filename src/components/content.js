import React from 'react';
import { localizedContent } from '../localizedContent';
import { LanguageContext } from '../context/LanguageContext'

const Content = () => {
    return (
        <LanguageContext.Consumer>
            {({language}) => (
                <div className="content">{localizedContent[language].home}</div>
            )
            }
        </LanguageContext.Consumer>
    )
}

export default Content;