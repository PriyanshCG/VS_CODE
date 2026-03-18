#include <iostream>
#include <string>
using namespace std;

class Employee {
private:
    string name;
    static int totalEmployees;

public:
    Employee(string n) {
        name = n;
        totalEmployees++;
    }
    
    static int getTotal() {
        return totalEmployees;
    }
};

int Employee::totalEmployees = 0;

int main() {
    Employee e1("Alice");
    Employee e2("Bob");
    Employee e3("Charlie");
    Employee e4("Diana");
    
    cout << "total=" << Employee::getTotal() << endl;  // total=4
    return 0;
}
