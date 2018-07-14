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
        MenuComponent
    ],
    exports: [
        DashboardComponent
    ]
})

export class DashboardModule { }
