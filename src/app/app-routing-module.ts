import { NgModule } from "@angular/core"; 
import { RouterModule, Routes } from "@angular/router"; 
import { RegisteruserComponent } from "./components/users/registeruser/registeruser.component";
import { AccessrestrictedComponent } from "./_shared/accessrestricted/accessrestricted.component";
import { PopupComponent } from "./components/popup/popup.component";

const routes: Routes = [
    {
        path: '',
        redirectTo: 'user/register',
        pathMatch: "full"
    },
    {
        path:'user/register',
        component: RegisteruserComponent

    }, 
    {
        path:'popup2',
        component: PopupComponent
    },
    {
        path: '403',
        component: AccessrestrictedComponent

    }, 
    {
        path: '*',
        redirectTo: 'user/register'
    },
    {
        path: 'user/*',
        redirectTo: 'user/register'
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}