class Heap {
  #heap = [];

  getHeap() {
    return [...this.#heap];
  }

  #leftChild(index) {
    return index * 2 + 1;
  }

  #rightChild(index) {
    return index * 2 + 2;
  }

  #parent(index) {
    return Math.floor((index - 1) / 2);
  }

  #swape(valueOne, valueTwo) {
    [this.#heap[valueOne], this.#heap[valueTwo]] = [
      this.#heap[valueTwo],
      this.#heap[valueOne],
    ];
  }

  insertMethod(value) {
    this.#heap.push(value);
    let current = this.#heap.length - 1;
    while (
      current > 0 &&
      this.#heap[current] > this.#heap[this.#parent(current)]
    ) {
      this.#swape(current, this.#parent(current));
      current = this.#parent(current);
    }
  }

  removeMethod() {
    if (this.#heap.length === 0) {
      return null;
    } else if (this.#heap.length === 1) {
      this.#heap.pop();
    } else {
      const maxValue = this.#heap[0];
      this.#heap[0] = this.#heap.pop();
      this.#sinkDown(0);

      return maxValue;
    }
  }
}

const HeapFirst = new Heap();
HeapFirst.insertMethod(99);
HeapFirst.insertMethod(72);
HeapFirst.insertMethod(61);
HeapFirst.insertMethod(58);
HeapFirst.insertMethod(100);
HeapFirst.insertMethod(75);
console.log(HeapFirst.getHeap());
