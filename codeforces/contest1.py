n=int(input())
count=0
while n>0:
    a,b,c=map(int,input().split())
    if a+b+c>=2:
        count+=1
    n-=1
print(count)