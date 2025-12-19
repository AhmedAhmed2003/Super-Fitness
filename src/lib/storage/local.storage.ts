/**
 * Provides a set of utility methods for interacting with the browser's localStorage.
 * The 'local' object includes methods for storing, retrieving, and managing data
 * within local storage, ensuring values are handled with JSON serialization.
 * All methods are immutable due to Object.freeze.
 */
export const local = Object.freeze({
    /**
     * The number of key/value pairs currently present in the local storage.
     */
    length: localStorage.length,

    /**
     * Retrieves the parsed value associated with the given key from local storage.
     * @param key - The key to retrieve the value for.
     * @returns The parsed value, or null if the key does not exist.
     */
    get(key: string) {
        return JSON.parse(localStorage.getItem(key) as string);
    },

    /**
     * Stores a key/value pair in local storage. The value is stringified before storage.
     * @param key - The key to set.
     * @param value - The value to store (will be stringified).
     */
    set(key: string, value: unknown) {
        return localStorage.setItem(key, JSON.stringify(value));
    },

    /**
     * Removes the specified key and its associated value from local storage.
     * @param key - The key to remove.
     */
    delete(key: string) {
        return localStorage.removeItem(key);
    },

    /**
     * Clears all key/value pairs from local storage.
     */
    drop() {
        return localStorage.clear();
    },

    /**
     * Returns the name of the key at the given position in local storage.
     * @param index - The index of the key to retrieve.
     * @returns The name of the key, or null if the index is out of bounds.
     */
    key(index: number) {
        return localStorage.key(index);
    },
});
