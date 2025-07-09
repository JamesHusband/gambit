import { render } from "@testing-library/react";
import { BoardLabels } from "./BoardLabels";

jest.mock("../../../utils", () => ({
  createLabelConfigs: () => [
    {
      key: "top",
      labels: ["a", "b", "c", "d", "e", "f", "g", "h"],
      direction: "row",
    },
    {
      key: "left",
      labels: [1, 2, 3, 4, 5, 6, 7, 8],
      direction: "col",
    },
    {
      key: "right",
      labels: [1, 2, 3, 4, 5, 6, 7, 8],
      direction: "col",
    },
    {
      key: "bottom",
      labels: ["a", "b", "c", "d", "e", "f", "g", "h"],
      direction: "row",
    },
  ],
}));

jest.mock("./BoardLabel", () => ({
  BoardLabel: jest.fn(() => <div data-testid="board-label"></div>),
}));

describe("BoardLabels", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render board labels", () => {
    const { getAllByTestId } = render(
      <BoardLabels
        files={["a", "b", "c", "d", "e", "f", "g", "h"]}
        ranks={[1, 2, 3, 4, 5, 6, 7, 8]}
      />
    );

    const labels = getAllByTestId("board-label");
    expect(labels).toHaveLength(4);
  });
});
