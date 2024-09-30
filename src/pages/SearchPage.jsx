import { Alert, Box, Chip, Typography } from "@mui/material";
import React from "react";
import SearchInput from "../components/Inputs/SearchInput";
import TagsChipsButton from "../components/Buttons/TagsChipsButton";
import { Categories } from "../assets/db/Caregories";

const SearchPage = () => {
    return (
        <Box component="main" className="tw-flex tw-flex-col tw-gap-3">
            <Alert severity="warning" className="fix-svg">
                This is preview version.
            </Alert>
            <Typography variant="h3" className="titlemain">
                Search hub
            </Typography>
            <SearchInput />
            <Box className="container">
                This page contains all the site navigation, use all its features
                wisely :)
            </Box>
            <Box className="tw-flex tw-flex-col tw-gap-2">
                <Typography variant="h4" className="!tw-mb-0">
                    Categories
                </Typography>
                <Box className="tw-flex tw-flex-row tw-flex-wrap tw-gap-1">
                    {Object.keys(Categories).map((el) => (
                        <Chip
                            className="tw-w-max"
                            variant="outlined"
                            label={Categories[el][0]}
                            key={Categories[el][0]}
                        />
                    ))}
                </Box>
            </Box>
            <Box className="tw-flex tw-flex-col tw-gap-2">
                <Typography variant="h4" className="!tw-mb-0">
                    Tags
                </Typography>
                <TagsChipsButton />
            </Box>
            <Typography variant="h3" className="titlemain !tw-mt-3">
                Also see
            </Typography>
            <Typography variant="body1" className="note">
                Nothing here. Why?
            </Typography>
        </Box>
    );
};

export default SearchPage;
