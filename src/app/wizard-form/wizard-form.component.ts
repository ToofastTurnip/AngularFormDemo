import { Component } from '@angular/core';

import { Wizard } from '../wizard';

@Component({
  selector: 'app-wizard-form',
  templateUrl: './wizard-form.component.html',
  styleUrls: ['./wizard-form.component.css']
})
export class WizardFormComponent {

  powers = ['Really Quick', 'Made Of Gas',
            'Can Drink A Lot', 'Nice To People'];

  model = new Wizard(1, 'Toofast', this.powers[0], 'Mitch');

  submitted = false;

  onSubmit() { this.submitted = true; }

  newWizard() {
    this.model = new Wizard(2, '', this.powers[0], '');
  }

}
