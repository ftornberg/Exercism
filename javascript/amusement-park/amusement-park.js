/// <reference path="./global.d.ts" />
// @ts-check

class Visitor {
	/**
	 * @param {string} name
	 * @param {number} age
	 * @param {string | null} ticketId
	 */
	constructor(name, age, ticketId) {
		this.name = name
		this.age = age
		this.ticketId = ticketId
	}
}

/**
 * Creates a new visitor.
 *
 * @param {string} name
 * @param {number} age
 * @param {string} ticketId
 * @returns {Visitor} the visitor that was created
 */
export function createVisitor(name, age, ticketId) {
	const visitor = new Visitor(name, age, ticketId)
	return visitor
}

/**
 * Revokes a ticket for a visitor.
 *
 * @param {Visitor} visitor the visitor with an active ticket
 * @returns {Visitor} the visitor without a ticket
 */
export function revokeTicket(visitor) {
	visitor.ticketId = null
	return visitor
}

/**
 * Determines the status a ticket has in the ticket tracking object.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */
export function ticketStatus(tickets, ticketId) {
	if (tickets[ticketId] === undefined) return 'unknown ticket id'
	else if (tickets[ticketId] === null) return 'not sold'
	else return `sold to ${tickets[ticketId]}`
}

/**
 * Determines the status a ticket has in the ticket tracking object
 * and returns a simplified status message.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */
export function simpleTicketStatus(tickets, ticketId) {
	if (tickets[ticketId] === undefined || tickets[ticketId] === null) return 'invalid ticket !!!'
	else return `${tickets[ticketId]}`
}

/**
 * Determines the version of the GTC that was signed by the visitor.
 *
 * @param {VisitorWithGtc} visitor
 * @returns {string | undefined} version
 */
export function gtcVersion(visitor) {
	if (visitor.gtc === undefined) return undefined
	else return visitor.gtc.version
}
