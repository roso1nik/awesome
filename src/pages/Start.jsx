// eslint-disable-next-line no-unused-vars
import { Box, Typography } from "@mui/material";
import React from "react";
import CardBlock from "../components/Cards/CardBlock";
import { appContext } from "../context";
import { useNavigate } from "react-router-dom";
import { Categories } from "../assets/db/Caregories";
import { MostPopularData } from "../assets/db/MostPopularData";
import TagsChipsButton from "../components/Buttons/TagsChipsButton";

const Start = () => {
    const { navigateRef } = React.useContext(appContext);
    const history = useNavigate();

    return (
        <Box component="main" className="tw-flex tw-flex-col tw-gap-5">
            <Box className="container">
                Here I collect the most useful and relevant courses/materials
                that personally helped me in learning the required technology
                <br />
                You can add your own resource (soon)
            </Box>
            <TagsChipsButton />
            <Typography variant="body1" className="note dark:notedark">
                All resources belong to their authors, this site was created to
                collect them from open resources
            </Typography>
            <Box className="tw-flex tw-flex-col">
                <Typography variant="h2" className="titlemain">
                    Most Popular
                </Typography>
                <Box className="tw-flex tw-flex-row tw-gap-2 tw-flex-wrap tw-mt-1">
                    {Object.keys(MostPopularData).map((el) => (
                        <CardBlock
                            title={MostPopularData[el][0]}
                            goToPath={MostPopularData[el][1]}
                            type={"popular-block"}
                            key={Math.random()}
                        />
                    ))}
                </Box>
            </Box>
            <Box className="tw-flex tw-flex-col">
                <Typography
                    variant="h2"
                    className="titlemain"
                    ref={navigateRef}
                >
                    Navigate
                </Typography>
                <Box className="tw-flex tw-flex-col tw-gap-2">
                    {Object.keys(Categories).map((el) => (
                        <Box key={Math.random()}>
                            <Typography
                                variant="h4"
                                className="link-li tw-cursor-pointer hover:tw-text-indigo-700 tw-m-max !tw-delay-0"
                                onClick={() => history(`${Categories[el][1]}`)}
                            >
                                &gt; {Categories[el][0]}
                            </Typography>
                            {/* <Divider orientation="vertical" flexItem /> */}
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default Start;
