"""Reference solution — Day 27: Combination Sum. Try practice first.
"""

def solve(candidates, target):
    candidates = sorted(candidates)
    result, path = [], []
    def dfs(start, remaining):
        if remaining == 0:
            result.append(path.copy())
            return
        for i in range(start, len(candidates)):
            value = candidates[i]
            if value > remaining:
                break  # sorted, so later choices also too large
            path.append(value)
            dfs(i, remaining - value)  # reuse same index
            path.pop()
    dfs(0, target)
    return result
