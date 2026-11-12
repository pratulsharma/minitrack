"""Reference solution — Day 4: Best Time to Buy and Sell Stock. Try practice first.
"""

def solve(prices):
    minimum = float('inf')
    best = 0
    for price in prices:
        best = max(best, price - minimum)
        minimum = min(minimum, price)
    return best
