#include <iostream>
using namespace std;

class Rectangle {
private:
    double width, height;

public:
    void setDimensions(double w, double h) {
        if (w > 0 && h > 0) {
            width = w;
            height = h;
        } else {
            cout << "Invalid dimensions!" << endl;
        }
    }

    double getArea() {
        return width * height;
    }

    double getPerimeter() {
        return 2 * (width + height);
    }
};

int main() {
    Rectangle r;

    r.setDimensions(5, 3);

    cout << "Area = " << r.getArea() << endl;
    cout << "Perimeter = " << r.getPerimeter();

    return 0;
}