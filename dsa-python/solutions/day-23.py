"""Reference solution — Day 23: Climbing Stairs. Try practice first.
"""

def solve(n):
    if n < 0:
        raise ValueError('n must be nonnegative')
    a, b = 1, 1  # ways for 0 steps and 1 step
    for _ in range(2, n + 1):
        a, b = b, a + b
    return b
