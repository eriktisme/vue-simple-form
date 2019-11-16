import ErrorBag from "./ErrorBag";

type FormData = {
  [key: string]: any;
};

export default class Form {
  [key: string]: any;

  private readonly formData: FormData;
  public errors = new ErrorBag();
  public busy = false;
  public successful = false;

  /**
   * Create a new form instance.
   *
   * @param {Object} data
   */
  constructor(data: Object = {}) {
    this.formData = data;

    for (const key in this.formData) {
      this.registerProperty(key);
    }
  }

  public data(): FormData {
    return this.formData;
  }

  public start(): void {
    this.errors.clear();
    this.busy = true;
    this.successful = false;
  }

  public finished(): void {
    this.busy = false;
    this.successful = true;
  }

  public fill(data: Object): void {
    for (const key in data) {
      this.registerProperty(key);
    }
  }

  public failed(errors: Object): void {
    this.busy = false;
    this.successful = false;
    this.errors.fill(errors);
  }

  public onKeyDown({ target }: KeyboardEvent): void {
    if (target) {
      this.errors.forget((target as HTMLInputElement).name);
    }
  }

  private registerProperty(key: string) {
    Object.defineProperty(this, key, {
      get: () => this.formData[key],
      set: (value: any) => {
        this.formData[key] = value;
      }
    });
  }
}
