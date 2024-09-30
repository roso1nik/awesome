import { Box, Typography } from "@mui/material";
import React from "react";
import AttachmentIcon from "@mui/icons-material/Attachment";
import CategoryIcon from "@mui/icons-material/Category";
import PersonIcon from "@mui/icons-material/Person";
import HistoryIcon from "@mui/icons-material/History";
import { useNavigate } from "react-router-dom";
import { ERROR_ROUTE } from "../../routes/consts";

// types -> popular-block
const CardBlock = ({
    type,
    id,
    title,
    goToPath,
    category,
    tagId,
    createdBy,
    desc,
    createdAt,
    imagePath,
}) => {
    const history = useNavigate();

    return (
        <Box
            className="tw-w-full md:tw-w-max hover:tw-cursor-pointer !tw-min-w-48 tw-flex tw-flex-col tw-gap-0 tw-bg-indigo-200 dark:tw-bg-indigo-150 tw-overflow-hidden tw-relative tw-rounded-lg tw-p-3 tw-pb-4 tw-pl-5 tw-text-indigo-950"
            onClick={() => {
                if (type !== "popular-block") {
                    if (goToPath) window.open(goToPath, "_blank");
                    else history(ERROR_ROUTE);
                }
                if (type === "popular-block") history(goToPath);
            }}
        >
            <Box className="tw-absolute tw-w-1.5 tw-top-0 tw-bottom-0 tw-left-0 tw-bg-indigo-600"></Box>
            {type !== "popular-block" ? (
                <Box className="tw-flex tw-flex-row tw-gap-1 tw-flex-wrap">
                    <PersonIcon className="fix-svg !tw--mt-1" size="small" />
                    <Typography
                        variant="subtitle2"
                        className="note !tw--mt-0.5"
                    >
                        {createdBy || "unknown"}
                    </Typography>
                </Box>
            ) : (
                <></>
            )}

            <Typography
                variant="h4"
                className="hover:tw-decoration-solid hover:tw-underline"
            >
                {title || "undefined"}
            </Typography>

            {category ? (
                <Box className="tw-flex tw-flex-row tw-gap-1 tw-flex-wrap">
                    <>
                        <CategoryIcon className="fix-svg" />
                        <Typography
                            variant="subtitle1"
                            className="note !tw--mt-0.5"
                        >
                            {category || "error category!"}
                        </Typography>
                    </>
                </Box>
            ) : (
                <></>
            )}

            {type === "popular-block" ? (
                <Box className="tw-flex tw-flex-row tw-gap-1 tw-flex-wrap">
                    <AttachmentIcon className="fix-svg" />
                    <Typography
                        variant="subtitle1"
                        className="note !tw--mt-0.5"
                    >
                        4
                    </Typography>
                </Box>
            ) : (
                <></>
            )}

            {type !== "popular-block" ? (
                <Box className="tw-flex tw-flex-col tw-gap-2">
                    <Box className="tw-flex tw-flex-row tw-gap-1 tw-flex-wrap">
                        <HistoryIcon
                            className="fix-svg !tw--mt-0.5"
                            fontSize="small"
                        />
                        <Typography
                            variant="subtitle2"
                            className="note !tw--mt-0.5"
                        >
                            {createdAt || "01.01.1980"}
                        </Typography>
                    </Box>
                    <Typography variant="subtitle1" className="note !tw--mt-2">
                        {desc || "no description"}
                    </Typography>
                </Box>
            ) : (
                <></>
            )}
        </Box>
    );
};

export default CardBlock;
