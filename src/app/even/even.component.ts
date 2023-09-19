import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'app-even',
    templateUrl: './even.component.html',
    styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit {

    @Input('number') number: number;
    
    @ViewChild('content', { static: true }) content: ElementRef;

    constructor() { }

    ngOnInit(): void {
    }

}
