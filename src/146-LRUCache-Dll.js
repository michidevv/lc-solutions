// https://leetcode.com/problems/lru-cache/
// Dll approach.
// Non-working attempt.
/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.size = 0;
  this.cache = {};
  this.head = null;
  this.tail = null;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  const node = this.cache[key];
  if (!node) {
    return -1;
  }

  if (this.head !== node) {
    this.put(key, node.value);
  }

  return node.value;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  const node = this.cache[key];
  if (node) {
    detach(node);
    this.size -= 1;
  } else if (this.size === this.capacity) {
    delete this.cache[this.tail.key];
    detach(this.tail);
    this.size -= 1;
  }

  if (!this.head) {
    const newNode = makeNode(key, value);
    this.head = newNode;
    this.tail = newNode;
  } else {
    const newNode = makeNode(key, value, this.head);
    this.head.prev = newNode;
    this.head = newNode;
  }

  this.cache[key] = this.head;
  this.size += 1;
};

function detach(node) {
  if (node.prev) {
    node.prev.next = node.next;
  } else {
    this.head = node.next;
  }

  if (node.next) {
    node.next.prev = node.prev;
  } else {
    this.tail = node.prev;
  }
}

function makeNode(key, value, next = null, prev = null) {
  return {
    key,
    value,
    // [head]<-prev-[current]-next->[tail]
    next,
    prev,
  };
}

// const lRUCache = new LRUCache(2);
// lRUCache.put(1, 1); // cache is {1=1}
// lRUCache.put(2, 2); // cache is {1=1, 2=2}
// console.log(lRUCache.get(1)); // return 1
// lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
// console.log(lRUCache.get(2)); // returns -1 (not found)
