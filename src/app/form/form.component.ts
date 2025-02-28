import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  form!: FormGroup; // Use "!" to indicate it's initialized in ngOnInit

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.form.invalid) return;

    const formData = {
      name: this.form.value.email,
      message: this.form.value.message
    };

    this.http.post('http://localhost:5001/api/save', formData).subscribe({
      next: () => {
        alert('Data saved successfully');
        this.form.reset();
      },
      error: (err) => {
        alert('Failed to save data');
        console.error(err);
      }
    });
  }
}


