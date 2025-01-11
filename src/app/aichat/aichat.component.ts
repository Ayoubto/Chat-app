import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators,AbstractControl } from '@angular/forms';
import { CommonModule } from '@angular/common';  // Importation du CommonModule
@Component({
  selector: 'app-aichat',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './aichat.component.html',
  styleUrl: './aichat.component.css'
})
export class AIchatComponent {

  messages = [
    { sender: 'user', text: 'Hello, AI!', timestamp: '10:00 AM' },
    { sender: 'ai', text: 'Hello! How can I assist you today?', timestamp: '10:01 AM' },
    { sender: 'user', text: 'Can you tell me about Angular?', timestamp: '10:02 AM' },
    { sender: 'ai', text: 'Sure! Angular is a platform for building web applications using TypeScript.', timestamp: '10:03 AM' }
  ];


  chatForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // Initialisation du formulaire avec FormBuilder
    this.chatForm = this.fb.group({
      message: ['', [Validators.required, Validators.minLength(1)]]
    });
  }

  // Méthode pour soumettre le formulaire
  onSubmit(): void {
    if (this.chatForm.valid) {
      console.log(this.chatForm.value);
    } else {
      console.error('Le formulaire est invalide');
    }
  }
}
