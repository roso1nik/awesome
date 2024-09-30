import { Box, Tooltip, Typography } from "@mui/material";
import React from "react";
import { AppInfo } from "../assets/AppInfo";
import { STARTPAGE_ROUTE } from "../routes/consts";
import { useNavigate } from "react-router-dom";

const HelloPage = () => {
    const history = useNavigate();

    return (
        <Box component="main" className="tw-flex tw-flex-col tw-gap-3">
            <Typography variant="h2" className="titlemain">
                Hello World!
            </Typography>
            <Box className="tw-flex tw-flex-col tw-gap-6">
                <Box className="tw-flex tw-flex-col tw-gap-2">
                    <Typography variant="h4">
                        Welcome to the best hub for programming, IT, and
                        computer science enthusiasts
                    </Typography>
                    <Typography variant="h5" className="!tw-font-light">
                        As a programmer and IT enthusiast, I've always been
                        frustrated by the scattered nature of online resources.
                        That's why I created this website - to gather the most
                        valuable information, tutorials, and insights in one
                        place. <br />
                        My goal is to provide a comprehensive platform where
                        professionals and beginners alike can find reliable,
                        up-to-date, and well-structured content to improve their
                        skills and stay ahead in the rapidly evolving world of
                        computer science.
                    </Typography>
                </Box>
                <Box className="tw-flex tw-flex-col tw-gap-2">
                    <Typography variant="h4">
                        A community-driven initiative
                    </Typography>
                    <Typography variant="h5" className="!tw-font-light">
                        Currently, I'm curating the content myself, but I
                        envision a future where our community takes an active
                        role in shaping the website's growth. Soon, you'll be
                        able to contribute your own knowledge, experiences, and
                        expertise to the platform, making it an even more
                        valuable resource for everyone. Our mission is to foster
                        a collaborative environment where users can share,
                        learn, and grow together.
                    </Typography>
                </Box>
                <Box className="tw-flex tw-flex-col tw-gap-2">
                    <Typography variant="h4">Important thing</Typography>
                    <Typography variant="h5" className="!tw-font-light">
                        In today's fast-paced digital landscape, it's easy to
                        get lost in the noise. That's why I believe it's more
                        important than ever to do your own research, to question
                        assumptions, and to seek out multiple sources of
                        information. Don't just take my word for it - or anyone
                        else's, for that matter. Take the time to dig deeper, to
                        explore different perspectives, and to form your own
                        opinions. #dyor
                    </Typography>
                </Box>
            </Box>
            <Box
                className="container tw-w-max tw-cursor-pointer"
                onClick={() => {
                    history(STARTPAGE_ROUTE);
                    window.scrollTo(0, 0);
                }}
            >
                <Typography
                    variant="h5"
                    className="hover:tw-decoration-solid hover:tw-underline"
                >
                    Lets Explore
                </Typography>
            </Box>
            <Box className="tw-flex tw-flex-col tw-gap-1 tw-mt-6">
                <Typography variant="h4" className="titlemain">
                    Tech info
                </Typography>
                <Box className="tw-flex tw-flex-row tw-gap-1">
                    <button
                        className="buttondef"
                        onClick={() =>
                            window.open("https://github.com/roso1nik", "_blank")
                        }
                    >
                        github@roso1nik
                    </button>
                    <button
                        className="buttondef button-git"
                        onClick={() =>
                            window.open(
                                "https://github.com/roso1nik/awesome",
                                "_blank"
                            )
                        }
                    >
                        star on github
                    </button>
                </Box>
                <Tooltip title="Open changelog" arrow>
                    <Box
                        className="tw-w-max tw-flex tw-flex-row !tw-cursor-pointer hover:tw-decoration-solid hover:tw-underline"
                        onClick={() =>
                            window.open(
                                "https://github.com/roso1nik/awesome/releases",
                                "_blank"
                            )
                        }
                    >
                        <Typography variant="h6">
                            Correct version&nbsp;
                        </Typography>
                        <Typography variant="h6">{AppInfo.version}</Typography>
                    </Box>
                </Tooltip>

                <Box className="tw-flex tw-flex-row">
                    <Typography variant="h6">Data updates&nbsp;</Typography>
                    <Typography variant="h6">{AppInfo.dataVersion}</Typography>
                </Box>
                <Typography variant="body1" className="note dark:notedark">
                    All resources belong to their authors, this site was created
                    to collect them from open resources
                </Typography>
            </Box>
        </Box>
    );
};

export default HelloPage;
