import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
@Component({
  selector: "app-drill-down-button",
  templateUrl: "./drill-down-button.component.html",
  styleUrls: ["./drill-down-button.component.scss"],
  standalone: true,
  imports: [FormsModule, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DrillDownButtonComponent {
  @Input() hasText: boolean = false;
  @Input() hasRightIcon: boolean = false;
  @Input() hasLeftIcon: boolean = false;
  @Input() label: string = "Button";
  @Input() hierarchy: "primary" | "special" | "secondary" = "primary";
  @Input() state: "idle" | "hover" | "press" | "disabled" = "idle";
}
