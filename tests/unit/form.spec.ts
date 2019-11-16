import Form from "@/Form";
import ErrorBag from "@/ErrorBag";

let form: Form;

beforeEach(() => {
  form = new Form({
    name: "John Doe"
  });
});

describe("Form.ts", () => {
  it("instantiates the properties", () => {
    expect(form.busy).toBeFalsy();
    expect(form.successful).toBeFalsy();
    expect(form.errors).toBeInstanceOf(ErrorBag);
  });

  it("exposes the passed fields as properties", () => {
    expect(form).toHaveProperty("name");
    expect(form.name).toEqual("John Doe");
  });

  it("can get the form data", () => {
    expect(form.data()).toEqual({ name: "John Doe" });
  });

  it("can fill a property with data", () => {
    form.name = "John";

    expect(form.name).toEqual("John");
    expect(form.data()).toEqual({ name: "John" });
  });

  it("can start processing the form", () => {
    form.start();

    expect(form.busy).toBeTruthy();
    expect(form.successful).toBeFalsy();
  });

  it("can finish processing the form with success", () => {
    form.finished();

    expect(form.busy).toBeFalsy();
    expect(form.successful).toBeTruthy();
  });

  it("can finish processing the form without success", () => {
    form.failed({ name: ["field is required"] });

    expect(form.busy).toBeFalsy();
    expect(form.successful).toBeFalsy();
  });
});
