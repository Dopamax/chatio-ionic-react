import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import './Home.css';
//import MySegment from '../components/MySegment';
import { GrilleComponent } from '../components/GrilleComponent';
import MySegment from '../components/MySegment';

const NowPage: React.FC = () => {
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
            <IonTitle size="large">Now</IonTitle>
          </IonToolbar>
        </IonHeader>
        <MySegment />
          <GrilleComponent />
      </IonContent>
    </IonPage>
  );
};

export default NowPage;
