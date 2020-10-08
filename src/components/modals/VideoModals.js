import React, { Fragment, useState } from "react";
import { Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import ReactPlayer from "react-player";
import "./video.scss";

const VideoModals = ({ lang }) => {
  const [addModals, setShow] = useState(false);
  // eslint-disable-next-line
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const [videourl, setvideo] = useState({
    uri: "https://youtu.be/q43LGZAP3II",
    videoname: "كيفية التسجيل",
  });

  return (
    <Fragment>
      <a onClick={handleShow} className="btn btn-our mx-2 ">
        <i class="material-icons left">play_circle_filled</i>
        {lang === "ar" ? "كيفية التسجيل" : "How to Register"}
        <span className="bg"></span>
      </a>

      <Modal show={addModals} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title> {videourl.videoname} </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="video-content">
            <ReactPlayer url={videourl.uri} controls={true} />
          </div>
          <Modal.Footer>
            <button
              className="btn-custom btn-dark center"
              onClick={handleClose}
            >
              إغلاق
            </button>
          </Modal.Footer>
        </Modal.Body>
      </Modal>
    </Fragment>
  );
};

export default VideoModals;
