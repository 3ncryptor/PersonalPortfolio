def add_two_numbers(num1, num2):
    num1=a 
    num2=b
    # carry=0
    # summation=0
    while num1>0 and num2>0:
        summation=0
        carry=0
        ans=0.0
        c=0
        digit_1=num1%10
        digit_2=num2%10

        summation=digit_1+digit_2+carry
        if summation>=10:
            carry=summation//10
            ones_digit=summation%10
        else:
            ones_digit=summation
        num1 //= 10
        num2 //= 10
        c+=1

        ans=ans*(0.1)+ones_digit
        return ans*(10**c)

num1=int(input())
num2=int(input())
print (add_two_numbers(num1, num2))