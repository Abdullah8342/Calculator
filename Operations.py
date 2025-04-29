from Calculator import Calculator as Cal

def Operation(Title):
    print(f"\n-----{Title}-----\n")
    try:
        number_one = int(input('Enter Number One: '))
        number_two = int(input('Enter Number Two: '))
    except:
        print("Please enter valid integers.")
        return  # Exit the function if input is invalid
    cal = Cal(number_one,number_two)
    if Title == 'Addition':
        print(f"Result: {cal.add()}")
    elif Title == 'Subtraction':
        print(f"Result: {cal.subtract()}")
    elif Title == 'Multiplication':
        print(f"Result: {cal.multiply()}")
    elif Title == 'Division':
        print(f"Result: {cal.division()}")
    else:
        print('Operation Not Found')
