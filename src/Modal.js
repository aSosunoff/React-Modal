import React, { useCallback, useMemo } from "react";
import { v4 } from "uuid";
import cn from "classnames";
import styles from "./Modal.module.scss";
import Backdrop from "./components/backdrop";

const getSlot = (type) => ({ child, children }) => {
  const slot = React.Children.toArray(child).find(
    (child) => React.isValidElement(child) && child.type === type
  );

  if (!slot) {
    return null;
  }

  return React.cloneElement(children(slot.props));
};

Modal.Title = () => null;
Modal.Body = () => null;
Modal.Footer = () => null;

const Title = getSlot(Modal.Title);
const Body = getSlot(Modal.Body);
const Footer = getSlot(Modal.Footer);

function Modal({ isShow, onHideModal, children, style }) {
  const uniqID = useMemo(() => `s_${v4().replaceAll("-", "_")}`, []);

  const onClick = useCallback(
    ({ target }) =>
      document.contains(target) &&
      !target.closest(`.${styles["modal-back__item"]}.${uniqID}`) &&
      onHideModal(),
    [onHideModal, uniqID]
  );

  return (
    <Backdrop
      className={styles["modal-back"]}
      isShow={isShow}
      clickHandler={onClick}
    >
      <div className={cn(styles["modal-back__item"], uniqID)} style={style}>
        <Title child={children}>
          {({ style, className, children }) => (
            <div
              className={cn(styles["modal-back__title"], className)}
              style={style}
            >
              {children}
            </div>
          )}
        </Title>

        <Body child={children}>
          {({ style, className, children }) => (
            <div
              className={cn(styles["modal-back__body"], className)}
              style={style}
            >
              {children}
            </div>
          )}
        </Body>

        <Footer child={children}>
          {({ style, className, children }) => (
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
