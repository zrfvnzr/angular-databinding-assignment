import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-game-control',
    templateUrl: './game-control.component.html',
    styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

	@Output() emitCounter = new EventEmitter<number>();

	intervalId = null;
	counter = 0;
    isStarted = false;
	
	start() {
		if (this.isStarted) {
			return;
		}
		this.isStarted = true;
		this.intervalId = setInterval(() => {
			this.emitCounter.emit(this.counter);
			this.counter++;
		}, 1000);
	}  

	stop() {
		if (!this.isStarted) {
			return;
		}
		this.isStarted = false;
		clearInterval(this.intervalId);
	}

    constructor() { }

    ngOnInit(): void {
    }

}
