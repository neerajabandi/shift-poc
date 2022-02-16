import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomerComponent } from './side-nav-menu/customer/customer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './fields-components/input/input.component';
import { SelectComponent } from './fields-components/select/select.component';
import { DatePipe } from './date.pipe';
import { SideNavMenuComponent } from './side-nav-menu/side-nav-menu.component';
import { ListViewComponent } from './side-nav-menu/list-view/list-view.component';
import { DetailsViewComponent } from './side-nav-menu/details-view/details-view.component';
import { DetailsComponent } from './side-nav-menu/details/details.component';
import { CustomerFormComponent } from './side-nav-menu/customer-form/customer-form.component';
import { ProcessStatusComponent } from './side-nav-menu/process-status/process-status.component';
import { EventComponent } from './side-nav-menu/event/event.component';
import { ActivityCountComponent } from './side-nav-menu/activity-count/activity-count.component';
import { JourneyComponent } from './side-nav-menu/journey/journey.component';
import { FilterComponent } from './side-nav-menu/list-view/filter/filter/filter.component';
import { MultiSelectComponent } from './fields-components/multi-select/multi-select.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    InputComponent,
    SelectComponent,
    DatePipe,
    SideNavMenuComponent,
    ListViewComponent,
    DetailsViewComponent,
    DetailsComponent,
    CustomerFormComponent,
    ProcessStatusComponent,
    EventComponent,
    ActivityCountComponent,
    JourneyComponent,
    FilterComponent,
    MultiSelectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
