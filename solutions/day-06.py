"""Reference solution — Day 6: Two Sum II (Sorted). Try practice first.
"""

def solve(nums, target):
    left, right = 0, len(nums) - 1
    while left < right:
        total = nums[left] + nums[right]
        if total == target:
            return [left, right]
        if total < target:  # raise sum
            left += 1
        else:  # lower sum
            right -= 1
    return []
