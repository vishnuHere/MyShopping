import Footer from "components/Footer";
import NavBar from "components/NavBar";
import Home from "pages/Home";
import React from "react";

const App: React.FC = () => {
    document.title = "MyShopping";

    return (
        <div>
            <NavBar />
            <Home />
            <Footer />
        </div>
    );
};

export default App;
