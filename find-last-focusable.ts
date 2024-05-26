import { focusableSelectors } from "./constants/focusable-selectors";

/**
 * Finds the last focusable element in the given HTML element.
 *
 * @param htmlElement - HTML element to search in.
 * @returns The last focusable element if any, or null otherwise.
 */
export function findLastFocusable(
  htmlElement: HTMLElement
): HTMLElement | null {
  /**
   * Uses a single querySelectorAll to find all focusable elements and then returns the last one.
   * See `constants/focusable-selectors.ts` for a list of supported selectors.
   */
  const focusables = Array.from(
    htmlElement.querySelectorAll(focusableSelectors.join(", "))
  );
  return focusables[focusables.length - 1] as HTMLElement;
}
