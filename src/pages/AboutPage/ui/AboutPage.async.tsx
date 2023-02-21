import { lazy } from "react";

export const AboutPageAsync = lazy(() => new Promise((resolve) => {
  // @ts-ignore
  // Так делать не надо. Сделал чтобы увидеть fallback у Suspense во время загрузки
  setTimeout(() => resolve(import('./AboutPage')), 1500)
}))
