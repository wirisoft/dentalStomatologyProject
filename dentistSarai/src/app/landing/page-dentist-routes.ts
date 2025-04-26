import { Routes } from "@angular/router";
import { HomeDentistComponent } from "./home-dentist/home-dentist.component";
import { ErrorDentistComponent } from "./components/error-dentist/error-dentist.component";
import { TreatmentsDentistComponent } from "./treatments-dentist/treatments-dentist.component";
import { AboutUsDentistComponent } from "./about-us-dentist/about-us-dentist.component";




export const pageRoutes: Routes = [
  {
    path: "landing",
    children: [
      {
        path: "",
        redirectTo: "home-dentist",
        pathMatch: "full"
      },
      {
        path: "home-dentist",
        component: HomeDentistComponent
      },
      {
        path: "treatments-dentist",
        component: TreatmentsDentistComponent
      },
      {
        path: "404-dentist",
        component: ErrorDentistComponent
      },
      {
        path: "about-us-dentist",
        component: AboutUsDentistComponent
      }
    ]
  }
]