
/** Returns a random item from an array */
export function choice(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }
  
  /** Returns a random integer between 0 and max (exclusive) */
  export function randInt(max) {
    return Math.floor(Math.random() * max);
  }
  