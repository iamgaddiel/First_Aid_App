import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonPage, IonRouterLink, IonText, IonTitle, IonToolbar } from '@ionic/react'
import { pulseOutline, chevronBack } from 'ionicons/icons'
import React from 'react'
import { useParams } from 'react-router-dom'

const DirectionDetail = () => {
    const { term } = useParams<{ term: string }>()
    return (
        <IonPage>
            <IonHeader className='ion-no-border'>
                <IonToolbar>
                    <IonButtons slot='start'>
                        <IonBackButton className='has-text-primary' />
                    </IonButtons>
                    <IonIcon icon={pulseOutline} size='large' className='px-3 has-text-primary' slot='end' />
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen className='ion-padding'>
                <h1 className='has-text-bold has-text-primary'>{term}</h1>
                <section className='mt-4'>
                    <IonText>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, aspernatur quae. Sequi accusamus omnis eligendi distinctio facilis laboriosam atque, illum architecto assumenda rerum reiciendis quia molestiae, officiis reprehenderit, incidunt ea repudiandae. In non reprehenderit suscipit deserunt animi odio iure optio.
                    </IonText>

                </section>
            </IonContent>
        </IonPage>
    )
}

export default DirectionDetail