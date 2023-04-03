
var hasCycle = function (head) {
  if (!head) return false;
  const nodeSet = new Set();

  let node = head;

  while (node) {
    node = node.next;

    if (nodeSet.has(node)) return true;

    nodeSet.add(node);
  }

  return false;
};

// This is a function that takes a singly-linked list as an input and returns a boolean value indicating whether the linked list contains a cycle or not. 

// The function first checks if the input `head` is null or undefined. If it is, the function immediately returns false, indicating that there is no cycle in the linked list.

// If `head` is not null or undefined, the function creates an empty Set object called `nodeSet` to keep track of the nodes that have been visited.

// The function then sets a variable `node` to the `head` of the linked list and enters a while loop that will continue as long as `node` is not null or undefined.

// Inside the while loop, the function first moves `node` to the next node in the linked list by setting `node` to `node.next`. If `node` is null or undefined, the loop will exit.

// The function then checks if `node` is already in the `nodeSet` using the `has()` method of the Set object. If it is, this means that `node` has already been visited and there is a cycle in the linked list, so the function returns true.

// If `node` is not in the `nodeSet`, the function adds it to the `nodeSet` using the `add()` method of the Set object.

// Once the while loop has finished, the function returns false, indicating that there is no cycle in the linked list.

// Overall, this function uses a Set to keep track of visited nodes and checks for cycles by comparing each node to the Set.