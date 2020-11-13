import React, { Component } from "react";
import Form from "./Form";
import Navbar from "./Navbar";
import PageContent from "./PageContent";
import {ThemeProvider} from './contexts/ThemeContext'
import {LanguageProvider} from './contexts/LanguageContext'

class App extends Component {
  render() {
    return (
      <LanguageProvider>
      <ThemeProvider>
      <PageContent>
        <Navbar />
        <Form />
      </PageContent>
      </ThemeProvider>
      </LanguageProvider>
    );
  }
}

export default App;