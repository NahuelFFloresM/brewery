import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Beer } from '../modelos/beer';

@Component({
  selector: 'app-beer-info-modal',
  templateUrl: './beer-info-modal.component.html',
  styleUrls: ['./beer-info-modal.component.scss']
})
export class BeerInfoModalComponent implements OnInit {

  @ViewChild('content') content: any;
  beer: Beer;
  closeResult: string;

  constructor(public activeModal: NgbModal) {}

  ngOnInit(): void {
  }

  open(beer): void {
    this.beer = beer;
    this.activeModal.open(this.content,{size: 'lg'});
}

}
