class BankAccount:

    all_accounts = []

    def __init__(self,  int_rate, balance):
        self.int_rate = int_rate
        self.balance = balance
        BankAccount.all_accounts.append(self)

    def deposit(self, amount):
        self.balance = self.balance + amount
        return self

    def withdraw(self, amount):
        self.balance = self.balance - amount
        return self
    
    def display_account_info(self):
        print(f"current balance = {self.balance} and current interest rate = {self.int_rate}")
        return self

    def yield_interest(self):
        self.balance = self.balance + (self.balance * self.int_rate)
        return self

    @classmethod
    def list_all_accounts(cls):
        print(cls.all_accounts)
        for one_account in cls.all_accounts:
            print(one_account.display_account_info())


account1 = BankAccount(.05, 100)
account2 = BankAccount(.01, 200)

account1.deposit(50).deposit(10).deposit(5).yield_interest().display_account_info()
account2.deposit(300).deposit(600).withdraw(100).withdraw(200).withdraw(300).withdraw(400).yield_interest().display_account_info()
BankAccount.list_all_accounts()

