import React from "react";
import Modal from "../modal";
import BaseButton from "../UI/button/baseButton";
import useShow from "../../hooks/useShow";

const App = () => {
	const { isShow, show, hide } = useShow(false);

	return (
		<>
			<Modal isShow={isShow} onHideModal={hide}>
				<Modal.Title>Title</Modal.Title>

				{/* <Modal.Body>Body</Modal.Body>

				<Modal.Footer>Footer</Modal.Footer> */}
			</Modal>

			<BaseButton onClick={isShow ? hide : show}>Показать</BaseButton>
		</>
	);
};

export default App;
