def power(a,n):
    res=1
    while n>0:
        if n%2==1:
            res *=a
        a *= a
        n//=2
    return res
        
a,n = map(int, input().split())
n = int(n)
print(power(a,n))