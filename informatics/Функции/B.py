def power(a, b):
    y=a**b
    return y
a=input().split()
print(power(float(a[0]),int(a[1])))