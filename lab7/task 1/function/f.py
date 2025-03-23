def power(a,n):
    if n==0:
        return 1
    if n<0:
        return 1/power(a, -n)
    if n%2==0:
        b = power(a, n//2)
        return b*b
    else:
        return a * power(a,n -1)
a, n = map(float, input().split())
n = int(n)
print(power(a,n))