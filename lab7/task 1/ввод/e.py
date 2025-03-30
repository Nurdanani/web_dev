v = int(input())
t = int(input())
p = (v*t)%109
if v>=0:
    print(p)

elif v<0: 
    print(p if p >= 0 else p + 109)