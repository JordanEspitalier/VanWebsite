import { useState } from "react";
import Caroussel from "../../components/caroussel/Caroussel";


function Admin() {

    let [addReal, setAddReal] = useState(false);
    let [removeReal, setRemoveReal] = useState(false);
    let [updateReal, setUpdateReal] = useState(false);

    const showAddReal = () => {
        setRemoveReal(false);
        setUpdateReal(false);
        setAddReal(true);
    };

    const showRemoveReal = () => {
        setAddReal(false);
        setUpdateReal(false);
        setRemoveReal(true);
    };

    const showUpdateReal = () => {
        setAddReal(false);
        setRemoveReal(false);
        setUpdateReal(true);
    };

  return (
    <div className="admin">
        <div className="admin-nav">
            <div onClick={showAddReal}>AJOUTER UNE REALISATION</div>
            <div onClick={showRemoveReal}>SUPRIMER UNE REALISATION</div>
            <div onClick={showUpdateReal}>MODIFIER UNE REALISATION</div>
        </div>
        {addReal ? <div>ADD REAL</div> : null}
        {removeReal ? <div>REMOVE REAL</div> : null}
        {updateReal ? <div>UPDATE REAL</div> : null}
    </div>
  )
}

export default Admin;
