import { Routes } from "@angular/router";
import { HomeDentistComponent } from "./home-dentist/home-dentist.component";
import { ErrorDentistComponent } from "./components/error-dentist/error-dentist.component";




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
        path: "404-dentist",
        component: ErrorDentistComponent
      }
    ]
  }
]