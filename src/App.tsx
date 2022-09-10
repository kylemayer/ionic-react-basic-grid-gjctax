import React from 'react';
import { IonApp, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol } from '@ionic/react';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

import './grid.css';

const App: React.FC = () => (
  <IonApp>
  <IonHeader>
    <IonToolbar>
      <IonTitle>Basic Grid</IonTitle>
    </IonToolbar>
  </IonHeader>

  <IonContent className="ion-padding">
    <h1>Basic Equal Width Columns</h1>
    <IonGrid>
      <IonRow>
        <IonCol>
          1 of 3
        </IonCol>
        <IonCol>
          2 of 3
        </IonCol>
        <IonCol>
          3 of 3
        </IonCol>
      </IonRow>

      <IonRow>
        <IonCol>
          1 of 6
        </IonCol>
        <IonCol>
          2 of 6
        </IonCol>
        <IonCol>
          3 of 6
        </IonCol>
        <IonCol>
          4 of 6
        </IonCol>
        <IonCol>
          5 of 6
        </IonCol>
        <IonCol>
          6 of 6
        </IonCol>
      </IonRow>

      <IonRow>
        <IonCol>
          1 of 12
        </IonCol>
        <IonCol>
          2 of 12
        </IonCol>
        <IonCol>
          3 of 12
        </IonCol>
        <IonCol>
          4 of 12
        </IonCol>
        <IonCol>
          5 of 12
        </IonCol>
        <IonCol>
          6 of 12
        </IonCol>
        <IonCol>
          7 of 12
        </IonCol>
        <IonCol>
          8 of 12
        </IonCol>
        <IonCol>
          9 of 12
        </IonCol>
        <IonCol>
          10 of 12
        </IonCol>
        <IonCol>
          11 of 12
        </IonCol>
        <IonCol>
          12 of 12
        </IonCol>
      </IonRow>
    </IonGrid>
  </IonContent>

  </IonApp>
);

export default App;