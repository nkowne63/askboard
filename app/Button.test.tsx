import { composeStories } from "@storybook/react"
import * as stories from "./Button.stories"
import { render } from "@testing-library/react"

const { Click } = composeStories(stories)

describe("Button", () => {
  test("Click", async () => {
    const { container } = render(<Click />)
    await Click.play({ canvasElement: container })
  })
})