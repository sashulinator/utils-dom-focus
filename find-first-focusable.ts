import { focusableSelectors } from "./constants/focusable-selectors";

/**
 * Finds the first focusable element in the given HTML element.
 * @param htmlElement - HTML element to search in.
 * @returns The first focusable element if any, or null otherwise.
 */
export function findFirstFocusable(
  htmlElement: HTMLElement
): HTMLElement | null {
  /**
   * Uses a single querySelector to find the first focusable element.
   * See `constants/focusable-selectors.ts` for a list of supported selectors.
   */
  return htmlElement.querySelector(focusableSelectors.join(", "));
}
