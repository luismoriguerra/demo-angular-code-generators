import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
@Component({
  selector: "app-arrow-right-default",
  templateUrl: "./arrow-right-default.component.html",
  styleUrls: ["./arrow-right-default.component.scss"],
  standalone: true,
  imports: [FormsModule, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArrowRightDefaultComponent {}
