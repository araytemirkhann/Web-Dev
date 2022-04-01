def mini(a, b, c, d):
    k=min(a,b)
    l=min(c,d)
    y=min(k,l)
    return y

a=input().split()
print(mini(int(a[0]),int(a[1]),int(a[2]),int(a[3])))