import { Component } from '@angular/core';

import { Dingus } from '../dingus';

@Component({
  selector: 'app-wizard-form',
  templateUrl: './wizard-form.component.html',
  styleUrls: ['./wizard-form.component.css']
})
export class WizardFormComponent {

  powers = ['Really Smart', 'Super Flexible',
            'Super Cool', 'Weather Changer'];

  model = new Dingus(11, 'Toofast', this.powers[0], 'Mitch');

  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

}
