a = input()
m=10
k=1
d=len(a)
for i in range(d):
    k=(10*k+int(a)%10)%m
    a=int(a)/10
    m=10*m
print(k)