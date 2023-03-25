import React from 'react'
import Header from './component/Header'
import LanguageContext from './context/LanguageContext'


const App = () => {

  return (
    <LanguageContext.Provider value={LanguageContext}>
      <Header />
    </LanguageContext.Provider>
  )
}

// app
export default App