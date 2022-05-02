import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactDetailsPageComponent } from './pages/contact-details-page/contact-details-page.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { StatisticsPageComponent } from './pages/statistics-page/statistics-page.component';
import { AboutComponent } from './pages/about/about.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactResolverService } from './services/contact-resolver.service';
import { EditComponent } from './pages/edit/edit.component';

const routes: Routes = [
  {
    path: 'contacts/:id',
    component: ContactDetailsPageComponent,
    resolve: { contact: ContactResolverService },
  },
  { path: 'edit', component: EditComponent, resolve: { contact: ContactResolverService } },
  { path: 'contacts/edit/:id', component: EditComponent, resolve: { contact: ContactResolverService } },
  {
    path: 'contacts',
    component: ContactsPageComponent, children: [
      // { path: ':id', component: ContactDetailsPageComponent, resolve: { contact: ContactResolverService }},
      // { path: 'edit', component: EditComponent, resolve: { contact: ContactResolverService } },
      // { path: 'edit/:id', component: EditComponent, resolve: { contact: ContactResolverService } }
     
    ]
  },
  {
    path: 'statistics',
    component: StatisticsPageComponent,
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '',
    component: HomePageComponent,
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
