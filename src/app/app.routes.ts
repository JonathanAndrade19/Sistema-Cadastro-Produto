import { Routes } from '@angular/router';
import { ProdutoComponent } from './components/produto/produto/produto.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'produto',
        pathMatch: 'full'
    },
    {
        path: 'produto',
        component: ProdutoComponent
    }
];
