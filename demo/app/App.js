import React, { useState } from "react";
import Modal from "../../src";
/* import Modal from "../../dist"; */
import BaseButton from "../UI/button/baseButton";
import useShow from "../hooks/useShow";
import Input from "../UI/input";

const App = () => {
  const { isShow, show, hide } = useShow(false);
  const { isShow: isShow_2, show: show_2, hide: hide_2 } = useShow(false);

  const [value, setValueHandler] = useState("");

  return (
    <>
      <Modal isShow={isShow} onHideModal={hide}>
        <Modal.Title>Title</Modal.Title>
        <Modal.Body>
          <Input label="Имя" value={value} onChange={setValueHandler} />
        </Modal.Body>
        <Modal.Footer>Footer</Modal.Footer>
      </Modal>

      <Modal isShow={isShow_2} onHideModal={hide_2}>
        <Modal.Title>Title 2</Modal.Title>
        <Modal.Body>Body 2</Modal.Body>
        <Modal.Footer>Footer 2</Modal.Footer>
      </Modal>

      <BaseButton onClick={isShow ? hide : show}>Показать 1</BaseButton>
      <BaseButton onClick={isShow_2 ? hide_2 : show_2}>Показать 2</BaseButton>
    </>
  );
};

export default App;
