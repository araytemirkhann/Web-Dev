c=input()
a=[]
k=0
a=input().split()
for i in range(len(a)):
    a[i]=int(a[i])
for i in range(len(a)-1):
    if (a[i]>0 and a[i+1]>0) or (a[i]<0 and a[i+1]<0):
        k+=1
        break
if k==1:
    print("YES")
else:
    print("NO")