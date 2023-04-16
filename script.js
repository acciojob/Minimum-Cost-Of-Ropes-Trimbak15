function minimumCostToConnectRopes(ropes) {
  // Initialize a priority queue to keep track of the smallest ropes
  const pq = new MinPriorityQueue();

  // Add all ropes to the priority queue
  ropes.forEach((rope) => {
    pq.enqueue(rope);
  });

  // Keep track of the total cost
  let totalCost = 0;

  // Merge ropes until only one rope is left in the priority queue
  while (pq.size() > 1) {
    // Dequeue the two smallest ropes
    const smallest = pq.dequeue().element;
    const secondSmallest = pq.dequeue().element;

    // Merge the two ropes and add the cost to the total
    const mergedRope = smallest + secondSmallest;
    totalCost += mergedRope;

    // Enqueue the merged rope back into the priority queue
    pq.enqueue(mergedRope);
  }

  return totalCost;
}

