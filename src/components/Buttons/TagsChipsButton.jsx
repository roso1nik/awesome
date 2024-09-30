import { Box, Chip } from "@mui/material";
import React from "react";
import { Tags } from "../../assets/db/Tags";

const TagsChipsButton = () => {
    return (
        <Box className="tw-flex tw-flex-row tw-w-full md:tw-gap-3 tw-gap-1 tw--mt-1 tw-flex-wrap">
            {Tags.map((el) => (
                <Chip label={el} variant="outlined" key={el} />
            ))}
        </Box>
    );
};

export default TagsChipsButton;
