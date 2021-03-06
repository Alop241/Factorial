import React from 'react';
import { colors } from "../../styles/theme"

const Trigger = ({ triggerText, buttonRef, showModal }) => {
  return (
    <>
        <button
        className="btn btn-lg btn-danger center modal-button"
        ref={buttonRef}
        onClick={showModal}
        >
        {triggerText}
        </button>
        <style jsx>{`
        button {
        align-items: center;
        background: ${colors.black};
        border-radius: 9999px;
        border: 0;
        color: #fff;
        cursor: pointer;
        display: flex;
        font-size: 16px;
        font-weight: 800;
        padding: 8px 24px;
        transition: opacity 0.3s ease;
        }

        button:hover {
        opacity: 0.7;
        }
    `}</style>
    </>
  );
};
export default Trigger;
