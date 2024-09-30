import React from "react";
import Styles from "./SearchInput.module.scss";
import { Box } from "@mui/material";

const SearchInput = () => {
    return (
        <Box className="tw-flex tw-flex-row tw-justify-between tw-gap-5">
            <input
                className={`${Styles.input} dark:!tw-bg-zinc-700 dark:!tw-border-zinc-600 tw-basis-9/10 `}
                placeholder="how to hack google..."
            />
            <button className="tw-basis-1/10 buttondef">search</button>
        </Box>
    );
};

export default SearchInput;
