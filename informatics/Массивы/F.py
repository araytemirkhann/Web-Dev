c=input()
a=[]
k=0
a=input().split()
for i in range(len(a)):
    a[i]=int(a[i])
for i in range(1,len(a)-1):
    if a[i]>a[i-1] and a[i]>a[i+1]:
        k=k+1
print(k)