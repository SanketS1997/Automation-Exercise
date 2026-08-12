import { BaseComponent } from "./BaseComponent";

export class LabelComponent extends BaseComponent {
  async text(): Promise<string> {
    return (await this.locator.textContent()) ?? "";
  }

  async isVisible(): Promise<boolean> {
    return await this.locator.isVisible();
  }
}
