import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileCardComponent } from './common-ui/profile-card/profile-card.component';
import { ProfileService } from './data/services/profile.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProfileCardComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  public title = 'tik-talk-app';
  public profileService: ProfileService = inject(ProfileService);
  public profiles: any = [];

  constructor() {
    this.profileService.getTestAccounts().subscribe((data) => {
      this.profiles = data;
    });
  }
}
