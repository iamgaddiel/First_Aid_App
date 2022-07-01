import { IonAvatar, IonButton, IonCard, IonContent, IonHeader, IonIcon, IonImg, IonItem, IonList, IonPage, IonRouterLink, IonSearchbar, IonText, IonTitle, IonToolbar, IonModal } from '@ionic/react';
import { search, pulse } from "ionicons/icons"
import { useEffect, useState } from 'react';
import { pulseOutline } from "ionicons/icons"
import './Home.css';

const Home: React.FC = () => {
  const [search, setSearch] = useState("")
  const [isOpen, setIsOpen] = useState(false)


  useEffect(
    () => {

    },
    []
  )

  const handleSearch = () => {
    console.log(search)
  }

  return (
    <IonPage>
      <IonHeader className='ion-no-border'>
        <IonToolbar className='ion-padding-vertical'>
          <div className="has-text-centered ion-margin-top">
            <IonIcon icon={pulseOutline} size='large' className='has-text-primary' />
          </div>
          <IonSearchbar
            autocomplete='on'
            enterkeyhint='search'
            inputMode='search'
            value={search}
            onIonChange={e => setSearch(e.detail.value! as string)}
            className='ion-padding'
          />
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {/* <IonHeader className='has-background-white py-5 ion-primary'>
        </IonHeader> */}

        <section className="mt-1 ion-padding">
          <IonList lines='none'>

            <IonItem routerDirection='forward' routerLink='/direction/HeartBurn' className='py-3'>
              <IonIcon icon={pulse} size='large' slot='start' className='has-text-primary'/>
              <IonText className="has-text-primary">HeartBurn</IonText>
            </IonItem>
            
            <IonItem routerDirection='forward' routerLink='/direction/Headache' className='py-3'>
              <IonIcon icon={pulse} size='large' slot='start' className='has-text-primary'/>
              <IonText className="has-text-primary">Headache</IonText>
            </IonItem>

            <IonItem routerDirection='forward' routerLink='/direction/Sprain' className='py-3'>
              <IonIcon icon={pulse} size='large' slot='start' className='has-text-primary'/>
              <IonText className="has-text-primary">Sprain</IonText>
            </IonItem>

            <IonItem routerDirection='forward' routerLink='/direction/Fever' className='py-3'>
              <IonIcon icon={pulse} size='large' slot='start' className='has-text-primary'/>
              <IonText className="has-text-primary">Fever</IonText>
            </IonItem>
            
            <IonItem routerDirection='forward' routerLink='/direction/Fracture' className='py-3'>
              <IonIcon icon={pulse} size='large' slot='start' className='has-text-primary'/>
              <IonText className="has-text-primary">Fracture</IonText>
            </IonItem>

            <IonItem routerDirection='forward' routerLink='/direction/Cough' className='py-3'>
              <IonIcon icon={pulse} size='large' slot='start' className='has-text-primary'/>
              <IonText className="has-text-primary">Cough</IonText>
            </IonItem>

            <IonItem routerDirection='forward' routerLink='/direction/Toothache' className='py-3'>
              <IonIcon icon={pulse} size='large' slot='start' className='has-text-primary'/>
              <IonText className="has-text-primary">Toothache</IonText>
            </IonItem>

            <IonItem routerDirection='forward' routerLink='/direction/Stomachache' className='py-3'>
              <IonIcon icon={pulse} size='large' slot='start' className='has-text-primary'/>
              <IonText className="has-text-primary">Stomachache</IonText>
            </IonItem>

            <IonItem routerDirection='forward' routerLink='/direction/Malaria' className='py-3'>
              <IonIcon icon={pulse} size='large' slot='start' className='has-text-primary'/>
              <IonText className="has-text-primary">Malaria</IonText>
            </IonItem>

            <IonItem routerDirection='forward' routerLink='/direction/Ulcer' className='py-3'>
              <IonIcon icon={pulse} size='large' slot='start' className='has-text-primary'/>
              <IonText className="has-text-primary">Ulcer</IonText>
            </IonItem>

            <IonItem routerDirection='forward' routerLink='/direction/Diabetics' className='py-3'>
              <IonIcon icon={pulse} size='large' slot='start' className='has-text-primary'/>
              <IonText className="has-text-primary">Diabities</IonText>
            </IonItem>

            <IonItem routerDirection='forward' routerLink='/direction/Joint ache' className='py-3'>
              <IonIcon icon={pulse} size='large' slot='start' className='has-text-primary'/>
              <IonText className="has-text-primary">Joint ache</IonText>
            </IonItem>

            <IonItem routerDirection='forward' routerLink='/direction/Convulsion' className='py-3'>
              <IonIcon icon={pulse} size='large' slot='start' className='has-text-primary'/>
              <IonText className="has-text-primary">Convulsion</IonText>
            </IonItem>

          </IonList>
        </section>
      </IonContent>
    </IonPage>
  );
};

export default Home;
