Data frames = are 2 d objects used to represent tabular data structure. 
     - data is represented in rows and columns

Characteristics dataframes:
1. mutable, 
2. indexed based
3. derived from a class assign


Data representation media: JSON, CSV

@. Apply()

- apply() is used to apply a given function to each element in a Series or DataFrame. It allows you to perform custom operations on the data in your Series or DataFrame.

series = pd.Series([1, 2, 3, 4])

def square(x):
    return x ** 2

result = series.apply(square) - applys the function to each element in the dataframe


Example:

ridership = np.array([
    [   0,    0,    2,    5,    0],
    [1478, 3877, 3674, 2328, 2539],
    [1613, 4088, 3991, 6461, 2691]
])

print(ridership[1:3, 3:5])  => [[2328 2539]
																							 [6461 2691]]  -ia elementele de pe randurile 1+2 si coloana 3+4

- ridership[1, :] - randul 1 toate coloanele
- ridership[0, :] + ridership[1, :] - adunare element wise


ILOC:
iloc is primarily used to access DataFrame elements by their integer row and column positions.

 1.   selected_rows = df.iloc[1:4]:
        This line selects rows with integer positions 1, 2, and 3 (exclusive of 4). In other words, it selects the rows at positions 1, 2, and 3 in the DataFrame.
        The result, selected_rows, is a new DataFrame that contains these selected rows.

 2.   single_row = df.iloc[0]:
        This line selects the row with integer position 0 in the DataFrame.
        The result, single_row, is a Pandas Series containing the data from the first row of the DataFrame.


3.  df.iloc[1:3, 0:3] is used to select a subset of rows and columns from a Pandas DataFrame. Let's break down what this code does step by step:

    df: This represents the Pandas DataFrame from which we want to select data.

    iloc: This is a method in Pandas used for integer-location based indexing.

    [1:3, 0:3]:
        The first part, [1:3], specifies the rows to select. It uses integer-based slicing and selects rows with positions 1 and 2 (exclusive of 3).
        The second part, [0:3], specifies the columns to select. It uses integer-based slicing and selects columns with positions 0, 1, and 2 (exclusive of 3).


Implicit values for a function:
- global variables - acces the external scope variables 
-  default arguments - parameters - params, *args, **kwargs
-  context or state -  implicitly use the state or context in which they are called
- data from external sources. These values or parameters are not explicitly passed to the function as arguments but are still accessible and usable within the function's scope.
ex: def read_file(filename):
    with open(filename, 'r') as file:
        content = file.read()
    return content





















