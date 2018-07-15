import { RouterModule, Routes } from '@angular/router';

// Components
import { DashboardComponent } from './dashboard.component';
import { IndexComponent } from './index/index.component';

// Dashboard/Configurations
import { TypeBreedComponent } from './configurations/type-breed/type-breed.component';
import { TypeAnimalComponent } from './configurations/type-animal/type-animal.component';
import { TypeMedicineComponent } from './configurations/type-medicine/type-medicine.component';
import { TypeDonationComponent } from './configurations/type-donation/type-donation.component';
import { TypeObjectComponent } from './configurations/type-object/type-object.component';
import { TypeRolComponent } from './configurations/type-rol/type-rol.component';
import { TypeRhComponent } from './configurations/type-rh/type-rh.component';
import { MapComponent } from './map/map/map.component';


const dashboardRoutes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
            { path: 'dashboard', component: IndexComponent },
            { path: 'dashboard/config/type-breed',      component: TypeBreedComponent       },
            { path: 'dashboard/config/type-animal',     component: TypeAnimalComponent      },
            { path: 'dashboard/config/type-medicine',   component: TypeMedicineComponent    },
            { path: 'dashboard/config/type-donation',   component: TypeDonationComponent    },
            { path: 'dashboard/config/type-object',     component: TypeObjectComponent      },
            { path: 'dashboard/config/type-rol',        component: TypeRolComponent         },
            { path: 'dashboard/config/type-rh',         component: TypeRhComponent          },
            { path: 'dashboard/map',                    component: MapComponent          },
            { path: '', redirectTo: '/dashboard',       pathMatch: 'full' }
        ]
    }
];

export const DASHBOARD_ROUTES = RouterModule.forChild(dashboardRoutes);
