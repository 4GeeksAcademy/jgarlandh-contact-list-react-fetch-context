import React, { useState } from "react";

const EditContactModal = ({ show, onClose, onSave, contact }) => {
    const [name, setName] = useState(contact.name);
    const [address, setAddress] = useState(contact.address);
    const [phone, setPhone] = useState(contact.phone);
    const [email, setEmail] = useState(contact.email);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({ ...contact, name, address, phone, email }); // Envía los datos actualizados
    };

    if (!show) return null; // No renderizar si no está visible

    return (
        <div className="modal-overlay">
            <div className="container">
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
                                        <h5 className="user-name">{name}</h5>
                                        <h6 className="user-email">{email}</h6>
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
                                        <h6 className="mb-2 text-primary">Personal Details</h6>
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
                                <div className="row gutters">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="text-right">
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
                                                Guardar
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditContactModal;