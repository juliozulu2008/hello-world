import { setupIonicReact, IonButton, useIonToast, IonApp, IonHeader, IonContent, IonToolbar, IonTitle } from '@ionic/react'; // 1* inclui essa configuração
import '@ionic/react/css/core.css'; //3* Importa o modulo de CSS

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

/* Custom Styles */
import './theme/variables.css';



setupIonicReact(); // 2* chama a Funçao de  setup

//Aplicaçao react Padrao
function App() { 
  const[present] = useIonToast();
  const presentToast = (position:'top')=>{
    present({
      message:"Hello World!",
      duration:1500,
      position:position
    })
  }


  const handleClick = ()=>{
    console.log("Its a event!");
  };
  return (
    <IonApp>
      <IonHeader>
      <IonToolbar>
        <IonTitle>Primeiro App com React Ionic</IonTitle>
      </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        <IonButton onClick={handleClick}>
        Click Me
        </IonButton>
        <IonButton color="success" onClick={()=>presentToast('top')}>Click V2</IonButton>
      </IonContent>
    </IonApp>
  );
}

export default App;
