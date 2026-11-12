"""Reference solution — Day 3: Contains Duplicate. Try practice first.
"""

def solve(nums):
    seen = set()
    for value in nums:
        if value in seen:
            return True
        seen.add(value)
    return False
