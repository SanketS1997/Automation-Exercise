import { BaseComponent } from "./BaseComponent";

export class ButtonComponent extends BaseComponent {
  async doubleClick(): Promise<void> {
    await this.locator.dblclick();
  }

  async forceClick(): Promise<void> {
    await this.locator.click({
      force: true,
    });
  }

  async isEnabled(): Promise<boolean> {
    return await this.locator.isEnabled();
  }
}
