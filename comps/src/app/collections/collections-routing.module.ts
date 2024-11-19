import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionHomeComponentComponent } from './collection-home-component/collection-home-component.component';
import { BiographyComponent } from './biography/biography.component';
import { CompaniesComponent } from './companies/companies.component';
import { PartnersComponent } from './partners/partners.component';

const routes: Routes = [
  {
    path: '', component: CollectionHomeComponentComponent,
    children: [
      {path: '', component: BiographyComponent},
      {path: 'companies', component: CompaniesComponent},
      {path: 'partners', component: PartnersComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionsRoutingModule { }
