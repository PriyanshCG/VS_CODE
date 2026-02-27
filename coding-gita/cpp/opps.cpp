#include <iostream>
#include <string>
using namespace std;

class Parent {
public:
    string name;

    Parent(string name) {
        cout << "Parent constructor called" << endl;
        this->name = name;
    }

    void display() {
        cout << "Parent name: " << name << endl;
    }
};

class Children : public Parent {
public:
    string name1;

    Children(string name, string name1) : Parent(name) {
        cout << "Children constructor called" << endl;
        this->name1 = name1;
    }

    void display() {
        cout << "Children name: " << name1 << endl;
    }
};

int main() {

    Children b1("Parent", "Children");

    b1.display();
    b1.Parent::display();

    return 0;
}