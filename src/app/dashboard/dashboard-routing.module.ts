import { Routes } from "@angular/router";
import { LayoutComponent } from "./layout/layout.component";
import { MainComponent } from "./pages/main/main.component";
import { CategoryComponent } from "./pages/category/category.component";
import { ProductsComponent } from "./pages/products/products.component";
import { SettingsComponent } from "./pages/settings/settings.component";
import { StatisticsComponent } from "./pages/statistics/statistics.component";
import { TransactionsComponent } from "./pages/transactions/transactions.component";

export const dashboardRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'all',
        component: MainComponent,
      },
      {
        path: 'category',
        component: CategoryComponent,
      },
      {
        path: 'products',
        component: ProductsComponent,
      },
      {
        path: 'settings',
        component: SettingsComponent
      },
      {
        path: 'statistics',
        component: StatisticsComponent
      },
      {
        path: 'transaction',
        component: TransactionsComponent
      },
    ]
  }
]
