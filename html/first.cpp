// reading a text file
#include <iostream>
#include <conio.h>
#include <fstream>
#include <string>
using namespace std;
int main () {
string line;
ifstream myfile ("example.txt");
if (myfile.is_open())
{
while ( getline (myfile,line) )
{
cout << line << '\n';
} myfile.close();
}
else cout << "Unable to open file";
getch();
return 0;
}