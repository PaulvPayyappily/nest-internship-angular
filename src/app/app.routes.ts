import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { StatesComponent } from './pages/states/states.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { ContactComponent } from './pages/contact/contact.component';
import { KeralaComponent } from './pages/kerala/kerala.component';
import { SingleStateComponent } from './pages/single-state/single-state.component';
import { Component } from '@angular/core';

export const routes: Routes = [

    {
        path:"",component:HomeComponent
    },
    {
        path:"states",component:StatesComponent,

    },
    {
        path:"states/:id",component:SingleStateComponent
    },
    {
        path:"contact",component:ContactComponent
    },
    {
        path:"**",component:NotfoundComponent
    }



];
