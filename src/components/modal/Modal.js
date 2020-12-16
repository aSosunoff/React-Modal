import React, { useCallback, useMemo } from "react";
import { v4 } from "uuid";
import cn from "classnames";
import styles from "./Modal.module.scss";
import Backdrop from "../backdrop";

Modal.Title = () => null;
Modal.Body = () => null;
Modal.Footer = () => null;

const getSlot = (children, type) =>
	React.Children.toArray(children).find(
		(child) => React.isValidElement(child) && child.type === type
	);

function Modal({ isShow, onHideModal, children, style }) {
	const uniqID = useMemo(() => `s_${v4().replaceAll("-", "_")}`, []);

	const onClick = useCallback(
		({ target }) =>
			document.contains(target) &&
			!target.closest(`.${styles["modal-back__item"]}.${uniqID}`) &&
			onHideModal(),
		[onHideModal, uniqID]
	);

	const title = getSlot(children, Modal.Title);

	const body = getSlot(children, Modal.Body);

	const footer = getSlot(children, Modal.Footer);

	return (
		<Backdrop
			className={styles["modal-back"]}
			isShow={isShow}
			clickHandler={onClick}
		>
			<div className={cn(styles["modal-back__item"], uniqID)} style={style}>
				{title && (
					<div
						className={cn(styles["modal-back__title"], title.props.className)}
						style={title.props.style}
					>
						{title.props.children}
					</div>
				)}

				{body && (
					<div
						className={cn(styles["modal-back__body"], body.props.className)}
						style={body.props.style}
					>
						{body.props.children}
					</div>
				)}

				{footer && (
					<div
						className={cn(styles["modal-back__footer"], footer.props.className)}
						style={footer.props.style}
					>
						{footer.props.children}
					</div>
				)}
			</div>
		</Backdrop>
	);
}

export default Modal;
