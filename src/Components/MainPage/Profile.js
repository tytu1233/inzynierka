import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom';
import UsersService from '../../Services/UsersService';
import AuthenticationService from '../../Services/AuthenticationService';
import { UserContext } from '../../other/UserContext';
import { useNavigate } from "react-router-dom";


const Profile = () => {

    const navigate = useNavigate();
    const {id} = useParams();
    const [usera, setUsera] = useState([])
    const loadUser = async () => {
        const res = await UsersService.getUserById(id);
        setUsera(res.data);
        //console.log(res.data)
    }

    const checkAuthorization = async () => {
        const res = await AuthenticationService.checkAuthenticationUser(JSON.parse(localStorage.getItem('token')));
        if(!(res.data.status === "pass")) {
            navigate("/");
            console.log("asd")
            return;
        }        
        loadUser()
    }


    useEffect(() => {
        checkAuthorization()
    }, [])
return (
    <div className="container mb-3">
        <div className="row">
                <div className="col-12">
                    
                    <div className="my-5">
                        <h3>Mój Profil</h3>
                        <hr/>
                    </div>
                    
                    <form className="file-upload">
                        <div className="row mb-5 gx-5">
                                        <div className="gap-3 d-md-flex justify-content-md-end text-center">
                                            <button type="button" className="btn btn-danger">Usuń konto</button>
                                        </div>
                            <div className="col-xxl-8 mb-5 mb-xxl-0">
                                <div className="bg-secondary-soft px-4 py-5 rounded">
                                    <div className="row g-3">
                                        <h4 className="mb-4 mt-0">Dane kontaktowe</h4>
                                        
                                        <div className="col-md-6">
                                            <label className="form-label">Imię *</label>
                                            <input type="text" className="form-control" placeholder="" aria-label="First name" defaultValue={usera.name}/>
                                        </div>
                                        
                                        <div className="col-md-6">
                                            <label className="form-label">Nazwisko *</label>
                                            <input type="text" className="form-control" placeholder="" aria-label="Last name" defaultValue={usera.surname}/>
                                        </div>
                                        
                                        <div className="col-md-6">
                                            <label className="form-label">Miasto *</label>
                                            <input type="text" className="form-control" placeholder="" aria-label="Phone number" defaultValue={usera.address}/>
                                        </div>
                                        
                                        <div className="col-md-6">
                                            <label className="form-label">Ulica</label>
                                            <input type="text" className="form-control" placeholder="" aria-label="Phone number" defaultValue={usera.address}/>
                                        </div>
                                       
                                        <div className="col-md-6">
                                            <label htmlFor="inputEmail4" className="form-label">Kod pocztowy *</label>
                                            <input type="text" className="form-control" id="inputEmail4" defaultValue={usera.address}/>
                                        </div>
                                        <div className="gap-3 d-md-flex justify-content-md-start text-center">
                                            <button type="button" className="btn btn-dark">Zaktualizuj dane</button>
                                        </div>
                                    </div> 
                                </div>
                            </div>
                        </div>

                        <div className="row mb-5 gx-5">
                            <div className="col-xxl-6 mb-5 mb-xxl-0">
                                <div className="bg-secondary-soft px-4 py-5 rounded">
                                    <div className="row g-3">
                                        <h4 className="my-4">Zmień hasło</h4>
                                        
                                        <div className="col-md-6">
                                            <label htmlFor="exampleInputPassword1" className="form-label">Stare hasło *</label>
                                            <input type="password" className="form-control" id="exampleInputPassword1"/>
                                        </div>
                                        
                                        <div className="col-md-6">
                                            <label htmlFor="exampleInputPassword2" className="form-label">Nowe hasło *</label>
                                            <input type="password" className="form-control" id="exampleInputPassword2"/>
                                        </div>
                                        
                                        <div className="col-md-12">
                                            <label htmlFor="exampleInputPassword3" className="form-label">Potwierdź hasło *</label>
                                            <input type="password" className="form-control" id="exampleInputPassword3"/>
                                        </div>
                                        <div className="gap-3 d-md-flex justify-content-md-start text-center">
                                            <button type="button" className="btn btn-dark">Ustaw nowe hasło</button>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                
                        </div>
                    </form> 
                </div>
            </div>
    </div>
        )
}

export default Profile;