/**
 * Масив маршрутів.
 * Ці маршрути не потребують автентифікації
 * @type {string[]}
 */
export const publicRoutes = ["/", "/auth/new-verification"];

/**
 * Масив маршрутів, які використовуються для автентифікації
 * Ці маршрути будуть перенаправляти користувачів, що увійшли
 * до системи, на /settings
 * @type {string[]}
 */
export const authRoutes = [
  "/auth/login",
  "/auth/register",
  "/auth/error",
  "/auth/reset",
  "/auth/new-password",
];

/**
 * Префікс для маршрутів аутентифікації API.
 * Маршрути, що починаються з цього префікса, використовуються для автентифікації API
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * Шлях перенаправлення за замовчуванням після входу в систему
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings";
