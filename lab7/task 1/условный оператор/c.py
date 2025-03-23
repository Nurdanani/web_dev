a = int(input())
b = int(input())
s = int(str(a)[::-1])  
if (s == a and b == 1 ):  
    print("YES")
elif (s != a and b != 1):
    print("YES")
else:  
    print("NO")
