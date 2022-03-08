import ReactDOM from 'react-dom';
import { Form } from '../Form';
import FocusTrap from 'focus-trap-react';
export const Modal = ({
  onClickOutside,
  onKeyDown,
  modalRef,
  buttonRef,
  closeModal,
  onSubmit
}) => {
  return ReactDOM.createPortal(
    <>
    <FocusTrap>
      <aside
        tag="aside"
        role="dialog"
        tabIndex="-1"
        aria-modal="true"
        className="modal-cover"
        onClick={onClickOutside}
        onKeyDown={onKeyDown}
      >
        <div className="modal-area" ref={modalRef}>
          <button
            ref={buttonRef}
            aria-label="Close Modal"
            aria-labelledby="close-modal"
            className="_modal-close"
            onClick={closeModal}
          >
            <span id="close-modal" className="_hide-visual">
              Close
            </span>
            <svg className="_modal-close-icon" viewBox="0 0 40 40">
              <path d="M 10,10 L 30,30 M 30,10 L 10,30" />
            </svg>
          </button>
          <div className="modal-body">
            <Form onSubmit={onSubmit} />
          </div>
        </div>
      </aside>
    </FocusTrap>
    <style jsx>{`
        aside.modal-cover {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 10;
          transform: translateZ(0);
          background-color: rgba(0, 0, 0, 0.8);
        }

        div.modal-area {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          padding: 2.5em 1.5em 1.5em 1.5em;
          background-color: #ffffff;
          box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.1);
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }

        @media screen and (min-width: 500px) {
            /* Center the Modal! */
            div.modal-area {
                left: 50%;
                top: 50%;
                height: auto;
                transform: translate(-50%, -50%);
                max-width: 30em;
                max-height: calc(100% - 1em);
            }
        }

        button._modal-close {
        position: absolute;
        top: 0;
        right: 0;
        padding: 0.5em;
        line-height: 1;
        background: #f6f6f7;
        border: 0;
        box-shadow: 0;
        cursor: pointer;
        }

        svg._modal-close-icon {
        width: 25px;
        height: 25px;
        fill: transparent;
        stroke: black;
        stroke-linecap: round;
        stroke-width: 2;
        }

        div.modal-body {
        padding-top: 0.25em;
        }
        span._hide-visual {
        border: 0 !important;
        clip: rect(0 0 0 0) !important;
        height: 1px !important;
        margin: -1px !important;
        overflow: hidden !important;
        padding: 0 !important;
        position: absolute !important;
        width: 1px !important;
        white-space: nowrap !important;
        }

        .scroll-lock {
        overflow: hidden;
        margin-right: 17px;
        }

      `}</style>
    </>
    ,
    document.body
  );
};

export default Modal;