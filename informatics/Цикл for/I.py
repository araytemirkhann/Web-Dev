import math
a = int(input())
k=0
for i in range(1,a):
    if a%i==0:
        k+=2

if math.sqrt(a)%1==0:
    print(k-1)
else:
    print(k)
    