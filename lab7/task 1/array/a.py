n = int(input())
arr = []
for num in input().split():
    arr.append(int(num))
for i in range(0,n ,2):
    print(arr[i], end=' ')