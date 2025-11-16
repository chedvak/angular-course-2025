import { Component, EventEmitter, Output } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, AbstractControl, FormArray } from '@angular/forms';

/** cross-field validator (kept as plain function so it can be passed directly) */
function passwordsMatch(group: AbstractControl) {
  const p = group.get('password')?.value;
  const c = group.get('confirmPassword')?.value;
  return p === c ? null : { mismatch: true };
}

@Component({
  selector: 'app-new-user',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './new-user.html',
  styleUrls: ['./new-user.css']
})
export class NewUser {

  addUserForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
  });

  onSubmit() {
    if (this.addUserForm.valid) {
      console.log('valid form submitted', this.addUserForm);
    } else {
      this.addUserForm.markAllAsTouched();
    }
  }









  // @Output() newUser = new EventEmitter(); // emit full form value

  // categoriesList = ['Work', 'Personal', 'Urgent'];

  // form = new FormGroup({
  //   name: new FormGroup({
  //     firstName: new FormControl('', [Validators.required, Validators.maxLength(30)]),
  //     lastName: new FormControl('', [Validators.required, Validators.maxLength(30)]),
  //   }),
  //   email: new FormControl('', [Validators.required, Validators.email]),
  //   passwords: new FormGroup(
  //     {
  //       password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  //       confirmPassword: new FormControl('', Validators.required)
  //     },
  //     { validators: passwordsMatch }
  //   ),
  //   categories: new FormArray(
  //     this.categoriesList.map(() => new FormControl(false))
  //   )
  // });



  // // --- getters for controls ---
  // get firstName(): FormControl {
  //   return this.form.controls.name.controls.firstName;
  // }
  // get lastName(): FormControl {
  //   return this.form.controls.name.controls.lastName;
  // }
  // get email(): FormControl {
  //   return this.form.controls.email;
  // }
  // get passwordGroup(): FormGroup {
  //   return this.form.controls.passwords;
  // }
  // get password(): FormControl {
  //   return this.form.controls.passwords.controls.password;
  // }
  // get confirmPassword(): FormControl {
  //   return this.form.controls.passwords.controls.confirmPassword;
  // }

  // // --- validation-check getters ---
  // get firstNameRequired(): boolean {
  //   return this.firstName.touched && this.firstName.hasError('required');
  // }
  // get firstNameTooLong(): boolean {
  //   return this.firstName.touched && this.firstName.hasError('maxlength');
  // }

  // get lastNameRequired(): boolean {
  //   return this.lastName.touched && this.lastName.hasError('required');
  // }
  // get lastNameTooLong(): boolean {
  //   return this.lastName.touched && this.lastName.hasError('maxlength');
  // }

  // get emailRequired(): boolean {
  //   return this.email.touched && this.email.hasError('required');
  // }
  // get emailInvalid(): boolean {
  //   return this.email.touched && this.email.hasError('email');
  // }

  // get passwordRequired(): boolean {
  //   return this.password.touched && this.password.hasError('required');
  // }
  // get passwordTooShort(): boolean {
  //   return this.password.touched && this.password.hasError('minlength');
  // }
  // get passwordsMismatch(): boolean {
  //   return (this.password.touched || this.confirmPassword.touched) && this.passwordGroup.hasError('mismatch');
  // }

  // onSubmit() {
  //   if (this.form.valid) {
  //     console.log('create user', this.form);
  //     this.newUser.emit(this.form.value);
  //     // this.form.reset();
  //   } else {
  //     this.form.markAllAsTouched();
  //   }
  // }
}
