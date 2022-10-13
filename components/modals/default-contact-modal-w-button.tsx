import { NextPage } from "next";

import { Button, Input, Modal, Text, Textarea } from "@nextui-org/react";
import { FaEnvelope, FaUser } from "react-icons/fa";

import styles from "../../styles/components/modals/DefaultContactModalwButton.module.css";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import {
  closeContactModal,
  openContactModal,
} from "../../redux/features/modals/contact-modal-slice";

const DefaultContactModalwButton: NextPage = (props) => {
  const { isOpen } = useSelector((state: RootState) => state.contactModal);
  const dispatch = useDispatch();

  function sendMessage() {
    // TODO: Create a function to send the message to firebase or e-mail
  }
  return (
    <>
      <Button auto shadow onPress={() => dispatch(openContactModal())}>
        Contact
      </Button>
      <Modal
        closeButton
        blur
        aria-labelledby="modal-title"
        open={isOpen}
        onClose={() => dispatch(closeContactModal())}
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
