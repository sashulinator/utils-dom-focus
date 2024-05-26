import { focusableSelectors } from "./constants/focusable-selectors";

/**
 * Finds the next focusable sibling of the given HTML element.
 * @param htmlElement - HTML element to search in.
 * @returns The next focusable sibling element if any, or null otherwise.
 */
export function findNextFocusableSibling(
  htmlElement: HTMLElement
): HTMLElement | null {
  /**
   * We use a querySelectorAll to find all focusable elements and then filter them
   * to only include elements that are not children of the given element and
   * are not the given element itself. This is to avoid returning the
   * element itself if it is focusable.
   */
  const all = document.querySelectorAll(focusableSelectors.join(", "));
  const filtered = Array.prototype.filter.call(
    all,
    (el) => !htmlElement.contains(el) || htmlElement === el
  );

  /**
   * We find the index of the given element in the filtered array. If the element
   * is the last element in the array, we return the first element in the array.
   * Otherwise, we return the element at the index plus one.
   */
  const index = filtered.indexOf(htmlElement);
  return filtered.at(
    index === filtered.length - 1 ? 0 : index + 1
  ) as HTMLElement;
}