a = input()
b = int(input())
k=0
for i in range(len(a)):
    if int(a)%10==b:
            k+=1
    a=int(a)/10
print(k)