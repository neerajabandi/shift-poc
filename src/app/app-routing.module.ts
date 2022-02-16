import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityCountComponent } from './side-nav-menu/activity-count/activity-count.component';
import { CustomerFormComponent } from './side-nav-menu/customer-form/customer-form.component';
import { CustomerComponent } from './side-nav-menu/customer/customer.component';
import { DetailsViewComponent } from './side-nav-menu/details-view/details-view.component';
import { DetailsComponent } from './side-nav-menu/details/details.component';
import { EventComponent } from './side-nav-menu/event/event.component';
import { JourneyComponent } from './side-nav-menu/journey/journey.component';
import { ListViewComponent } from './side-nav-menu/list-view/list-view.component';
import { ProcessStatusComponent } from './side-nav-menu/process-status/process-status.component';
import { SideNavMenuComponent } from './side-nav-menu/side-nav-menu.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard', component: SideNavMenuComponent, children: [
      { path: 'details', component: DetailsComponent },
      { path: 'detailsView', component: DetailsViewComponent },
      { path: 'listView', component: ListViewComponent },
      { path: 'customerForm', component: CustomerFormComponent },
      { path: 'processStatus', component: ProcessStatusComponent },
      { path: 'event', component: EventComponent },
      { path: 'activityCount', component: ActivityCountComponent },
      { path: 'journey', component: JourneyComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
