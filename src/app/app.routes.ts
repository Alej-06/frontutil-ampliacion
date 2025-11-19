import { Routes } from '@angular/router';
import { Home } from './component/shared/home/home';
import { PlistBlog } from './component/blog/plist/plist';
import { RoutedView } from './component/blog/routed-view/routed-view';


export const routes: Routes = [
  { path: '', component: Home },
  { path: 'blog', component: PlistBlog },
  { path: 'blog/view/:id', component: RoutedView },
];
