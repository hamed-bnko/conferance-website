import React, { Fragment, useState } from "react";
import { Modal, Container } from "react-bootstrap";
import { OtherComitte } from "../sections";
import "./video.scss";

const CommittesMembers = ({ lang, type, committe }) => {
  const [addModals, setShow] = useState(false);
  // eslint-disable-next-line
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <Fragment>
      <a onClick={handleShow} className="center-align">
        {lang === "ar"
          ? `اعضاء اللجنة ${committe}`
          : "Members of the Committee "}{" "}
      </a>

      <Modal show={addModals} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title> اعضاء اللجنة </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <ul style={{ fontSize: "1.4rem", textAlign: "right" }}>
              {OtherComitte &&
                OtherComitte.map((committe) => (
                  <>
                    {committe.type === type && (
                      <li>
                        {committe.name} - {committe.capacity}
                      </li>
                    )}
                  </>
                ))}
            </ul>
          </Container>

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

export default CommittesMembers;
