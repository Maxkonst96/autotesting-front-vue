import { test, expect } from "@playwright/test";

test("Добавление нового поста", async ({ page }) => {
  await page.goto("http://localhost:5173"); // Открываем приложение

  await page.fill("#post-title", "Тестовый пост"); // Вводим текст
  await page.click("#add-post"); // Нажимаем кнопку

  await expect(
    page.locator(".post-item", { hasText: "Тестовый пост" })
  ).toBeVisible(); // Проверяем, что пост появился
});
