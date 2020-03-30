import { Component, ViewChild } from '@angular/core';
import { DummyService } from './dummy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
	@ViewChild('myForm') formValues;
	submittedUser: string;
	ime: string;
	tocke: number;

	constructor(private dummyService: DummyService) { }

	onSubmit(form) {	
		this.dummyService.create(form).subscribe((res) => {
			console.log("RESET");
			this.submittedUser = res.message;
			this.formValues.resetForm();
		});
	}
}