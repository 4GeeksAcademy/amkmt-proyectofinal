import React, { useEffect,useContext } from 'react';


import { Context } from "../store/appContext";
const ReservasAdmin = () => {
    const { store, actions } = useContext(Context)
    console.log(store.current_user)
  //  console.log(store.current_user.name)
    //console.log(store.current_user.reservas)
    useEffect(() => {
       actions.getAuth()
    }, []);

    return (
        <div>
            <h2>Reservas</h2>
            {/* <div className="list-group">
                    {store.current_user.map((item) => (
                        <label className="list-group-item row" key={item.id} >
                            <div className="row">
                                <div className="col-lg-1">{item.name}</div>
                                <div className="col-lg-5">{item.reservas.cantidad_personas}</div>
                                
                                <button className="col-lg-2 mb-3" type="button" onClick={() => borrarMenu(item.id)}>
                                    <i className="fa-solid fa-trash"></i>
                                </button>
                            </div>
                        </label>
                    ))}
                </div> */}
            
        </div>
    );
};

export default ReservasAdmin;