"""Reference solution — Day 1: Two Sum. Try practice first.
"""

def solve(nums, target):
    seen = {}  # number -> its earliest index
    for i, value in enumerate(nums):
        complement = target - value
        if complement in seen:  # use an earlier, distinct element
            return [seen[complement], i]
        seen[value] = i
    return []  # no matching pair
