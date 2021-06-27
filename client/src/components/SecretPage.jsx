import React, {useEffect, useContext} from 'react';
import SecretFinder from "../apis/SecretFinder";
import {ClientContext} from "../context/ClientContext";


const ClientSecret =(props) =>{
    const {secrets: secrets, setSecrets: setSecrets}= useContext(ClientContext);

    useEffect(() =>{
        const fetchData = async () =>{
            try{
                const response = await SecretFinder.get("")
                console.log("latest response", response.data)
                setSecrets(response.data.text)
            }
            catch (e) {
                console.error(e.message);
            }
        };
        fetchData();
    }, [])

    return(
        <div className = "my-5">
        <div className= "list-group">
            <table className ="table table-hover table-dark " >
                <thead>
                <tr className="bg-primary">
                    <th scope="col">{secrets}</th>
                </tr>
                </thead>
                <tbody >
                </tbody>
            </table>
        </div>
        </div>
    )
}
export default ClientSecret;