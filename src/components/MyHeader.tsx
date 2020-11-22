import React, { Component } from 'react';
import '@ionic/react/css/core.css';
import { IonGrid,IonRow, IonCol} from '@ionic/react';

class MyHeader extends Component {
    render() {
        return (
            <div>
               <IonGrid>
        <IonRow>
            <IonCol>
            <div>
                1 of 3
            </div>
            </IonCol>
            <IonCol>
            <div>
                2 of 3
            </div>
            </IonCol>
            <IonCol>
            <div>
                3 of 3
            </div>
            </IonCol>
            <IonCol>
                <div>
                    4 of 4
                </div>
            </IonCol>
        </IonRow>
        </IonGrid>
            </div>
        );
    }
}

export default MyHeader;