import { Routes } from "@angular/router";
import { SignUpComponent } from "./pages/sign-up/sign-up.component";
import { LoginComponent } from "./pages/login/login.component";
import { ActivateAccountComponent } from "./pages/activate-account/activate-account.component";
import { ForgotPasswordComponent } from "./pages/forgot-password/forgot-password.component";

export const authRoutes: Routes = [
  {
    path: '',
    component: LoginComponent,
    title: 'Login',
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
    title: 'Sign Up',
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
    title: 'Forgot Password',
  },
  {
    path: 'activate-account',
    component: ActivateAccountComponent,
    title: 'Activate Account',
  },
]
