def XOR(a, b):
    k=0
    if a==1:
        k+=1
    if b==1:
        k+=1
    if k==2 or k==0:
        return 0
    if k==1:
        return 1
a=input().split()
print(XOR(int(a[0]),int(a[1])))