import { render } from "@testing-library/svelte";

import FacebookLogin from "./FacebookLogin.svelte";

describe("FacebookLogin Component", () => {
  test("shows proper heading when rendered", () => {
    const { container } = render(FacebookLogin);

    expect(container.firstChild).not.toBe(null);
  });
});
