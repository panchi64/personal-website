import { NextPage } from "next";

import { Button, Input, Modal, Text, Textarea } from "@nextui-org/react";
import { FaEnvelope, FaUser } from "react-icons/fa";

import styles from "../../../styles/components/default-contact-modal-w-button.module.css";

const DefaultContactModalwButton: NextPage = (props) => {
  function showContactModal() {
    // TODO: Create a component to show as a modal when the button is pressed
    console.log("Contact Modal hass been pressed!");
  }

  function sendMessage() {
    // TODO: Create a function to send the message to firebase or e-mail
  }
  return (
    <>
      <Button auto shadow onPress={showContactModal}>
        Contact
      </Button>
      <Modal
        closeButton
        blur
        aria-labelledby="modal-title"
        open={true}
        onClose={showContactModal}
      >
        <Modal.Header>
          <Text id="modal-title" b size={18}>
            Contact Info
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="md"
            placeholder="Your Name"
            contentLeft={<FaUser />}
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="md"
            placeholder="Your E-mail"
            contentLeft={<FaEnvelope />}
          />
          <Textarea
            bordered
            label="Message"
            placeholder="Let me know what you would like to talk to me about here!"
            rows={5}
          />
        </Modal.Body>
        <Modal.Footer>
          <div className={styles["send-button"]}>
            <Button onPress={sendMessage}>Send</Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DefaultContactModalwButton;
