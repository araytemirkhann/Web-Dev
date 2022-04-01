c=input()
a=[]
a=input().split()
for i in range(int(len(a)/2)):
    k=a[i]
    a[i]=a[len(a)-i-1]
    a[len(a)-i-1]=k
for i in range(len(a)):
    print(a[i])
    
