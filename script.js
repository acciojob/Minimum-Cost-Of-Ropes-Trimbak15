function connectRopes(ropes) {
  // create a min-heap to store the ropes
  const minHeap = new MinHeap();

  // insert all ropes into the min-heap
  for (let i = 0; i < ropes.length; i++) {
    minHeap.insert(ropes[i]);
  }

  // keep connecting ropes until there is only one rope left
  let cost = 0;
  while (minHeap.size() > 1) {
    // take out the two shortest ropes from the min-heap
    const rope1 = minHeap.extractMin();
    const rope2 = minHeap.extractMin();

    // connect the two ropes and add the cost
    const newRope = rope1 + rope2;
    cost += newRope;

    // insert the new rope into the min-heap
    minHeap.insert(newRope);
  }

  // return the minimum cost to connect all ropes
  return cost;
}

// define a MinHeap class
class MinHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  extractMin() {
    if (this.size() === 0) {
      return null;
    }

    const min = this.heap[0];
    const last = this.heap.pop();
    if (this.size() > 0) {
      this.heap[0] = last;
      this.heapifyDown();
    }
    return min;
  }

  heapifyUp() {
    let index = this.size() - 1;
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex] <= this.heap[index]) {
        break;
      }
      this.swap(parentIndex, index);
      index = parentIndex;
    }
  }

  heapifyDown() {
    let index = 0;
    while (true) {
      const leftIndex = index * 2 + 1;
      const rightIndex = index * 2 + 2;
      let minIndex = index;
      if (leftIndex < this.size() && this.heap[leftIndex] < this.heap[minIndex]) {
        minIndex = leftIndex;
      }
      if (rightIndex < this.size() && this.heap[rightIndex] < this.heap[minIndex]) {
        minIndex = rightIndex;
      }
      if (minIndex === index) {
        break;
      }
      this.swap(minIndex, index);
      index = minIndex;
    }
  }

  swap(i, j) {
    const temp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temp;
  }
}
