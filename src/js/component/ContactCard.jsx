import React from 'react'

const ContactCard = () => {
  return (

    <>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="people-nearby">

              <div className="nearby-user">
                <div className="row d-flex align-items-center">
                  <div className="col-md-3 col-sm-2">
                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="user" className="profile-photo-lg"></img>
                  </div>
                  <div className="col-md-6 col-sm-7">
                    <h5>Sophia Page</h5>
                    <p className="text-muted m-1"><i class="fa-solid fa-location-dot m-1"></i>Direccion</p>
                    <p className="text-muted m-1"><i class="fa-solid fa-phone m-1"></i>Numero de Telefono</p>
                    <p className="text-muted m-1"><i class="fa-solid fa-envelope m-1"></i>Correo</p>
                  </div>
                  <div className="col-md-3 col-sm-3">
                    <button className="btn btn-light pull-right m-1"><i class="fa-solid fa-user-pen"></i></button>
                    <button className="btn btn-light pull-right m-1"><i class="fa-solid fa-user-xmark"></i></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          .people-nearby .google-maps{
  background: #f8f8f8;
  border-radius: 4px;
  border: 1px solid #f1f2f2;
  padding: 20px;
  margin-bottom: 20px;
}

.people-nearby .google-maps .map{
  height: 300px;
  width: 100%;
  border: none;
}

.people-nearby .nearby-user{
  padding: 20px 0;
  border-top: 1px solid #f1f2f2;
  border-bottom: 1px solid #f1f2f2;
  margin-bottom: 20px;
}

img.profile-photo-lg{
  height: 180px;
  width: 180px;
  border-radius: 50%;
}
        `}
      </style>
    </>

  )
}

export default ContactCard