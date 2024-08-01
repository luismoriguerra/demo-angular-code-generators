import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.scss"],
  standalone: true,
  imports: [FormsModule, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() hasText: boolean = false;
  @Input() hasRightIcon: boolean = false;
  @Input() hasLeftIcon: boolean = false;
  @Input() label: string = "Button";
  @Input() hierarchy:
    | "primary"
    | "special"
    | "secondary"
    | "tertiary"
    | "link 1"
    | "link 2" = "primary";
  @Input() state: "idle" | "hover" | "disabled" | "press" = "idle";
}
