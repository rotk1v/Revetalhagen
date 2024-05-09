import { Component, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { SanityService } from "./services/sanity.service";
import { CommonModule } from "@angular/common";
import { FrontPage } from "./models/frontpage";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [NavbarComponent, RouterOutlet, CommonModule],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent implements OnInit {
  title = "revetalhagen";
  test?: FrontPage;

  constructor(private sanityService: SanityService) {}

  async ngOnInit(): Promise<void> {
    const temp = await this.sanityService.getFrontPage();
    this.test = temp[0];
  }
}
