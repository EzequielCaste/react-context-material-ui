import React from "react";
import Form from "./Form";
import Navbar from "./Navbar";
import PageContent from "./PageContent";
import {ThemeProvider} from './contexts/ThemeContext'
import {LanguageProvider} from './contexts/LanguageContext'

export default function App() {

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