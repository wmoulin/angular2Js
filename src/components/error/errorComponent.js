import {Component, Input} from "angular2/core";

@Component({
  selector: 'error',
  templateUrl: 'app/components/error/template.html'
})
export default class ErrorComponent {

  @Input()
  form = "";

  @Input()
  controlName = "";

  messages = {
    required: "Required",
    yearAfter: "Must be greater than "
  };

  constructor() {
    this.invalidMessages = [];
  }

  get errorsMessage() {

    this.invalidMessages.length = 0;

    if (this.form && this.form.doValid) {
      this.form._touched = false;
      if (this.controlName  && this.form.controls[this.controlName] && this.form.controls[this.controlName].errors) {
        for (let errorName in this.form.controls[this.controlName].errors) {
          this.invalidMessages.push(this.controlName + " : " + this.messages[errorName] + controls[controleName].errors[errorName] === true ? "" : controls[controleName].errors[errorName]);
        }
      } else if (!this.form.valid) {
        let controls = this.form.controls;
        for (let controleName in controls) {
          if (controls[controleName].errors) {
            for (let errorName in controls[controleName].errors) {
              this.invalidMessages.push(controleName + " : " + this.messages[errorName] + (controls[controleName].errors[errorName] === true ? "" : controls[controleName].errors[errorName]));
            }
          }
        }
      }
    }

    return this.invalidMessages;

  }
}
