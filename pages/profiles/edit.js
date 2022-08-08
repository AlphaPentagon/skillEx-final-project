// pages/profile.js
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { useUser } from "@auth0/nextjs-auth0";
import Head from 'next/head'
import EditProfile from '../../src/components/EditProfile';
import styles from '../../src/components/EditProfile/EditProfile.module.css';
import { useState } from "react";


export default withPageAuthRequired(function Edit({ user }) {
	
    return (
    <div className={styles.signUpContainer}>
        
        
        <Head>
            
        <title>Edit Profile </title>
            
        </Head>
        
        <h1>Edit Profile</h1>
        <div>Hello  {user.name} </div>
        <br></br>
        <EditProfile />
    </div>);
});
