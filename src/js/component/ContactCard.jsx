import React, { useState } from "react";
import EditContactModal from "./EditContactModal";
import DeleteConfirmationModal from "./DeleteConfirmationModal";

const ContactCard = ({ contact, onUpdate, onDelete }) => {
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const handleEdit = () => {
        setShowEditModal(true); // Abre el modal de editar
    };

    const handleDelete = () => {
        setShowDeleteModal(true); // Abre el modal de confirmación
    };

    const handleSave = (updatedContact) => {
        onUpdate(updatedContact); // Llama a la función de actualización (desde flux.js)
        setShowEditModal(false); // Cierra el modal
    };

    const handleConfirmDelete = () => {
        onDelete(contact.id); // Llama a la función de eliminación (desde flux.js)
        setShowDeleteModal(false); // Cierra el modal
    };

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="people-nearby">
                            <div className="nearby-user">
                                <div className="row d-flex align-items-center">
                                    <div className="col-md-3 col-sm-2">
                                        <img
                                            src={contact.avatar || "https://bootdey.com/img/Content/avatar/avatar7.png"}
                                            alt="user"
                                            className="profile-photo-lg"
                                        />
                                    </div>
                                    <div className="col-md-6 col-sm-7">
                                        <h5>{contact.name}</h5>
                                        <p className="text-muted m-1">
                                            <i className="fa-solid fa-location-dot m-1"></i>
                                            {contact.address}
                                        </p>
                                        <p className="text-muted m-1">
                                            <i className="fa-solid fa-phone m-1"></i>
                                            {contact.phone}
                                        </p>
                                        <p className="text-muted m-1">
                                            <i className="fa-solid fa-envelope m-1"></i>
                                            {contact.email}
                                        </p>
                                    </div>
                                    <div className="col-md-3 col-sm-3">
                                        <button className="btn btn-light pull-right m-1" onClick={handleEdit}>
                                            <i className="fa-solid fa-user-pen"></i>
                                        </button>
                                        <button className="btn btn-light pull-right m-1" onClick={handleDelete}>
                                            <i className="fa-solid fa-user-xmark"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modales */}
            <EditContactModal
                show={showEditModal}
                onClose={() => setShowEditModal(false)}
                onSave={handleSave}
                contact={contact}
            />

            <DeleteConfirmationModal
                show={showDeleteModal}
                onClose={() => setShowDeleteModal(false)}
                onConfirm={handleConfirmDelete}
            />

            <style>
                {`
                    .people-nearby .google-maps {
                        background: #f8f8f8;
                        border-radius: 4px;
                        border: 1px solid #f1f2f2;
                        padding: 20px;
                        margin-bottom: 20px;
                    }

                    .people-nearby .google-maps .map {
                        height: 300px;
                        width: 100%;
                        border: none;
                    }

                    .people-nearby .nearby-user {
                        padding: 20px 0;
                        border-top: 1px solid #f1f2f2;
                        border-bottom: 1px solid #f1f2f2;
                        margin-bottom: 20px;
                    }

                    img.profile-photo-lg {
                        height: 180px;
                        width: 180px;
                        border-radius: 50%;
                    }
                `}
            </style>
        </>
    );
};

export default ContactCard;