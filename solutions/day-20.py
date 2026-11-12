"""Reference solution — Day 20: Top K Frequent Elements. Try practice first.
"""

from collections import Counter
import heapq

def solve(nums, k):
    frequency = Counter(nums)
    if not (0 <= k <= len(frequency)):
        raise ValueError('k out of range')
    # nlargest uses a heap; values with ties may be chosen arbitrarily.
    return heapq.nlargest(k, frequency, key=frequency.get)
