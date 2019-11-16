import ErrorBag from "@/ErrorBag";

let errorBag: ErrorBag;

beforeEach(() => {
  errorBag = new ErrorBag();
});

describe("ErrorBag.ts", () => {
  it("can fill the error bag using an object", () => {
    expect(errorBag.all()).toEqual({});

    errorBag.fill({ name: ["field is required"] });

    expect(errorBag.all()).toEqual({ name: ["field is required"] });
  });

  it("can fill the error bag using using the field", () => {
    expect(errorBag.all()).toEqual({});

    errorBag.fill("name", ["field is required"]);
    errorBag.fill("email", ["not a valid e-mail address"]);

    expect(errorBag.all()).toEqual({
      name: ["field is required"],
      email: ["not a valid e-mail address"]
    });
  });

  it("can get the first error message for a field", () => {
    errorBag.fill({
      email: ["field is required", "not a valid e-mail address"]
    });

    expect(errorBag.get("email")).toEqual("field is required");
  });

  it("can get all the error messages for a field", () => {
    errorBag.fill({
      email: ["field is required", "not a valid e-mail address"]
    });

    expect(errorBag.getAll("email")).toEqual([
      "field is required",
      "not a valid e-mail address"
    ]);
  });

  it("can forget error messages for a field", () => {
    errorBag = new ErrorBag({
      email: ["field is required", "not a valid e-mail address"]
    });

    expect(errorBag.has("email")).toBeTruthy();

    errorBag.forget("email");

    expect(errorBag.has("email")).toBeFalsy();
  });

  it("can clear all errors", () => {
    errorBag.fill({
      name: ["field is required"],
      email: ["field is required"]
    });

    expect(errorBag.any()).toBeTruthy();

    errorBag.clear();

    expect(errorBag.any()).toBeFalsy();
  });
});
