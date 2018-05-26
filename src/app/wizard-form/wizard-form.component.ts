import { Component } from '@angular/core';

import { Dingus } from '../dingus';

@Component({
  selector: 'app-wizard-form',
  templateUrl: './wizard-form.component.html',
  styleUrls: ['./wizard-form.component.css']
})
export class WizardFormComponent {

  powers = ['Really Quick', 'Made Of Gas',
            'Can Drink A Lot', 'Nice To People'];

  model = new Dingus(11, 'Toofast', 'Mitch', this.powers[0]);

  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

}
