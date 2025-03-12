import React from "react";

const DeleteConfirmationModal = ({ show, onClose, onConfirm }) => {
    if (!show) return null; // No renderizar si no está visible

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>¿Estás seguro?</h2>
                <p>¿Quieres eliminar este contacto?</p>
                <button onClick={onConfirm}>Sí, eliminar</button>
                <button onClick={onClose}>Cancelar</button>
            </div>
        </div>
    );
};

export default DeleteConfirmationModal;