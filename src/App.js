import React from "react";
import { Container } from "@mui/material";
import "./scss/libs/global.scss";
import { appContext } from "./context";
import Header from "./components/Header";
import { useNavigate } from "react-router-dom";
import AppRouter from "./pages/AppRouter";
import Footer from "./components/Footer";
import { SEARCH_ROUTE } from "./routes/consts";

function App() {
    const navigateRef = React.useRef(null);
    const history = useNavigate();

    const [theme, setTheme] = React.useState(null);
    const [searchValue, setSearchValue] = React.useState("");

    const executeScroll = () => {
        // REMOVE "awesome" if BrowserRouter
        if (window.location.pathname === "/") {
            navigateRef.current.scrollIntoView();
        } else {
            // если мы не на главной странице, то роутинг к обозревателю
            history(SEARCH_ROUTE);
        }
    };

    console.log(window.location.pathname);

    return (
        <appContext.Provider
            value={{
                theme,
                setTheme,
                navigateRef,
                executeScroll,
                searchValue,
                setSearchValue,
            }}
        >
            <Container maxWidth="lg" className="!tw-flex tw-flex-col tw-gap-3">
                <Header />
                <AppRouter />
                <Footer />
            </Container>
        </appContext.Provider>
    );
}

export default App;
