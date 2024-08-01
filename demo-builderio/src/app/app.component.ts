import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WorkHistoryComponent } from './components/work-history/work-history.component';
import { MyAccountModule } from './components/my-account/my-account.module';
import { PrivacySettingsModule } from './components/privacy-settings/privacy-settings.module';
import { OrganizationalContributorsModule } from './components/organizational-contributors/organizational-contributors.module';
import { ProjectsScorecardModule } from './components/projects-scorecard/projects-scorecard.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WorkHistoryComponent, MyAccountModule, PrivacySettingsModule, OrganizationalContributorsModule, ProjectsScorecardModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'demo-builderio';
}
