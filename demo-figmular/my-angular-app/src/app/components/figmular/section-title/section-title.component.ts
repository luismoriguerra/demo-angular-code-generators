import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { AssessmentComponent } from "../assessment/assessment.component";
import { GithubComponent } from "../github/github.component";
import { DownloadComponent } from "../download/download.component";
import { LinkComponent } from "../link/link.component";
@Component({
  selector: "app-section-title",
  templateUrl: "./section-title.component.html",
  styleUrls: ["./section-title.component.scss"],
  standalone: true,
  imports: [
    AssessmentComponent,
    GithubComponent,
    DownloadComponent,
    LinkComponent,
    FormsModule,
    CommonModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionTitleComponent {
  @Input() showActionIcon: boolean = false;
  @Input() showTooltip: boolean = false;
  @Input() showActionIcon2: boolean = false;
  @Input() showDescriptiveText: boolean = false;
  @Input() showAssessment: boolean = false;
  @Input() sectionTitle: string = "Title";
  @Input() sectionDescriptiveText: string =
    "The section descriptive text goes here.";
  @Input() type: "page title" | "section title" | "subsection title" =
    "page title";
}
