import React from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const history = useNavigate();

    return (
        <Box component="main" sx={{ mt: 3 }} className="error-page">
            <Box className="tw-flex tw-flex-col tw-gap-3">
                <Box className="tw-flex tw-flex-col">
                    <Typography
                        variant="h2"
                        className="tw-text-red-600" // dark:tw-text-primarycolor-dark
                    >
                        Error 404
                    </Typography>
                    <Typography variant="h2" className="note dark:notedark">
                        Page not found
                    </Typography>
                </Box>
                <Box>
                    <button onClick={() => history(-1)} className="buttondef">
                        Return
                    </button>
                </Box>
            </Box>
        </Box>
    );
};

export default ErrorPage;
