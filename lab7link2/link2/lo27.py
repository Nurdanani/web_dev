def make_chocolate(small, big, goal):
    max_big_bars = goal // 5
    big_bars_to_use = min(max_big_bars, big)
    remaining_goal = goal - (big_bars_to_use * 5)
    
    if remaining_goal <= small:
        return remaining_goal
    
    return -1