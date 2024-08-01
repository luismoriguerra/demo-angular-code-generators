/**
 * This code was generated by Builder.io.
 */
import { Component, OnInit } from "@angular/core";
import { SettingItem } from "./setting-item.interface";

@Component({
  selector: "app-privacy-settings",
  templateUrl: "./privacy-settings.component.html",
  styleUrls: ["./privacy-settings.component.scss"],
})
export class PrivacySettingsComponent implements OnInit {
  employerVisibility: SettingItem = {
    title: "City / Country",
    description: "On Org Dashboard",
    isEnabled: true,
  };

  publicVisibilitySettings: SettingItem[] = [
    {
      title: "General Profile Information",
      description: "Share some details about yourself.",
      isEnabled: true,
    },
    {
      title: "About Me",
      description: 'Share the "About Me" rich text to your public profile.',
      isEnabled: true,
    },
    {
      title: "Personal Information",
      description:
        "Share your name, title, organization, photo, country, and city to your public profile",
      isEnabled: true,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  toggleSetting(setting: SettingItem): void {
    setting.isEnabled = !setting.isEnabled;
  }
}