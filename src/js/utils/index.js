import '../vendors/jquery.min';

/**
 * Function to append list to parent container
 * @param {JQuery<HTMLElement>} parent The parent container of dropdown as Jquery Object
 * @param {Array<HTMLElement>} list List of HTML Elements to be appended
 */
export const listAppend = (parent, list) => {
  parent.each((_, el) => $(el).append(list));
};
