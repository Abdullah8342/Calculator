''' CalCulator '''

class Parent:
    def __init__(self,number_one,number_two):
        self.number_one = number_one
        self.number_two = number_two


class Calculator(Parent):
    def __init__(self, number_one, number_two):
        super().__init__(number_one, number_two)
    def add(self):
        return self.number_one + self.number_two
    def subtract(self):
        return self.number_one - self.number_two
    def multiply(self):
        return self.number_one * self.number_two
    def division(self):
        if self.number_two == 0:
            return "Error: Division by zero is not allowed."
        return self.number_one / self.number_two
