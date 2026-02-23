#include <iostream>
#include <fstream>
#include <string>
using namespace std;

int main() {
    fstream file("example.txt", ios::out | ios::app); 

    if (!file) {
        cerr << "Error opening file!" << endl;
        return 1;
    }

    file << "This is a line of text." << endl;
    file << "This is another line of text." << endl;
    file << "This is yet another line of text." << endl;

    cout << "File is open" << endl;

    string input;
    cout << "Enter text to write to file: ";
    getline(cin, input);
    file << input << endl;

    file.close();
    cout << "Text written successfully!" << endl;

    return 0;
}