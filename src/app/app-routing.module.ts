import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';

const routes = [
  {
    path: '',
    component: HomeComponent,
  },
  // Set path for personal information
  {
    path: 'personal-information',
    component: PersonalInformationComponent,
  },
  // Set path and guard for summary page
  // Set path for success
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
