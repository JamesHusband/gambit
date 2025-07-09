import { createLabelConfigs } from "./createLabelConfigs";

describe("createLabelConfigs", () => {
  it("should create label configs", () => {
    const configs = createLabelConfigs(
      ["a", "b", "c", "d", "e", "f", "g", "h"],
      [1, 2, 3, 4, 5, 6, 7, 8]
    );
    expect(configs).toEqual([
      {
        key: "top",
        labels: ["a", "b", "c", "d", "e", "f", "g", "h"],
        direction: "row",
        className: "col-start-2 row-start-1",
      },
      {
        key: "left",
        labels: [1, 2, 3, 4, 5, 6, 7, 8],
        direction: "col",
        className: "col-start-1 row-start-2",
      },
      {
        key: "right",
        labels: [1, 2, 3, 4, 5, 6, 7, 8],
        direction: "col",
        className: "col-start-3 row-start-2",
      },
      {
        key: "bottom",
        labels: ["a", "b", "c", "d", "e", "f", "g", "h"],
        direction: "row",
        className: "col-start-2 row-start-3",
      },
    ]);
  });
});
