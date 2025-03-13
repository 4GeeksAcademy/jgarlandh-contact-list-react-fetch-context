import React, { useState, useEffect } from "react";

const EditContactModal = ({ show, onClose, onSave, contact, isNew }) => {
    // Estado para los campos del formulario
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    // Reiniciar el formulario cuando el modal se abra en modo "creación"
    useEffect(() => {
        if (show && isNew) {
            setName("");
            setAddress("");
            setPhone("");
            setEmail("");
        } else if (show && !isNew) {
            // Si es modo "edición", llenar el formulario con los datos del contacto
            setName(contact.name);
            setAddress(contact.address);
            setPhone(contact.phone);
            setEmail(contact.email);
        }
    }, [show, isNew, contact]); // Dependencias: show, isNew y contact

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedContact = { ...contact, name, address, phone, email }; // Incluye el ID del contacto si existe
        onSave(updatedContact); // Envía los datos del contacto actualizado o nuevo
    };

    if (!show) return null; // No renderizar si no está visible

    return (
        <>
        <div
            className="modal fade show"
            id="editContactModal"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="editContactModalLabel"
            aria-hidden="true"
            style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
            <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="editContactModalLabel">
                            {isNew ? "Crear Contacto" : "Editar Contacto"}
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
                        <div className="container-fluid">
                            <div className="row gutters">
                                <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                                    <div className="card h-100">
                                        <div className="card-body">
                                            <div className="account-settings">
                                                <div className="user-profile">
                                                    <div className="user-avatar">
                                                        <img
                                                            src="https://bootdey.com/img/Content/avatar/avatar7.png"
                                                            alt="Maxwell Admin"
                                                        />
                                                    </div>
                                                    <h5 className="user-name">{name || "Nuevo Contacto"}</h5>
                                                    <h6 className="user-email">{email || "correo@ejemplo.com"}</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                                    <div className="card h-100">
                                        <div className="card-body">
                                            <div className="row gutters">
                                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                    <h6 className="mb-2 text-primary">Detalles Personales</h6>
                                                </div>
                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                    <div className="form-group">
                                                        <label htmlFor="fullName">Nombre</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="fullName"
                                                            value={name}
                                                            onChange={(e) => setName(e.target.value)}
                                                            placeholder="Ingrese el nombre"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                    <div className="form-group">
                                                        <label htmlFor="eMail">Correo</label>
                                                        <input
                                                            type="email"
                                                            className="form-control"
                                                            id="eMail"
                                                            value={email}
                                                            onChange={(e) => setEmail(e.target.value)}
                                                            placeholder="Ingrese el correo"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                    <div className="form-group">
                                                        <label htmlFor="phone">Teléfono</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="phone"
                                                            value={phone}
                                                            onChange={(e) => setPhone(e.target.value)}
                                                            placeholder="Ingrese el teléfono"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                    <div className="form-group">
                                                        <label htmlFor="address">Dirección</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="address"
                                                            value={address}
                                                            onChange={(e) => setAddress(e.target.value)}
                                                            placeholder="Ingrese la dirección"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                            className="btn btn-primary"
                            onClick={handleSubmit}
                        >
                            {isNew ? "Crear" : "Guardar"}
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <style>
                {`
                }
.account-settings .user-profile {
    margin: 0 0 1rem 0;
    padding-bottom: 1rem;
    text-align: center;
}
.account-settings .user-profile .user-avatar {
    margin: 0 0 1rem 0;
}
.account-settings .user-profile .user-avatar img {
    width: 90px;
    height: 90px;
    -webkit-border-radius: 100px;
    -moz-border-radius: 100px;
    border-radius: 100px;
}
.account-settings .user-profile h5.user-name {
    margin: 0 0 0.5rem 0;
}
.account-settings .user-profile h6.user-email {
    margin: 0;
    font-size: 0.8rem;
    font-weight: 400;
    color: #9fa8b9;
}
.account-settings .about {
    margin: 2rem 0 0 0;
    text-align: center;
}
.account-settings .about h5 {
    margin: 0 0 15px 0;
    color: #007ae1;
}
.account-settings .about p {
    font-size: 0.825rem;
}
.form-control {
    border: 1px solid #cfd1d8;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    border-radius: 2px;
    font-size: .825rem;
    background: #ffffff;
    color: #2e323c;
}

.card {
    background: #ffffff;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    border: 0;
    margin-bottom: 1rem;
}
                `}
            </style>

        </>
    );
};

export default EditContactModal;