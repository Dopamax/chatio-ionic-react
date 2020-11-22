import React, { Component } from 'react';
import { IonSegment, IonSegmentButton, IonLabel, IonIcon } from '@ionic/react';
import { heart, happy,searchOutline} from 'ionicons/icons';
import { Link } from 'react-router-dom';
class MySegment extends Component {

  
    render(){

  
  return (
 
        <IonSegment onIonChange={e => console.log('Segment selected', e.detail.value)}>
          <Link to="/NowPage">
           <IonSegmentButton value="Now">
            <IonLabel>Now</IonLabel>
            <IonIcon icon={searchOutline} />
          </IonSegmentButton>
          </Link>
          <Link to="/NowPage">
          <IonSegmentButton value="friends">
            <IonLabel>Friends</IonLabel>
            <IonIcon icon={heart} />
          </IonSegmentButton>
          </Link>
          <Link to="/NowPage">
          <IonSegmentButton value="Like me">
            <IonLabel>Liked me</IonLabel>
            <IonIcon icon={happy} />
          </IonSegmentButton>
          </Link>
        </IonSegment>

  )
}

        
};
export default MySegment;