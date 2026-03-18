#include <iostream>
#include <string>
#include <cctype>
using namespace std;

class StringUtils {
public:
    static bool isPalindrome(string s) {
        int left = 0, right = s.length() - 1;

        while (left < right) {
            if (tolower(s[left]) != tolower(s[right])) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
};

int main() {
    cout << StringUtils::isPalindrome("radar") << endl; // 1 (true)
    return 0;
}