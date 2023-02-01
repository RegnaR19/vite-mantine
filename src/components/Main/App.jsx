import React from "react";
import Header from '../Navbar/Header';
import Footer from "../Navbar/Footer";
import Main from "./Main";

class App extends React.Component {

   render() {
      return (
         <>
            <Header />
            <Main />
            <Footer />
         </>
      )
   }
}

export default App