"""Reference solution — Day 26: Subsets. Try practice first.
"""

def solve(nums):
    result = []
    path = []
    def dfs(i):
        if i == len(nums):
            result.append(path.copy())  # snapshot, not alias
            return
        dfs(i + 1)  # exclude
        path.append(nums[i])
        dfs(i + 1)  # include
        path.pop()  # restore state for caller
    dfs(0)
    return result
