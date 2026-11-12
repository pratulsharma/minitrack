"""Reference solution — Day 13: Reverse Linked List. Try practice first.
"""

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def solve(head):
    previous = None
    current = head
    while current:
        following = current.next  # save rest before changing link
        current.next = previous
        previous = current
        current = following
    return previous
