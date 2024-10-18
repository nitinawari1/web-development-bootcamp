#include <iostream>
#include <conio.h>
using namespace std;
class Box {
public:
Box() {
cout << "Constructor called!" <<endl;
} ~
Box() {
cout << "Destructor called!" <<endl;
}
};
int main() {
Box* myBoxArray = new Box[4];
delete [] myBoxArray; // Delete array
getch();
return 0;
}