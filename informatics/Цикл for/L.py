c=int(input())
m=0
l=1
while(c>0):
    k=c%10
    m=m+l*k
    c=int(c/10)
    l=l*2
print(m)
    