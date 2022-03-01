import React from "react";
import {
  IonContent,
  IonHeader,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { options } from "ionicons/icons";
import { ROUTE_ABOUT_ME } from "../utils/routes";

const Menu: React.FC = () => {
  return (
    <IonMenu contentId="main">
      <IonHeader>
        <IonToolbar>
          <IonTitle className="ion-text-center ion-text-uppercase">
            Let's go there
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList className="items" lines="none" mode="ios">
          <IonMenuToggle>
            <IonItem button routerLink={ROUTE_ABOUT_ME}>
              <IonImg src="../images/icon8-brave.svg" />
              <IonLabel> About Me</IonLabel>
            </IonItem>
          </IonMenuToggle>
          <IonMenuToggle>
            <IonItem button routerLink="/" routerDirection="none">
              <IonIcon slot="start" icon={options} />
              <IonLabel>Skills</IonLabel>
            </IonItem>
          </IonMenuToggle>
          <IonMenuToggle>
            <IonItem button routerLink="/" routerDirection="none">
              <IonIcon slot="start" icon={options} />
              <IonLabel>Projects</IonLabel>
            </IonItem>
          </IonMenuToggle>
          <IonMenuToggle>
            <IonItem button routerLink="/" routerDirection="none">
              <IonIcon slot="start" icon={options} />
              <IonLabel>Let's talk</IonLabel>
            </IonItem>
          </IonMenuToggle>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};
export default Menu;
