// @ts-check
import { test, expect } from '@playwright/test';

test.describe("Home Page", () => {
  test("should have correct metadata and elements", async ({page}) => {
    await page.goto('http://localhost:5173/');

    await expect(page).toHaveTitle("Rogier -- Portfolio");
    await expect(
      page.getByRole("heading", {
        name: "Shaping",
      })
    ).toBeVisible();
  })
});


