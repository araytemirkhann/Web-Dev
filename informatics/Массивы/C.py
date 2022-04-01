a=[]
c=input()
k=0
a=input().split()
for i in range(len(a)):
    if int(a[i])>0:
        k+=1
print(k)