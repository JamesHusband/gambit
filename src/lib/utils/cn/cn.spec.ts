import { cn } from "./cn";

describe("cn", () => {
  it("should return merged class names", () => {
    expect(cn("class", "class2")).toBe("class class2");
  });
});
