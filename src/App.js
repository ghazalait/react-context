import React from 'react';
import { LanguageContext, languageCodes } from './context/LanguageContext'
import Layout from './components/layout';
import './app.scss';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            language: languageCodes.enUS,
        }
    }

    switchLanguage = (event) => {
        this.setState({
            language: event.target.value,
        });
    }

    render(){
        return(
            <LanguageContext.Provider value={{
                language: this.state.language,
                switchLanguage: this.switchLanguage
            }}>
                <Layout />
            </LanguageContext.Provider>
        );
    }
}

export default App;