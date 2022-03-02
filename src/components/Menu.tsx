import React from "react";
import {
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { fingerPrintOutline, folderOpenOutline, mailOpenOutline, ribbonOutline, } from "ionicons/icons";
import { ROUTE_ABOUT_ME, ROUTE_CONTACT, ROUTE_PROJECTS, ROUTE_SKILLS } from "../utils/routes";

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
            <IonIcon slot="start" icon={fingerPrintOutline} />
              <IonLabel> About Me</IonLabel>
            </IonItem>
          </IonMenuToggle>
          <IonMenuToggle>
            <IonItem button routerLink={ROUTE_SKILLS}>
              <IonIcon slot="start" icon={ribbonOutline} />
              <IonLabel>Skills</IonLabel>
            </IonItem>
          </IonMenuToggle>
          <IonMenuToggle>
            <IonItem button routerLink={ROUTE_PROJECTS}>
              <IonIcon slot="start" icon={folderOpenOutline} />
              <IonLabel>Projects</IonLabel>
            </IonItem>
          </IonMenuToggle>
          <IonMenuToggle>
            <IonItem button routerLink={ROUTE_CONTACT}>
              <IonIcon slot="start" icon={mailOpenOutline} />
              <IonLabel>Let's talk</IonLabel>
            </IonItem>
          </IonMenuToggle>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};
export default Menu;
