import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { KeyDotComponent } from "../key-dot/key-dot.component";
@Component({
  selector: "app-assessment",
  templateUrl: "./assessment.component.html",
  styleUrls: ["./assessment.component.scss"],
  standalone: true,
  imports: [KeyDotComponent, FormsModule, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AssessmentComponent {
  @Input() strength: "strong" | "moderate" | "weak" | "very weak" = "strong";
  @Input() type: "word" | "point" = "point";
}
