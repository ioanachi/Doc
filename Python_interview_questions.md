1. What is the difference between list and tuples in Python?
Lists are mutable i.e they can be 
- edited,
-  slower ,
 -  Syntax: list_1 = [10, ‘Chelsea’, 20]
Tuples are 
 - immutable (tuples are lists which can’t be edited), 
 - faster , 
 - Syntax: tup_1 = (10, ‘Chelsea’ , 20)

2. common things between lists and tuples:
  -  Ordered Collections: Both lists and tuples are ordered collections, which means they maintain the order of elements. The first element added to the collection will be at index 0, the second at index 1, and so on.

    Indexing: You can access individual elements in both lists and tuples using indexing. The index starts at 0 for the first element.

    Slicing: Both lists and tuples support slicing, allowing you to extract a portion of the sequence by specifying a range of indices. Slicing creates a new sequence.

    Iteration: You can iterate over the elements of both lists and tuples using loops, such as for loops.

    Concatenation: You can concatenate (combine) two lists or two tuples using the + operator, which creates a new list or tuple.

    Length: You can determine the number of elements in a list or tuple using the len() function.

    Membership Testing: You can check if an element is present in a list or tuple using the in operator.


3.  What are the key features of Python:

- interpreted -  does not need to be compiled before it is run
- dynamically typed - you don’t need to state the types of variables when you declare them. x=111 and then x="I'm a string" without error

- Object oriented - allows the definition of classes along with composition and inheritance
 - functions are first-class objects. Classes are also first class objects
- writing Python code is quick 

4. Namespace is a container that holds a mapping of names (identifiers) to objects. Namespaces are used to organize and manage the names of variables, functions, classes, modules, 
 - prevent naming conflicts and allow you to access and reference objects using their unique names.
- when referencing a name Python searches them in the order: local, enclosing, global, built-in

5. Decorators - are a special type of function that allows you to modify the behavior of another function or method without changing its source code. Decorators are often used for adding functionality to functions or methods, such as logging, authentication, caching, or access control, in a clean and reusable way.

def my_decorator(func):
    def wrapper():
        print("Something is happening before the function is called.")
        func()
        print("Something is happening after the function is called.")
    return wrapper

@my_decorator
def say_hello():
    print("Hello!")

# Using the decorated function
say_hello()


5. Dict and List comprehension  - create list and dictionary in a single line of code

List: [expression for item in iterable if condition]
ex: squares_of_evens = [x**2 for x in range(10) if x % 2 == 0]

Dict: { key_expression: value_expression for item in iterable if condition }
ex: squares_dict = { x: x**2 for x in range(10) if x % 2 == 0 }


6. Slicing 
- access parts of a sequence like tuples, list, strings
- syntax: [ start : end : step ]

7. Literals -   are a notation representing a fixed value in your source code. 
-  **Numeric Literals:**
   - Integer Literals:
   - Floating-Point Literals:
   - Complex Literals: These are used to represent complex numbers with a real and imaginary part. Examples: `3 + 2j`, `-1.5 - 0.5j`.

- **String Literals:**
   - Single-Quoted and Double-Quoted Strings:  Strings are enclosed in either single or double quotes. Examples: `'Hello'`, `"World"`.
   - Triple-Quoted Strings:  These are used for multi-line strings and can be enclosed in three single or three double quotes. Examples:
     ```
     '''This is a
     multi-line string.'''
     """Another example"""
     ```

-  **Boolean Literals:**
   - `True` and `False` represent the Boolean values.

-   **None Literal:**
   - `None` is a special literal used to represent the absence of a value or a null value.

 **Sequence (List, Tuple, and Range) Literals:**
   - List Literals:  Lists are created using square brackets `[]`. Example: `[1, 2, 3]`.
   - **Tuple Literals:** Tuples are created using parentheses `()`. Example: `(1, 2, 3)`.
   - **Range Literals:** Ranges are created using the `range()` function. Example: `range(0, 10)`.

-  **Set and Dictionary Literals:**
   - **Set Literals:** Sets are created using curly braces `{}`. Example: `{1, 2, 3}`.
   - **Dictionary Literals:** Dictionaries are created using curly braces `{}` with key-value pairs separated by colons. Example: `{'name': 'John', 'age': 30}`.

-  **Bytes and Bytearray Literals:**
   - **Bytes Literals:** Bytes literals are prefixed with `b` and used to represent sequences of bytes. Example: `b'hello'`.
   - **Bytearray Literals:** Bytearrays are similar to bytes but are mutable. Example: `bytearray(b'hello')`.

-  **Formatted String Literals (f-strings):**
   - F-strings are used for string formatting and are prefixed with an `f` or `F`. They allow you to embed expressions inside strings. Example: `f'Hello, {name}'`.

-  **Raw String Literals:**
   - Raw strings are prefixed with `r` or `R` and are used to represent strings where escape sequences are not processed. Example: `r'C:\Users\'`.


8. PYTHONPATH:
== environment variable that tells the interpreter where to locate the module files that you want to import in a python script
- when importing a script - python searches first in the local directory -> pythonpath -> standard library and built-in nmodules

9. Is an interpreted language, it executes it's code line by line
- code is converted into bytecode and then executed by the py VM
- doesn't require  compilation

10. Keywords are - special reserved words that have specific meaning and purpose and can't be used for anything but those purposes

false, True, classs, continue...none, yield,import

11. All data types in py:
text:                     string
numeric:              int, float , complex,
sequence types:  list, tuples, range
mapping type:    dict
ste type:              set, frozenset
boolean:             bool
binary types:       bytes, bytearray, memoryview
none type:          None

12. 

















