import React, { useState } from "react";
import { useSelector } from "react-redux";
import Modal from "react-bootstrap/Modal";
import YouTube from "react-youtube";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

const MovieDetailBanner = () => {
  const { creditCast, creditCrew, genreList, movieCardDetail, videoId } =
    useSelector((state) => state.movieDetail);

  const [smShow, setSmShow] = useState(false);
  const [show, setShow] = useState(false);

  const handleShow = (breakpoint) => {
    setShow(true);
  };

  return (
    <div
      className='banner movieCardDetail-banner'
      style={{
        backgroundImage:
          "url(" +
          `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${movieCardDetail.backdrop_path}` +
          ")",
      }}>
      <div className='movieCardDetail-card-info-container'>
        <div
          className='movieCardDetail-card'
          style={{
            backgroundImage:
              "url(" +
              `https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${movieCardDetail.poster_path}` +
              ")",
          }}></div>
        <div className='movieDetail-info'>
          <h1 className='movieDetail-title'>{movieCardDetail.title}</h1>
          <div>
            <span>Release_Date : {movieCardDetail.release_date} / </span>
            <span>
              {movieCardDetail.genres.map((item, index) => (
                <span key={index}>
                  {genreList.genres.find((list) => list.id === item.id).name} /
                </span>
              ))}
            </span>
            <span> Runtime : {movieCardDetail.runtime} minute</span>
          </div>
          <div className='vote'>
            <span>
              <FontAwesomeIcon icon={faThumbsUp} className="ThumbsUp-icon" />{" "}
              {movieCardDetail.vote_average}
            </span>
          </div>
          <div className='tagline'>{movieCardDetail.tagline}</div>
          <div>
            <h4>Overview</h4>
            <p>{movieCardDetail.overview}</p>
          </div>
          <div>
            Casting : {creditCast[0].name} , {creditCast[1].name} ,{" "}
            {creditCast[2].name}
          </div>
          <div>
            Director : {creditCrew.find((item) => item.job === "Director").name}
          </div>

          <div className='modal-div'>
            <button className='trailer-btn' onClick={() => setShow(true)}>
              <div className='trailer-icon'>
                <FontAwesomeIcon icon={faYoutube} size={"3x"} />
              </div>
              <div className='trailer-text'>Watching Trailer</div>
            </button>

            <Modal
              show={show}
              onHide={() => setShow(false)}>
              <Modal.Header closeButton closeVariant='white'></Modal.Header>
              <Modal.Body>
                <YouTube videoId={videoId.results[0].key} />
              </Modal.Body>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MovieDetailBanner;
