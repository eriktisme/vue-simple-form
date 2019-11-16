type Errors = {
  [key: string]: any;
};

export default class ErrorBag {
  [key: string]: any;

  private errors: Errors;

  /**
   * Create a new error bag instance.
   *
   * @param {Object} errors
   */
  constructor(errors: Object = {}) {
    this.errors = errors;
  }

  /**
   * Fill the errors messages.
   *
   * @param {Object|string} field
   * @param {Array<string>} messages
   */
  public fill(field: Object | string, messages?: Array<string>): void {
    if (typeof field === "object") {
      this.errors = field;

      return;
    }

    this.fill({
      ...this.errors,
      [field]: messages
    });
  }

  /**
   * Determine if there are any errors.
   */
  public any(): boolean {
    return Object.keys(this.errors).length > 0;
  }

  /**
   * Determine if the given field has an error.
   */
  public has(field: string): boolean {
    return Object.prototype.hasOwnProperty.call(this.errors, field);
  }

  /**
   * Get the first error message for the given field.
   */
  public get(field: string): string | undefined {
    if (this.has(field)) {
      return this.errors[field][0];
    }
  }

  /**
   * Get all the error message for the given field.
   */
  public getAll(field: string): Array<string> {
    if (this.has(field)) {
      return this.errors[field];
    }

    return [];
  }

  /**
   * Get all of the error messages.
   */
  public all(): Errors {
    return this.errors;
  }

  /**
   * Clear the errors for a field.
   */
  public forget(field: string): void {
    if (this.errors[field]) {
      delete this.errors[field];
    }
  }

  /**
   * Clear all the errors.
   */
  public clear(): void {
    this.errors = {};
  }
}
