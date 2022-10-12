import {
  Button,
  Input,
  Modal,
  Spacer,
  Text,
  Textarea,
} from "@nextui-org/react";
import { NextPage } from "next";

const DefaultContactModalwButton: NextPage = (props) => {
  function showContactModal() {
    // TODO: Create a component to show as a modal when the button is pressed
    console.log("Contact Modal hass been pressed!");
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
            Contact
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Spacer y={0} />
          <Input
            clearable
            underlined
            fullWidth
            color="primary"
            size="md"
            labelPlaceholder="Name"
          />
          <Spacer y={0} />
          <Input
            clearable
            underlined
            fullWidth
            color="primary"
            size="md"
            labelPlaceholder="E-mail"
          />
          <Textarea
            bordered
            label="Message"
            placeholder="Write your thoughts"
            rows={5}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button auto>Send</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DefaultContactModalwButton;
