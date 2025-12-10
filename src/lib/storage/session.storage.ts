/**
 * Provides a set of utility methods for interacting with the browser's sessionStorage.
 * The 'session' object includes methods for storing, retrieving, and managing data
 * within session storage, ensuring values are handled with JSON serialization.
 * All methods are immutable due to Object.freeze.
 */
export const session = Object.freeze({
    /**
     * The number of key/value pairs currently present in the session storage.
     */
    length: sessionStorage.length,

    /**
     * Retrieves the parsed value associated with the given key from session storage.
     * @param key - The key to retrieve the value for.
     * @returns The parsed value, or null if the key does not exist.
     */
    get(key: string) {
        return JSON.parse(sessionStorage.getItem(key) as string);
    },

    /**
     * Stores a key/value pair in session storage. The value is stringified before storage.
     * @param key - The key to set.
     * @param value - The value to store (will be stringified).
     */
    set(key: string, value: unknown) {
        return sessionStorage.setItem(key, JSON.stringify(value));
    },

    /**
     * Removes the specified key and its associated value from session storage.
     * @param key - The key to remove.
     */
    delete(key: string) {
        return sessionStorage.removeItem(key);
    },

    /**
     * Clears all key/value pairs from session storage.
     */
    drop() {
        return sessionStorage.clear();
    },

    /**
     * Returns the name of the key at the given position in session storage.
     * @param index - The index of the key to retrieve.
     * @returns The name of the key, or null if the index is out of bounds.
     */
    key(index: number) {
        return sessionStorage.key(index);
    },
});
