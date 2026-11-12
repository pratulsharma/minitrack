# Python DSA Interview Cheat Sheet

| Pattern | Signal | Key invariant | Common pitfall |
|---|---|---|---|
| Hash map | pairs / frequencies | previously seen keys | duplicate element reuse |
| Two pointers | sorted or palindrome | discard impossible area | off-by-one |
| Sliding window | contiguous segment | valid window | negatives may break monotonicity |
| Monotonic stack | next greater/smaller | unresolved indices | confusing values with indices |
| Binary search | ordered search space | answer remains inside bounds | wrong midpoint boundary |
| Linked list | rearrange nodes | never lose next pointer | node identity vs values |
| Trees | hierarchy | subtree recursion or BFS depth | cross-subtree BST violations |
| Graphs | connectivity / dependency | visited set / indegree | cycles, edge direction |
| DP | optimal substructure | transition from smaller answers | greedy when invalid |
| Backtracking | enumerate choices | restore state after recursion | aliasing shared path |

## Python-specific interview pitfalls

- `list.pop(0)` takes O(n); `collections.deque.popleft()` is O(1).
- `x in list` is O(n); `x in set` is expected O(1).
- A mutable default argument (e.g. `def f(items=[])`) persists across calls.
- `[[0] * cols] * rows` shares nested row objects. Use a comprehension.
- `path.copy()` is needed when storing mutable backtracking paths.
- Slicing (`arr[:]`) and sorting (`sorted`) allocate memory; discuss it.
- Recursive DFS can exceed Python's recursion limit on deep graphs; iterative stacks can be safer.
- `heapq` implements a min-heap; push negatives for a max-heap when appropriate.
- Name the invariant aloud; explain the edge cases before coding.
