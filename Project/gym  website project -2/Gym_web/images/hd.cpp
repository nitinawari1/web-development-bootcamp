#include <iostream>
#include <conio.h>
using namespace std;
int main()
{
cout.setf(ios_base::fixed, ios_base::floatfield);
float tree = 3; // int converted to float
int guess = 3.9832; // float converted to int
int debt = 7.2E12; // result not defined in C++
cout << "tree = " << tree << endl;
cout << "guess = " << guess << endl;
cout << "debt = " << debt << endl;
getch();
return 0;
}