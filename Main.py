from Operations import Operation

while True:
    print('''
          ----------Welcome to the Calculator----------
          What Operation Do you Want to perfome 
          1. ADD 
          2. SUBTRACT 
          3. MULTIPLY 
          4. DIVISION 
          5. Exit 
          ----------A Ali----------'''
        )
    choice = int(input('Enter an Integer: '))
    if choice == 1:
        Operation('Addition')
    elif choice == 2:
       Operation('Subtraction')
    elif choice == 3:
        Operation('Multiplication')
    elif choice == 4:
       Operation('Division')
    elif choice == 5:
        break


