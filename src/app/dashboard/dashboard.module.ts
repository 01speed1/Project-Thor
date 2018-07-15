// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

// Components
import { DashboardComponent } from './dashboard.component';
import { IndexComponent } from './index/index.component';

// Routes
import { DASHBOARD_ROUTES } from './dashboard.routes';
import { MenuComponent } from './shared/menu/menu.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

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


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        HttpClientModule,
        DASHBOARD_ROUTES
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
        MapComponent
    ],
    exports: [
        DashboardComponent
    ]
})

export class DashboardModule { }
