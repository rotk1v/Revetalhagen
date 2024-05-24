import { Routes } from "@angular/router";
import { EventsComponent } from "./components/events/events.component";
import { FrontpageComponent } from "./components/frontpage/frontpage.component";
import { ActivitiesComponent } from "./components/activities/activities.component";

export const routes: Routes = [
  {
    title: "Arrangementer",
    loadComponent: () => EventsComponent,
    path: "events",
  },
  {
    title: "Aktiviteter",
    loadComponent: () => ActivitiesComponent,
    path: "activities",
  },
  {
    title: "Forside",
    loadComponent: () => FrontpageComponent,
    path: "",
  },
];
