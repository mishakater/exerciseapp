import React from "react";
import { Stack, Box, Typography } from "@mui/material";

const ExerciseVideos = ({ exerciseVideos, name }) => {
  return (
    <Box
      sx={{
        marginTop: "90px",
      }}
    >
      <Typography variant='h3'>
        Watch{" "}
        <span
          style={{
            textTransform: "capitalize",
            color: "red",
          }}
        >
          {name}
        </span>{" "}
        excercise videos
      </Typography>
      <Stack
        flexDirection='row'
        mt='100px'
        sx={{
          gap: { lg: "110px", xs: 0 },
        }}
      >
        {exerciseVideos?.slice(0, 3).map((item, index) => (
          <Stack
            flexDirection='column'
            gap='10px'
            sx={{
              maxWidth: "360px",
            }}
          >
            <a
              key={index}
              href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
              target='_blank'
              rel='noreferrer'
            >
              <img
                style={{
                  width: "360px",
                  borderRadius: "10px",
                  boxShadow: "1px 2px 9px #000000",
                }}
                src={item.video.thumbnails[0].url}
                alt={item.video.title}
              />
            </a>
            <Typography variant='h5'>{item.video.title}</Typography>
            <Typography
              sx={{
                fontWeight: "300",
              }}
            >
              {item.video.channelName}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
