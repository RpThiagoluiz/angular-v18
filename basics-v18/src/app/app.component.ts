import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostComponent } from "./post/post.component";
import { NestedComponent } from "./nested/nested.component";
import { LifeCycleComponent } from "./life-cycle/life-cycle.component";


@Component({
  selector: 'app-root',
  standalone: true,
  //import de tudo que for externo ao component
  imports: [RouterOutlet, PostComponent, NestedComponent, LifeCycleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  subtitle = 'World';
  imgUrl = 'https://picsum.photos/id/237/500/500'

  // pega o evento natural pela tipagem
  changeImage(e: KeyboardEvent) {
    this.imgUrl = (e.target as HTMLInputElement).value
  }

  logImg(event: string) {
    console.log({'Prop children': event})
  }

}
