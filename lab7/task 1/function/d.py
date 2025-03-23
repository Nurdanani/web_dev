def election(x,y,z):
    if (x+y+z) >= 2 :
        return 1
    else:
        return 0
    
x,y,z = map(int, input().split())
print(election(x,y,z)) 