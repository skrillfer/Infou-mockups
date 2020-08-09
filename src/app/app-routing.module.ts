import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

// All Routes (Without Tabs)
// Note (Found others routes at tabs/tabs-routing.module.ts)
const routes: Routes = [
  { path: '', redirectTo: 'onbroading', pathMatch: 'full' },
  { path: 'onbroading', loadChildren: () => import('./pages/onboarding/onboarding.module').then(m => m.OnboardingModule) },
  { path: 'landing', loadChildren: () => import('./pages/auth/landing-page/landing-page.module').then(m => m.LandingPageModule) },
  { path: 'signup', loadChildren: () => import('./pages/auth/signup/signup.module').then(m => m.SignupModule) },
  { path: 'signin', loadChildren: () => import('./pages/auth/signin/signin.module').then(m => m.SigninModule) },
  { path: 'forget-password', loadChildren: () => import('./pages/auth/forget-password/forget-password.module').then(m => m.ForgetPasswordModule) },
  { path: 'verification', loadChildren: () => import('./pages/auth/verification/verification.module').then(m => m.VerificationModule) },
  { path: '', loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule) }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
