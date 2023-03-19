/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */
export function cookingStatus(time) {
	if (time === 0) return 'Lasagna is done.'
	if (time === undefined) return 'You forgot to set the timer.'
	return 'Not done, please wait.'
}

/**
 * @param {string[]} layers
 * @param {number} timePerLayer
 */
export function preparationTime(layers, timePerLayer) {
	return layers.length * timePerLayer
}
