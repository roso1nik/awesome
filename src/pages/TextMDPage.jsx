import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import Markdown from "react-markdown";
import axios from "axios";
import TextMdLoader from "../components/Loaders/TextMDLoader";

const TextMDPage = () => {
    const [textMD, setTextMD] = React.useState("");
    const [isLoading, setIsLoading] = React.useState(true);
    const GITHUB_README =
        "https://raw.githubusercontent.com/roso1nik/awesome/main/README.md";

    useEffect(() => {
        try {
            axios
                .get(GITHUB_README)
                .then(function (response) {
                    setTextMD(response.data);
                    setIsLoading(false);
                    // console.log(response.data);
                })
                .catch(function (error) {
                    console.error(error);
                });
        } catch (error) {
            console.error(error);
        }
    }, [GITHUB_README]);

    return (
        <Box component="main">
            <Typography variant="h3" className="titlemain">
                Text MD File
            </Typography>
            {isLoading ? (
                <TextMdLoader />
            ) : (
                <Box className="reset-text tw-flex tw-flex-col tw-gap-1 text-container">
                    <Markdown>{textMD}</Markdown>
                </Box>
            )}

            <button
                className="buttondef tw-w-full !tw-mt-3"
                onClick={() => {
                    window.open(
                        "https://github.com/roso1nik/awesome/blob/main/README.md",
                        "_blank"
                    );
                }}
            >
                Open .md on github
            </button>
        </Box>
    );
};

export default TextMDPage;
