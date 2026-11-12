"""Reference solution — Day 14: Linked List Cycle. Try practice first.
"""

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def solve(head):
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow is fast:  # identity, not matching values
            return True
    return False
