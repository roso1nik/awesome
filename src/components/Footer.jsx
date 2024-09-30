/* eslint-disable react/jsx-no-comment-textnodes */
import { Box, Typography } from "@mui/material";
import React from "react";
import { HELLOPAGE_ROUTE } from "../routes/consts";
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const history = useNavigate();

    return (
        <Box className="tw-flex tw-flex-col tw-gap-0 tw-flex-wrap note dark:notedark tw-mt-5">
            <Typography variant="body1">You've reached the end</Typography>
            <Box className="tw-flex tw-flex-row">
                <Typography variant="body1">2024 //&nbsp;</Typography>
                <Typography
                    variant="body1"
                    className="hover:tw-decoration-solid hover:tw-underline tw-cursor-pointer"
                    onClick={() => {
                        history(HELLOPAGE_ROUTE);
                        window.scrollTo(0, 0);
                    }}
                >
                    about
                </Typography>
            </Box>
        </Box>
    );
};

export default Footer;
