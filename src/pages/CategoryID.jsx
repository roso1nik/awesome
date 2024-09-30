/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Typography } from "@mui/material";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { STARTPAGE_ROUTE } from "../routes/consts";
import findDoubleArrayEl from "../helpers/findDoubleArrayCategory";
import findDoubleArrayForPath from "../helpers/findDoubleArrayForPath";
import CardBlock from "../components/Cards/CardBlock";
import { InfoCards } from "../assets/db/InfoCards";
import { Categories } from "../assets/db/Caregories";

const CategoryID = () => {
    const { categoryID } = useParams();

    let category = 0;
    let category_name = null;
    let newCheckedArray = [];

    // находим все карточки нужной нам категории
    let findActualCategory = React.useMemo(() => {
        for (let i = 0; i < Categories.length; i++) {
            if (Categories[i][1] === `/${categoryID}`) {
                category = Categories.indexOf(Categories[i]);
                category_name = Categories[i][0];
                return category;
            }
        }
    }, []);

    // выбираем нужные нам карточки по айди категории
    let getNewArrayWithCards = React.useMemo(() => {
        for (let i = 0; i < InfoCards.length; i++) {
            if (InfoCards[i][3] === findActualCategory) {
                newCheckedArray.push(InfoCards[i]);
            }
        }
        return newCheckedArray;
    }, []);

    const history = useNavigate();

    // LEGACY
    // if (!Categories.includes(categoryID)) {
    //     history(STARTPAGE_ROUTE, { replace: true }); // redirect to main page if categoryID doesn't existr
    // }
    if (!findDoubleArrayForPath(Categories, categoryID.replace(/\//g, ""))) {
        history(STARTPAGE_ROUTE, { replace: true }); // redirect to main page if categoryID doesn't existr
    }

    newCheckedArray = getNewArrayWithCards;
    // console.log(newCheckedArray);

    return (
        <Box component="main">
            <Typography variant="h3" className="titlemain">
                {findDoubleArrayEl(Categories, categoryID.replace(/\//g, ""))}
            </Typography>
            {/* <button onClick={() => console.log(findActualCategory)}>
                check
            </button> */}
            <Box className="tw-flex tw-flex-col md:tw-flex-row tw-flex-wrap tw-gap-2">
                {newCheckedArray.length !== 0 ? (
                    <>
                        {Object.keys(newCheckedArray).map((el) => (
                            <CardBlock
                                id={el}
                                title={newCheckedArray[el][0]}
                                goToPath={newCheckedArray[el][1]}
                                desc={newCheckedArray[el][2]}
                                category={category_name}
                                tagId={newCheckedArray[el][4]}
                                createdBy={newCheckedArray[el][5]}
                                createdAt={newCheckedArray[el][6]}
                                imagePath={newCheckedArray[el][7]}
                                key={Math.random()}
                            />
                        ))}
                    </>
                ) : (
                    <Typography variant="h5">Oops... nothing here</Typography>
                )}
            </Box>
        </Box>
    );
};

export default CategoryID;
