"""Reference solution — Day 24: House Robber. Try practice first.
"""

def solve(nums):
    two_back = 0
    previous = 0
    for money in nums:
        current = max(previous, two_back + money)
        two_back, previous = previous, current
    return previous
