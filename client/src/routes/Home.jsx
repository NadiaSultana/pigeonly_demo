//The homepage structure


import React from 'react';
import Header from '../components/Header';
import SecretList from "../components/SecretPage";

const Home = () =>{
    return(
        <div>
            <Header/>
            <SecretList/>
        </div>

    )

}

export default Home;