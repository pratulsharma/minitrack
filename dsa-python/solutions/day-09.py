"""Reference solution — Day 9: Valid Parentheses. Try practice first.
"""

def solve(s):
    pairs = {')':'(', ']':'[', '}':'{'}
    opening = set(pairs.values())
    stack = []
    for ch in s:
        if ch in opening:
            stack.append(ch)
        elif ch in pairs:
            if not stack or stack.pop() != pairs[ch]:
                return False
        else:
            return False  # input contract: brackets only
    return not stack
