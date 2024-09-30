import { IconButton } from "@mui/material";
import React from "react";
import { appContext } from "../../context";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

const ChangeThemeButton = React.forwardRef(function ChangeThemeButton(
    props,
    ref
) {
    const { theme, setTheme } = React.useContext(appContext);

    React.useEffect(() => {
        // localStorage.removeItem("theme");
        // проверяем настройки устройства для первоначальной настройки темы
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    }, [theme, setTheme]);

    React.useEffect(() => {
        // смена темы с помощью tailwind
        if (theme === "dark") {
            document.documentElement.classList.add("tw-dark");
        } else {
            document.documentElement.classList.remove("tw-dark");
        }

        // запомнить выбранную тему
        if (localStorage.getItem("theme") === "dark") {
            document.documentElement.classList.add("tw-dark");
            setTheme("dark");
        }
        if (localStorage.getItem("theme") === "light") {
            document.documentElement.classList.remove("tw-dark");
            setTheme("light");
        }
    }, [theme, setTheme]);

    const handleClickTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
        if (theme === "light") localStorage.setItem("theme", "dark");
        if (theme === "dark") localStorage.setItem("theme", "light");
    };

    return (
        <IconButton
            onClick={handleClickTheme}
            className="!tw-h-max !tw--mb-1.5"
        >
            {theme === "dark" ? (
                <LightModeIcon className="!fill-current !tw-fill-primarycolor-dark" />
            ) : (
                <DarkModeIcon />
            )}
        </IconButton>
    );
});

export default ChangeThemeButton;
