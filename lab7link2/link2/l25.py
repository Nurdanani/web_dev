def sum67(nums):
    total = 0
    in_range = False
    for num in nums:
        if num == 6:
            in_range = True
        elif num == 7 and in_range:
            in_range = False
        elif not in_range:
            total += num
    return total
