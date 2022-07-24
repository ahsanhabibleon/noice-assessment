import React, { useEffect, useState } from "react";
import SearchBox from "./Components/SearchBox";
import LoadingTemplate from "./Components/LoadingTemplate";
import ErrorTemplate from "./Components/ErrorTemplate";
import MediaWrapper from "./MediaWrapper";
import { createClient } from "pexels";
import SelectMediaType from "./SelectMediaType";
import Pagination from "./Components/Pagination";
const client = createClient(`${process.env.REACT_APP_PEXEL_API_KEY}`);

function MediaScrapper() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState({
    status: false,
    message: "",
  });
  const [listOfMedia, setListOfMedia] = useState({});
  const [query, setQuery] = useState("people");
  const [mediaType, setMediaType] = useState("photos");
  const [pageNumber, setPageNumber] = useState(1);
  const perPageMedia = mediaType === "photos" ? 20 : 8;

  const paginationData = {
    pageNumber: pageNumber,
    updatePageNumber: (val) => {
      setPageNumber(+val)
    },
    totalPages: listOfMedia.total_results / perPageMedia,
  };

  const updateQuery = (event) => {
    setQuery(event.target.value);
  };

  const handleFetchMedia = async () => {
    setIsLoading(true);

    await client[mediaType]
      .search({
        query,
        per_page: perPageMedia,
        page: pageNumber,
      })
      .then((media) => {
        setListOfMedia(media);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log({ error });
        setIsError({ status: true, message: error.message });
        setIsLoading(false);
      });
  };

  const hanldeKeyDown = (event) => {
    if (event.which === 13 || event.keyCode === 13) {
      handleFetchMedia();
    }
  };

  useEffect(() => {
    handleFetchMedia();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mediaType, pageNumber]);

  return (
    <section className="media-scrapper">
      <div className="container">
        <h1
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Enjoy
          <SelectMediaType
            name="media-type"
            id="media-type"
            values={[
              { title: "Photos", value: "photos" },
              { title: "Videos", value: "videos" },
            ]}
            onChange={(event) => setMediaType(event.target.value)}
          />
          From{" "}
          <a
            href="https://www.pexels.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Pexels.com
          </a>
        </h1>

        <SearchBox
          onChange={updateQuery}
          onKeyDown={hanldeKeyDown}
          onSubmit={handleFetchMedia}
        />

        <div className="media-wrapper">
          {isError.status && <ErrorTemplate message={isError.message} />}
          {/* Pagination */}
          {listOfMedia?.photos?.length > 0 || listOfMedia?.videos?.length > 0 ? (
            <div className="pagination-wrapper">
              <Pagination data={paginationData} pageLimit={5} />
            </div>
          ) : (
            <h1>No Posts to display</h1>
          )}
          {isLoading && <LoadingTemplate />}
          {!isLoading && !isError.status && (
            <MediaWrapper
              listOfMedia={listOfMedia}
            />
          )}
        </div>
      </div>
    </section>
  );
}

export default MediaScrapper;
