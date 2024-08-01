import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: "app-bread-crumbs",
  templateUrl: "./bread-crumbs.component.html",
  styleUrls: ["./bread-crumbs.component.scss"],
  standalone: true,
  imports: [ButtonComponent, FormsModule, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadCrumbsComponent {
  @Input() property1: "Top Page" | "1 Level" | "2 Levels" | "3 Levels" =
    "Top Page";
  @Input() label: string = "Top Page";
}
