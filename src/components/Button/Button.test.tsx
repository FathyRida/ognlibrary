import React from "react";
import { render } from "@testing-library/react";

import Button from "./OgnButton";

describe("Button", () => {
  test("renders the Button component", () => {
    render(<Button label="Orange Guinee React Js UI FrameWork" />);
  });
});