a = input()
k=0
for i in range(len(a)):
    b=int(a)%10
    k+=b
    a=int(a)/10
print(k)