import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import ReactDom from "react-dom"
import "./index"


export const Modal = ({ showModal, setShowModal,gif }) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`
  });

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );

  return ReactDom.createPortal(
    <>
      {showModal ? (
        <div className="gifModal" onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
              <img className="modalImg" src={gif} alt='camera' />
          </animated.div>
        </div>
      ) : null}
    </>, document.getElementById("modal")
    
  );
};