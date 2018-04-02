import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';


import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthEffects } from './effects/auth.effects';

import { LoginComponent } from './login/login.component';

import { AuthRoutingModule } from './auth-routing.module';

import { reducers } from './reducers';
import { MaterialModule } from '../material/material.module';


export const COMPONENTS = [LoginComponent];

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, MaterialModule],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class AuthModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: RootAuthModule,
      providers: [AuthService, AuthGuardService],
    };
  }
}

@NgModule({
  imports: [
    AuthModule,
    RouterModule.forChild([{ path: 'login', component: LoginComponent }]),
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([AuthEffects]),
  ],
})
export class RootAuthModule {}