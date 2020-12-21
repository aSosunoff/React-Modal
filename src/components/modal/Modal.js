import React, { useCallback, useMemo } from "react";
import { v4 } from "uuid";
import cn from "classnames";
import styles from "./Modal.module.scss";
import Backdrop from "../backdrop";

Modal.Title = () => null;
Modal.Body = () => null;
Modal.Footer = () => null;

const getSlot = (children, type) => {
	const slot = React.Children.toArray(children).find(
		(child) => React.isValidElement(child) && child.type === type
	);

	if (!slot) {
		return () => null;
	}

	return ({ children }) => React.cloneElement(children(slot.props));
};

function Modal({ isShow, onHideModal, children, style }) {
	const uniqID = useMemo(() => `s_${v4().replaceAll("-", "_")}`, []);

	const onClick = useCallback(
		({ target }) =>
			document.contains(target) &&
			!target.closest(`.${styles["modal-back__item"]}.${uniqID}`) &&
			onHideModal(),
		[onHideModal, uniqID]
	);

	const Title = getSlot(children, Modal.Title);

	const Body = getSlot(children, Modal.Body);

	const Footer = getSlot(children, Modal.Footer);

	return (
		<Backdrop
			className={styles["modal-back"]}
			isShow={isShow}
			clickHandler={onClick}
		>
			<div className={cn(styles["modal-back__item"], uniqID)} style={style}>
				<Title>
					{({ className, style, children }) => (
						<div
							className={cn(styles["modal-back__title"], className)}
							style={style}
						>
							{children}
						</div>
					)}
				</Title>

				<Body>
					{({ className, style, children }) => (
						<div
							className={cn(styles["modal-back__body"], className)}
							style={style}
						>
							{children}
						</div>
					)}
				</Body>

				<Footer>
					{({ className, style, children }) => (
						<div
							className={cn(styles["modal-back__footer"], className)}
							style={style}
						>
							{children}
						</div>
					)}
				</Footer>
			</div>
		</Backdrop>
	);
}

export default Modal;
