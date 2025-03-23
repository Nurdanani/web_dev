a = set(map(int, input().split()))
n = int(input())

is_strict_superset = all(a > set(map(int, input().split())) for _ in range(n))

print(is_strict_superset)
