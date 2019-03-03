import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-fancy-button-component',
  templateUrl: './fancy-button-component.component.html',
  styleUrls: ['./fancy-button-component.component.scss']
})
export class FancyButtonComponentComponent {

  @Input()
  @HostBinding('class.isDisabled')
  disabled: boolean;

}
