/**
 * Represents a Developer with first name and last name.
 */
export class Developer {
    #firstName
    #lastName

    /**
     * Creates a new Developer instance.
     * Trims whitespace from first and last names. Defaults to empty strings if not provided.
     * @param {string} firstName - The first name of the developer.
     * @param {string} lastName - The last name of the developer.
     */
    constructor(firstName, lastName) {
        this.#firstName = firstName?.trim() || "";
        this.#lastName = lastName?.trim() || "";
    }

    /**
     * Gets the first name of the developer.
     * @returns {string} The first name.
     */
    get firstName() {
        return this.#firstName;
    }

    /**
     * Gets the last name of the developer.
     * @returns {string} The last name.
     */
    get lastName() {
        return this.#lastName;
    }

    /**
     * Gets the full name of the developer.
     * If either first or last name is missing, returns 'Unknown'.
     * @returns {string} The full name or 'Unknown'.
     */
    get fullName() {
        return this.#firstName && this.#lastName
        ? `${this.#firstName} ${this.#lastName}` 
            : 'Unknown';
    }
}