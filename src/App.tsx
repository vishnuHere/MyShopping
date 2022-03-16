import NavBar from "components/NavBar";
import React from "react";

const App: React.FC = () => {
    document.title = "MyShopping";

    return (
        <div>
            <NavBar />
        </div>
    );
};

export default App;
