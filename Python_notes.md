A. Udacity
- case sensitive
- mod = > returns the remainder of a division
- ** exponentiation
- // division with round down
- % operator returns the remainder of the division operation

3. floats and integers

4. you can use ''' the same way as "



B. Sets:
 create a set = {1, 2, 3, 4}
- used to create lists of unique elements

1. don't allow  duplicates

2. can be mixed sets
{1, 5, "hello"}

3. can't create an empty set - > it creates a dictionary
ca sa creezi un empty set :  empty_set = set()

4. can convert list to set 
list = set(list)

5. nu au indexes 
6. accesarea elementelor se pot accesa elem
 - 6.1 for loops
for email in my_set:
print(email)

6.2 "in"  operator   -  "emailname"   in my_set

7. don't have an order:  - pot sa apara in alta ordine decat in cea in care au fost adaugate

8. don't allow  duplicates

Methods:
add(), remove(), union(), intersection(), difference(), discard()



C. Tuples:
- allow to store multiple items

Create a tuple: 
- create : empty_tuple = () 
- to create a single element tuple you need to add a comma after the element otherwise it is of type of that element 
             -> single_element_tuple= ("Timmy Failure", )
tuple packing

- tuples can have mixed types


1. accessing elements:
 - have indexes to access the elements
- use of "in"  operator

2. packing - combining more elements in a single tuple - metoda de a crea un tuple

name = "Jn"
age= 26
city = "Ne"

packed_tuple = name, age, city

3. unpacking tuple : -  name, age, city = packed_tuple 
- nr de elemente care vrem sa le scoate trbuie sa corespunda ciu nr elem din tuple

4. can be used in a function: meaning can create a tuple by a function that returns values - just like packing tuples

def makeTuple:
			name = "kkjkk"
	  	age= "23"
	  	city = "LA"
      return name, age, city

tuple_created = makeTuple()

Characteristics:
1. Have indexes
2. can't be modified  - immutable
3. have order - items have the order of insertion
4. allow duplicates


D. Lists 
Create = with []
- can be of mixed types
- can be nested lists

Access elem:
- indexing
 - in operator 
- access elem in nested list

Characteristics:
1. can be modified
2. have an order - have indexes
3. duplicates are allowed

- x[1:4] elem 1,2,3

4. Acess elements with:
- find the index of a specific element :
arr.index("lemon")
- in operator
- indexing

5. Add elements to a list:
- list.append - adauga elementul la sfarsitul listei
- list.insert( index, element)  - adauga elem la un anumit index
- list.extend(anotherLIst) - adauga elem din cealata lista la sfarsitul primei liste, cea pe care s-a chemat metoda

6. Remove:
- remove() method
clear-  creaza o lista goala

7. Copy lists:
-  daca exist ao lista A iar B=A - amandoua au aceeasi referinta in memorie deci o modificare duce la modificarea ambelor liste

- pt a avea referinte diferite => 1. list(A)
                                                    2.  B = A[:]

E. Dictionaries:
- keys are unique and imutable
Create - dict()  sau {}

1. are ordered - they keep the order the elements were added in
2. key - value pair
3. mutable - add, remove, modify - oldDict["newKey"] = value
4. acces by key 
5. convert a list into a dictionary:

names = ["asd", "asdf"]
prices = ["12", "33"]
-> create a dictionary  newDict = dict(zip(names, prices))
6. dict.values()- returns all values
7. dict.keys - all keys
8. dict.items()  -  store each key-value pair as a tuple

9. verify if a dict has a key -> nameOfKey in dict
10.  retrieve the value with get method => dict.get("name_of_key")

11. add element to dict 
- dict.update({"newKey": value, "newKey2": value2}) = > va adauga elementul la sfarsitul dictionarului sau va modifica valoarea daca key-ul exista deja 

12. pop() - elimina ultimul element
- del dict["key"]
dict.clear() - returns an empty dict

13. copy 
- with A = B - au acceeasi referinta in memorie - daca se modifica unul se modifca si celalat

- oldDict.copy() - creaza o copie cu referinta diferita in memorie


F. List Comprehension 

 - Syntax : new_list = [expression for item in (a list, tuple, or range) if condition]

1. creating a list of squares :

numbers = [1, 2, 3, 4, 5]
squares = [x ** 2 for x in numbers]
# Result: squares is [1, 4, 9, 16, 25]

2. Filtering:
even_nr = [x for x in numbers if  x%2 ==0]
long_words = [word for word in words if len(word) > 5]

3. Creating a list of uppercase names:

uppercase = [name.upper() for name in names]

4. Nested list comprehension:
transpose =[ [row[i] for row in matrix ] for i in range( len(matrix) )

5: Nested list comprehension to flatten a list of lists:
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
flattened = [number for row in matrix for number in row]

6: Creating a list of tuples with both even and odd numbers from two lists
combined = [(even, odd) for even in even_numbers for odd in odd_numbers]




II Break out of a loop - while, for statement:
Continue skips the current iteration and goes to the next one

III Parameters of functions and arguments
- positional arguments - each argument has it's position
- key word arguments - specify the parameter name, position is not important
- optional params with default values - define them after all required parameters
- ' *args ' parameter - takes an arbitrary nr of positional arguments and creates a tuple with them

def print_params(x, *args):
				print(x, ...*args)

print_params(1,2,3,4) = x = 1
                                       args = (2,3,4)
args[0] = 2


IV Variadic functions = fnc that can take an arbitrary nr of items 

V **kwargs  - is a parameter that takes additional key word arguments
                   -  creates a dictionary with these key word arguments


def print_params(x, *args, **kwargs):
				for val in kwargs.values():
							print(val)
				print(x, ...*args)

print_params(1,2,3,4, first="aa", second ="bbb" ) = x = 1
                                       args = (2,3,4)
																			 kwargs   = {first:"aa",
                                                            second:"bbb"}		
ex: 
def find_in_list(some_list, *item_names):
    for item_name in item_names:
        for item in some_list:
            if item == item_name:
                print(f"{item_name} is on the list!")
                break
        else:
            print(f"{item_name} is not on the list!")

find_in_list(grocery_list, "potatoes", "carrots", "bread")

VI. Mutable and Imutable Objects in Python
1. Immutable:
- string, 
- numbers, 
- frozen sets,
-  tuples,
- Immutable Data Types : bool, None, and some custom classes that you design as immutable.

 2. Mutable:
- lists, 
- dictionaries, 
- sets -mutable collections of unique elements. You can add or remove elements from a set.
- User-Defined Classes (custom objects)
-  Byte arrays are mutable sequences of bytes. You can modify the elements of a byte array after creation

def add_to_list(some_list, item):
    some_list.append(item)

lst = [1, 2, 3]

add_to_list(lst, 4)

print(lst) - o sa printeze lista cu 4 adaugat pentru ca functia ia referinta listei

Nu e ca la variabile ca se creaza o variabila in scopul functiei si nu modifica variabila (string) extern functiei
ex: 
x = 2
def add_two(num):
    num += 2
add_two(x)
print(x) -> printeaza 2 si nu 4 pentru ca un string e immutable, deci functia trebuie sa creeze o alta variabila in scopul ei 




























