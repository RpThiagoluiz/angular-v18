import { Component, Input, OnInit, OnChanges, DoCheck, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  standalone: true,
  imports: [],
  templateUrl: './life-cycle.component.html',
  styleUrl: './life-cycle.component.css'
})
export class LifeCycleComponent implements OnInit, OnChanges, DoCheck {

  @Input()
  postImg = ''

  constructor() {
    console.log('Life cycle, constructor() called', {img: this.postImg})

  }
  // Hooks
  // Quando for implements com o OnInit ele precisa seguir a tipagem 'ngOnInit  '
  ngOnInit(): void {
      console.log('ngOnInit() called', {img: this.postImg})
  }

  ngOnChanges(changes: SimpleChanges): void {
    //useState
      console.log('ngOnChanges() called')
  }

  ngDoCheck(): void {
    console.log('ngDoCheck() called')
  }
}

