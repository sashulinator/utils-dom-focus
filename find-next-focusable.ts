import { focusableSelectors } from "./constants/focusable-selectors";

/**
 * Finds the next focusable element in the given HTML element.
 * @param htmlElement - HTML element to search in.
 * @returns The next focusable element if any, or null otherwise.
 */
export function findNextFocusable(
  htmlElement: HTMLElement
): HTMLElement | null {
  /**
   * Uses a querySelectorAll to find all focusable elements and then returns the one at the index plus one.
   * See `constants/focusable-selectors.ts` for a list of supported selectors.
   */
  const all = htmlElement.querySelectorAll(focusableSelectors.join(", "));
  var index = Array.prototype.indexOf.call(all, htmlElement);
  return all.item(index + 1) as HTMLElement;
}
