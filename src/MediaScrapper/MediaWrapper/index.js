import React from "react";
import Pagination from "../Components/Pagination";
import SingleMediaComp from "../SingleMediaComp";
import "./media-wrapper.scss";

function MediaWrapper({ listOfMedia, paginationData }) {
  return (
    <>
      {/* Pagination */}
      {listOfMedia?.photos?.length > 0 || listOfMedia?.videos?.length > 0 ? (
        <div className="pagination-wrapper">
          <Pagination data={paginationData} pageLimit={5} />
        </div>
      ) : (
        <h1>No Posts to display</h1>
      )}

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

      {/* Pagination */}
      {(listOfMedia?.photos?.length > 0 || listOfMedia?.videos?.length > 0) && (
        <div className="pagination-wrapper">
          <Pagination data={paginationData} pageLimit={5} />
        </div>
      )}
    </>
  );
}

export default MediaWrapper;
