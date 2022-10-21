import React from "react";
import { Box, Typography } from "@mui/material";
import BodyPart from "../BodyPart/BodyPart.component";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { useContext } from "react";
import LeftArrowIcon from "../../assets/assets/icons/left-arrow.png";
import RightArrowIcon from "../../assets/assets/icons/right-arrow.png";
import ExerciseCard from "../ExerciseCard/ExerciseCard.component";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className='left-arrow'>
      <img src={LeftArrowIcon} alt='left' />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className='right-arrow'>
      <img src={RightArrowIcon} alt='right' />
    </Typography>
  );
};

const HorisontalScrollbar = ({ data, bodyPart, setBodyPart, isBodyPart }) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item) => (
        <Box
          key={item.id || item}
          itemID={item.id || item}
          title={item.id || item}
          m='0 40px'
          p='50px 0'
        >
          {isBodyPart ? (
            <BodyPart
              item={item}
              bodyPart={bodyPart}
              setBodyPart={setBodyPart}
            />
          ) : (
            <ExerciseCard exercise={item} />
          )}
        </Box>
      ))}
    </ScrollMenu>
  );
};

export default HorisontalScrollbar;
