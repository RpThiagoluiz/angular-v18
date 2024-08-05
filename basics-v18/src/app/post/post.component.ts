import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  // alias, no caso img., agora a prop do component não é mais postImg e sim 'img'.
  // input é o dado voltando para o pai, igual react.
  @Input('img')
  postImg = ''

  @Output()
  imgSelected = new EventEmitter<string>()


}
