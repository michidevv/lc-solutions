// https://leetcode.com/problems/lru-cache/
// ES6 Map approach
/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.map = new Map();
  this.capacity = capacity;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (!this.map.has(key)) return -1;
  const value = this.map.get(key);
  this.map.delete(key);
  this.map.set(key, value);

  return value;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  this.map.delete(key);
  this.map.set(key, value);
  if (this.map.size > this.capacity) {
    // Appears to be NOT O(1)
    // Explore alternative, doubly linked list approach
    const firstItem = this.map.keys().next().value;
    this.map.delete(firstItem);
  }
};
