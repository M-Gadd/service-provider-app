import React, { useState } from "react";
import { Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

export interface ClientResponseProps {
  request: any;
  handleChoice: any;
}

const ClientResponse: React.SFC<ClientResponseProps> = ({ request, handleChoice }) => {
  const [accepted, setAccepted] = useState(false);
  const [rejected, setRejected] = useState(false);

  const handleAccept = async () => {
    const response = await handleChoice(request, "accepted");
    if (response) {
      setRejected(false);
      setAccepted(true);
    }
  };
  const handleReject = () => {
    setAccepted(false);
    setRejected(true);
    handleChoice(request, "rejected");
  };
  return (
    <Row>
      <Col className="text-right" xs={6}>
        <span
          className="highlightOnHover"
          style={{ color: `${accepted ? "green" : ""}` }}
        >
          <FontAwesomeIcon size="2x" onClick={handleAccept} icon={faCheck} />
        </span>
      </Col>
      <Col className="text-left" xs={6}>
        <span className="highlightOnHover" style={{ color: `${rejected ? "red" : ""}` }}>
          <FontAwesomeIcon size="2x" onClick={handleReject} icon={faTimes} />
        </span>
      </Col>
      <style>{`
        .highlightOnHover:hover,
        .highlightOnHover:focus {
          cursor: pointer;
        }
      `}</style>
    </Row>
  );
};

export default ClientResponse;
