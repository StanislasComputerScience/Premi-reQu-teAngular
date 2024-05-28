// ici toutes les routes

import { Routes } from '@angular/router';


import { SignUpComponent } from './sign-up/sign-up.component'; 'signup' 
import { UserProfileComponent } from './user-profile/user-profile.component';

export const routes: Routes = [
{ path: 'signup', component: SignUpComponent },
{ path: 'userprofil', component: UserProfileComponent },];

