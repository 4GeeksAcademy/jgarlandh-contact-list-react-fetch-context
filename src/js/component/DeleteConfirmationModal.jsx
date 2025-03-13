import React from "react";

const DeleteConfirmationModal = ({ show, onClose, onConfirm }) => {
    if (!show) return null; // No renderizar si no está visible

    return (
        <div
            className="modal fade show"
            id="deleteConfirmationModal"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="deleteConfirmationModalLabel"
            aria-hidden="true"
            style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="deleteConfirmationModalLabel">
                            ¿Estás seguro?
                        </h5>
                        <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                            onClick={onClose}
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p>¿Quieres eliminar este contacto?</p>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={onClose}
                        >
                            Cancelar
                        </button>
                        <button
                            type="button"
                            className="btn btn-danger"
                            onClick={onConfirm}
                        >
                            Sí, eliminar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmationModal;