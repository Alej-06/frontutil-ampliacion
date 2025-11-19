import { Component, Input } from '@angular/core';
import { IBlog } from '../../../model/blog';

@Component({
  selector: 'app-view',
  imports: [],
  templateUrl: './view.html',
  styleUrl: './view.css',
})
export class ViewBlog {
  @Input() oBlog: IBlog | null = null;

}
