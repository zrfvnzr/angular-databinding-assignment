import { Component } from '@angular/core';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

	oddLogs = [];
	evenLogs = [];

	emitDetected(counter: number) {
		if (counter % 2 == 0) {
			this.evenLogs.push(counter);
		} else {
			this.oddLogs.push(counter);
		}
	}

}
