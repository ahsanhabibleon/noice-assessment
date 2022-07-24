import React from "react";
import SingleMediaComp from "../SingleMediaComp";
import "./media-wrapper.scss";

function MediaWrapper({ listOfMedia }) {
  return (
    <>
      {listOfMedia.photos &&
        listOfMedia.photos.map((media) => (
          <SingleMediaComp
            key={media.id}
            url={media.url}
            src={media.src.medium}
            author={media.photographer}
          />
        ))}

      {listOfMedia.videos &&
        listOfMedia.videos.map((media) => {
          const sdVideo = media.video_files.filter(
            (med) => med.quality === "sd"
          );
          return (
            <SingleMediaComp key={media.id} videoSource={sdVideo[0].link} />
          );
        })}
    </>
  );
}

export default MediaWrapper;
