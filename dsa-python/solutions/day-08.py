"""Reference solution — Day 8: Minimum Size Subarray Sum. Try practice first.
"""

def solve(target, nums):
    left = 0
    running = 0
    best = float('inf')
    for right, value in enumerate(nums):
        running += value
        while running >= target:
            best = min(best, right - left + 1)
            running -= nums[left]  # shrink while valid
            left += 1
    return 0 if best == float('inf') else best
