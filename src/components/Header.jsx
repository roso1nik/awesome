import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import React from "react";
import ChangeThemeButton from "./Buttons/ChangeThemeButton";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import { useNavigate } from "react-router-dom";
import { STARTPAGE_ROUTE, TEXTMD_ROUTE } from "../routes/consts";
import { appContext } from "../context";
import ExploreButton from "./Buttons/ExploreButton";
// import UpdateIcon from "@mui/icons-material/Update";

const Header = () => {
    const history = useNavigate();

    const { executeScroll } = React.useContext(appContext);

    // LEGACY
    // const windowScrollTo = (px) => {
    //     window.scrollTo({
    //         top: px,
    //         left: 0,
    //         behavior: "smooth",
    //     });
    // };

    return (
        <Box
            component="header"
            className="tw-flex tw-flex-col tw-gap-0 tw-w-full"
        >
            <Box className="tw-flex tw-w-full tw-flex-row tw-justify-between tw-flex-wrap">
                <Box className="tw-flex tw-flex-row tw-gap-1 md:tw-gap-3 tw-w-max tw-items-center tw-flex-wrap">
                    <Typography
                        variant="h3"
                        className="tw-text-primarycolor dark:tw-text-primarycolor-dark hover:tw-bg-indigo-200 tw-cursor-pointer"
                        onClick={() => history(STARTPAGE_ROUTE)}
                    >
                        awesome
                    </Typography>
                    <Box className="tw-flex tw-flex-row tw-gap-1 md:tw-gap-3">
                        <Tooltip title="Change Theme" arrow>
                            <ChangeThemeButton className="!tw--mb-1.5" />
                        </Tooltip>
                        <Tooltip title="See categories" arrow>
                            <IconButton
                                className="!tw--mb-1.5"
                                onClick={executeScroll}
                            >
                                <FormatListBulletedIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="See on text file (.md)" arrow>
                            <IconButton
                                className="!tw--mb-1.5"
                                onClick={() => history(TEXTMD_ROUTE)}
                            >
                                <TextSnippetIcon />
                            </IconButton>
                        </Tooltip>
                    </Box>
                    <ExploreButton />
                </Box>
                {/* <Box className="tw-flex tw-flex-row tw-gap-3 tw-flex-wrap tw-items-center tw-w-max">
                    <Tooltip title="Update date" arrow>
                        <IconButton
                            // disabled
                            disableRipple
                            className="!tw--mb-1.5 tw-flex tw-flex-row tw-gap-2 !tw-text-[18px]"
                        >
                            18.05
                            <UpdateIcon />
                        </IconButton>
                    </Tooltip>
                </Box> */}
            </Box>

            <Typography
                variant="body1"
                className="tw-text-indigo-400 tw-cursor-pointer hover:tw-decoration-solid hover:tw-underline tw-hidden md:tw-block"
                onClick={() =>
                    window.open("https://github.com/roso1nik", "_blank")
                }
            >
                created by roso1nik
            </Typography>
        </Box>
    );
};

export default Header;
