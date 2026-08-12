import { BaseComponent } from "./BaseComponent";

export class TextBoxComponent extends BaseComponent {
  async clear(): Promise<void> {
    await this.locator.clear();
  }

  async type(value: string): Promise<void> {
    await this.locator.pressSequentially(value);
  }

  async value(): Promise<string> {
    return await this.locator.inputValue();
  }
}
