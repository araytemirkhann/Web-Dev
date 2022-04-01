a=[]
c=input()
k=0
a=input().split()
for i in range(len(a)-1):
        if int(a[i])<int(a[i+1]):
            k+=1
print(k)