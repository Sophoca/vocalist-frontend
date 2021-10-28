import React, { useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import classnames from 'classnames';
import './Modal.css';

const Modal = ({ onClickClose, className, children, isLayoutScrollEnabled }) => {
    const handleClickContainer = useCallback(e => {
        e.stopPropagation();
    }, []);

    const handleKeyPress = useCallback(
        e => {
            const { key } = e;

            if (key === 'Escape') {
                e.preventDefault();
                onClickClose();
            }
        },
        [onClickClose]
    );

    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress, true);

        return () => {
            document.removeEventListener('keydown', handleKeyPress, true);
        };
    }, [handleKeyPress]);

    useEffect(() => {
        if (!isLayoutScrollEnabled) {
            document.body.classList.add('modal-layout-scroll');
        }

        return () => {
            if (!isLayoutScrollEnabled) {
                document.body.classList.remove('modal-layout-scroll');
            }
        };
    }, [isLayoutScrollEnabled]);

    return createPortal(
        <div className="modal md" role="presentation" onClick={onClickClose}>
            <div
                className={classnames(className, 'modal-container v-top slideInDown')}
                data-cy="modal-container"
                role="presentation"
                onClick={handleClickContainer}
            >
                <div className="card">
                    <div className="overflow-auto">{children}</div>
                </div>

                <button className="modal-close-btn" type="button" onClick={onClickClose}>
                    <i className="material-icons">X</i>
                </button>
            </div>
        </div>,
        document.body
    );
};

export default Modal;
