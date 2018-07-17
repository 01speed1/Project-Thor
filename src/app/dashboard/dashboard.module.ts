// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

// Components
import { DashboardComponent } from './dashboard.component';
import { IndexComponent } from './index/index.component';

// Dashboard/configurations
import { TypeBreedComponent } from './configurations/type-breed/type-breed.component';
import { TypeAnimalComponent } from './configurations/type-animal/type-animal.component';
import { TypeMedicineComponent } from './configurations/type-medicine/type-medicine.component';
import { TypeDonationComponent } from './configurations/type-donation/type-donation.component';
import { TypeObjectComponent } from './configurations/type-object/type-object.component';
import { TypeRolComponent } from './configurations/type-rol/type-rol.component';
import { TypeRhComponent } from './configurations/type-rh/type-rh.component';
// Dashboard/Map
import { MapComponent } from './map/map/map.component';
// Dashboard/Users
import { UsersComponent } from './users/users/users.component';
// Dashboard/Animals
import { AnimalsComponent } from './animals/animals/animals.component';
// Dashboard/Donations
import { DonationsComponent } from './donations/donations/donations.component';
// Routes
import { DASHBOARD_ROUTES } from './dashboard.routes';
import { MenuComponent } from './shared/menu/menu.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';



@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        HttpClientModule,
        DASHBOARD_ROUTES,
        ReactiveFormsModule
    ],
    declarations: [
        DashboardComponent,
        IndexComponent,
        MenuComponent,
        SidebarComponent,
        TypeBreedComponent,
        TypeAnimalComponent,
        TypeMedicineComponent,
        TypeDonationComponent,
        TypeObjectComponent,
        TypeRolComponent,
        TypeRhComponent,
        MapComponent,
        UsersComponent,
        AnimalsComponent,
        DonationsComponent
    ],
    exports: [
        DashboardComponent
    ]
})

export class DashboardModule { }
