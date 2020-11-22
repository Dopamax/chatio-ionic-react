import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonImg, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import './Home.css';
import { withRouter } from 'react-router-dom';
const UserPage:React.FC= (props:any) => {
    const { name, picture } = props.match.params;

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Chatio</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">User</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard>
          <IonCardHeader>
            <IonImg src={"https://randomuser.me/api/portraits/thumb/"+picture}/>
            <IonCardTitle>{name}</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            Keep close to Nature's heart... and break clear away, once in awhile,
            and climb a mountain or spend a week in the woods. Wash your spirit clean.
      </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default withRouter(UserPage);
