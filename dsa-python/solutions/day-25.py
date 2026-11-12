"""Reference solution — Day 25: Coin Change. Try practice first.
"""

def solve(coins, amount):
    impossible = amount + 1
    dp = [0] + [impossible] * amount
    for total in range(1, amount + 1):
        for coin in coins:
            if coin > 0 and coin <= total:
                dp[total] = min(dp[total], dp[total - coin] + 1)
    return -1 if dp[amount] == impossible else dp[amount]
