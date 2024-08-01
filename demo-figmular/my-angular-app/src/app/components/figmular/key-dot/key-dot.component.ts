import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
@Component({
  selector: "app-key-dot",
  templateUrl: "./key-dot.component.html",
  styleUrls: ["./key-dot.component.scss"],
  standalone: true,
  imports: [FormsModule, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KeyDotComponent {
  @Input() color:
    | "blue-light"
    | "blue"
    | "blue-dark"
    | "yellow-light"
    | "yellow"
    | "green-light"
    | "green"
    | "green-dark"
    | "orange-light"
    | "orange"
    | "orange-dark"
    | "red-light"
    | "red"
    | "red-dark"
    | "yellow-dark"
    | "grey-light"
    | "grey"
    | "grey-dark" = "blue-light";
}
