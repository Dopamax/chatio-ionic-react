import React, { useState, useEffect} from 'react';
import { IonGrid, IonRow, IonCol, IonContent, IonImg, IonThumbnail } from '@ionic/react';
import { IonCard, IonCardHeader, IonCardTitle} from '@ionic/react';
import './GrilleComponent.css';
import Axios from 'axios';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
const UserElement=(props:any) => {

     const ToUserPage=(user:any)=>{
        return (
            <Redirect
            to={{
            pathname: "/UserPage/"+user.name.last+"/"+user.picture.thumbnail,
          }}
        />
            );
    } 
    const listItems = props.users.map((user:any) =>
            <IonCol key={user.email} size="4">
                <Link to={"/UserPage/"+user.name.last+"/"+user.picture.thumbnail.toString().substring(44)}>
                <IonCard className="mon-card">
            <IonCardHeader>
            <IonThumbnail>
            <IonImg className="mon-avatar" src={user.picture.thumbnail} alt="profil"/>
            </IonThumbnail>
            </IonCardHeader>
            <IonCardTitle className="c-name">{user.name.last}</IonCardTitle>
            </IonCard>
                </Link>
            
        </IonCol>
        
    );
    return (
        <IonRow>{listItems}</IonRow>
    );
  }
export const GrilleComponent: React.FC = () => {
    const [users,setUsers]=useState([]);
   
    useEffect(() => {
        //setUsers(()=>getUsers());
        Axios.get('https://randomuser.me/api/?results=80')
        .then(res=>{
            console.log(res.data);
            setUsers(res.data.results);
        })
      },[]);
return (
  <IonContent>
    <IonGrid className="c-layout">
        <UserElement users={users} />
    </IonGrid>
    </IonContent>
    );
};
