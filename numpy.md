Numpy - tutorial https://app.pluralsight.com/course-player?clipId=677950a5-439a-4cde-857e-d4d7cef5be2e





- np.array = creaza un array np din o lista python
- np.zeros(rows, cols) - creaza un arr de 0 de shape-ul ala
- np.ones(rows, cols) - creaza un arr de 1 de shape-ul ala
-dtype = param pasat la np ca sa il faca de un tip anume  = np.int16
- np.empty = creaza un arr empty
- np.eye = matricea identica

- np.ones_like =creaza array identic cu arr pasat de aceeasi forma dar de cate 1's

- np.arrange - (start, stop, step)
- pass a list of lists to create 2 d arr  - np.array([(2,4,5), (3,5,7)])

- np.shape -row, cols
- ap.arange(24).reshape(2,3,4) - are 2 arr de shape(3,4)

- ca sa scapi de ... sau elipsis faci np.set_printoption(threshold = np.nan)



Operations:
arr1+arr2
arr1*arr2
- matrix multiplication prin A.dot(B) sau np.dot(A,B)

modify an arr rather than  create a new one a  *= 3
- arr.sum - face sumatie
- arr.min-cauta min
- arr.max-cauta max
arr.sum(axis = 0) - face sumatie column wise
arr.sum(axis = 1) - face sumatie row wise

Universal functions
- apply functions to arrays!!! angles = np.array([0,30,45,60,90]) 
angles_radians = angles * np.pi/180
- np.sin(angles_radians)]
- angles_radians = np.radians(angles) - convert to radians
- print('Cosine of angles in the array:')
print(np.cos(angles_radians))

Statistical Functions:
test_scores = np.array([32.32, 56.98, 21.52, 44.32, 
                        55.63, 13.75, 43.47, 43.34])
mean      = np.mean(salaries)
median   = np.median(salaries)
sd            = np.std(salaries)
variance  = np.var(salaries)

Indexing and Sliceing

- a[:7] - de la 0 la index 6
- a[2:] - de la 2 la index sf
- a[2:-2] -  merge de la index 2 la penultimul element
- a[:11:2]  - incepe de index 0 pana la 11 cu step de 2

- step in array invers a[: :-1] - stepul este de 1 de la sfarsit

Arrays don't have the same type of data

2D aArrays Indexing:
students = np.array([['Alice','Beth','Cathy','Dorothy'],
                     [65,78,90,81],
                     [71,82,79,92]])
-students[0] - access first row
-students[2] - access second row
- range of accessed elements in a arr  - -students[0:2 ,  2: 4 ] - access rows 0, 1 from columns 2,3 
- Range with no numbers means all rows : students[  : , 1 : 2 ] all rows from column 1

students[-1 , : ] - last row  and all columns
students[:] - all rows and columns
- 3rd from last to second from last row, last two columns: students[-3 :-1, -2 : ] - ultimele randuri -2 si 3 si de la penultima coloana la ultima coloana

Dots or elipsis:
 - Slicing can also include ellipsis (…) to make a selection tuple of the same length as the dimension of an array. The dots (...) represent as many colons as needed to produce a complete indexing tuple

 - students[0] or students[ 0 : 1, : ]  == students[ 0, ... ] 

 - students[...,1] - all rows and the first column

Flatten allows to iterate over every element of an array
for element in students.flatten():
print element - printeaza toate elementele desi students e un array de 3 arraiuri

Row major flattening elements in a row appear together
 
Iterating over multidimensional arrays:
1. Flatten returns a result array

array.flatten( order = 'F')- column major flattening elements in a column appear together

2. nditer - aloows iteration over array
Efficient multi-dimensional iterator object to iterate over arrays

 -  for i in np.nditer(x)  row wise iteration similar to fattened array
 - for i in np.nditer(x,    order = 'F') -  order = 'F' means flattened column wise

-  for i in np.nditer(x, order = 'F', flags = ['external_loop']):  - iterate column wise, each column is a 1D array

 the nditer treats the input array as a read-only object - can't modify the element
- you can modify it if you pass the flag op_flags = ['readwrite']

for arr in np.nditer(x, op_flags = ['readwrite']):
    arr[...] = arr * arr


D. Changing the shape of an array:

1. a.ravel() - flattens the array to a 1 D vector

2. a.T - transposes the array from columns to rows

3. a.reshape()

ex: a = [[1,2,34,], [5,6,7,8]] = shape (2,4)
a.reshape(4,2)

=> a =[ [1,2],
              [5,6],
							[3,4],
              [7,8] ]

reshape with neagtive values means that we don't know the value of that dimension
countries.reshape(-1, 3) - means we need 3 columns but don't know the value for rows
 when you reshape you ned to be abble to divide the nr of the original array to the nr of the reshape

E. Splitting
- np.split(x, 3) - split in 3 equal sized subarrays

You can split an image array  with np.split(imgarr, 2, axis = 1)
axis = 1 -split horizontaly - row wise 
axis = 0 split vertically column wise

np.concatenate -  concatenate the imgs - stacks tha array one on top of the other -  vertically along the column 

F. Views - shallow copies of an array

- any edit on the copy reflect in the original Array
-  contents are the same but they are unique objects - different objects

viewShallowCopy is origImage? - False
viewShallowCopy.base is origImage? - True   - the base from which the view is created is the origImage

- al the views and the original Arrray are affected by a modification to the original Array or a view
-  you can reshape a view or a shallow copy without affecting the original array

G. Deep Copy of an Arrray
fruits = np.array([1,2,3,4,5])
basket = fruits.copy()
- the 2 arrays are different objects and the copy.base is different from the original array
- o modificare a copiei inclusiv forma nu schimba array-ul original

H. Indexing with Arrays Of Indices
a = np.arange(12)**2    =>[  0,   1,   4,   9,  16,  25,  36,  49,  64,  81, 100, 121]

- accesarea indexilor 2,6,8 se poate face:
    1.a[2],a[6],a[8]
    2.a[[2,6,8]]
- the shape of a result of an index matches the shape of the index arrays and not the shape of the array being indexed
///////////////////////////////on github until here\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
   indx_2 = np.array([[2,4],[8,10]])
   a[ [ [ 2 , 4 ] , [ 8 , 10 ] ] ]   => array([[  4,  16],
                                                            [ 64, 100]])

-> the index is a  list of lists compared to the next one that the index are 2 lists of lists

!!! Indexes for more than one dimmension:
food = np.array([["blueberry","strawberry","cherry","blackberry"],
             						    ["pinenut","hazelnuts","cashewnut","coconut"],
               						  ["mustard","paprika","nutmeg","clove"]])
row = np.array([[0,0],[2,2]])
col = np.array([[0,3],[0,3]])
food[row,col]  => food[ [ [ 0 , 0 ] , [ 2 , 2 ] ] , 
                                       [ [ 0, 3 ] ,  [ 0 , 3 ] ] 
																																			]
 the result is         array([['blueberry', 'blackberry'],
                                       ['mustard', 'clove']], dtype='<U10')   = >

 food[0,0], next is food[0,3] , food[2,0] and lastly food[2,3]

Modify values with indexing

food[row,col] = '00000' = > array([["00000","strawberry","cherry","00000"],
             																					 ["pinenut","hazelnuts","cashewnut","coconut"],
               																			  ["00000","paprika","nutmeg","00000"]])

- row si col trebuie sa aiba aceleasi dimensiuni


PANDAS  - folosit pentru dataframes si a vedea datele in forma tabulara

Use Indexing for filtering:
gdp_16 = gdp_16[~np.isnan(gdp_16)]  - The complement operator (~) can be used to remove nan elements

I.
  Count_nonzero  
= face count pe array care respecta o regula pasata
ex: np.count_nonzero(gdp_16[gdp_16 > 40000]) 
- np.count_nonzero((gdp_16 > 16609.7) & (gdp_16 < 43378.1))
 - intoarce countul elementelor care sunt in conditie 


Filtrarea se poate face si altfel:
-  gdp_16[gdp_16 > 6570.6] -> intoarce un array cu elementele care au val > 6570


J. Indexing with boolean Arrays:

- a[indx_boo] where index_bool is an array of the same dimmension as the original same as - > a[a > 9]
- count how many values are there that satisfy a condition
                           -  np.count_nonzero(a < 6)  same as np.sum(a < 6)

axis = 1 - performs operations row - wise
axis = 0 - operations column wise 

- np.sum( a < 6, axis=1 )  -count the nr of values that satisfy the condition in each row - da ca si rezultat [4, 2, 0, 0]  - 4 elem pe primul row , 2 pe al doilea si apoi 0 pe restul randurilor

- np.any - verify if there are elements that satisfy the condition
          np.any(a>8)  -> returneaza true sau False daca gaseste sau nu elemente

- np.all(a<10) - returneaza True sau fals daca gaseste sau nu toate elementele sa satisfaca conditia


K. Indexing with strings 

ex:
name  = ["Alice","Beth","Cathy","Dorothy"]
studentId  = [1,2,3,4]
score = [85.4,90.4,87.66,78.9]

- initialize student data arr that will contain the other data - you pass in names the names of the columns and in dtype you pass the type 

student_data = np.zeros(4, dtype={'names':('name', 'studentId', 'score'),
                                                         'formats':('U10', 'i4', 'f8')})
1. Access columns:

student_data['name'] = name
student_data['studentId'] = studentId
student_data['score'] = score
 It can be acessed by name of the column:

2. Access Rows - pass the index    
     - student_data[1]  - intoarce primul rand 

3. Access cells - pass the index and the name of the column
     - student_data[-1]['name']   - name attribute from the last row

4. Access by codition
     - student_data[student_data['score'] > 85]['name']  - names where the score is > 85

L. Broadcasting

== perform operations on arrays of different shapes without the need for explicit shape matching or copying of data. It makes it easier to work with arrays of different shapes

- Rules of Broadcasting
1. equal in shape or shape compatibility - one of the dimmensions needs to be 1
2. one of them is a scalar

ex: one array of 3,6
- compatibil with 3,1
incompatibil cu 3,2 sau 2,1

If the broadcasting rules are met the smaller array is mulltiplied to match the bigger array

M.  Reshaping of an array 

it has 3 dimmensions - row, column, second/n'th dimmension
- given a a vector -> a.shape = 2, -1, 3
means reshape in 2, calculate dimension, 3
a = [ 0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15, 16,
       17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29]
a.shape = 2,-1,3 
-- ##### -1 means "whatever is needed"

array([
          [
            [ 0,  1,  2],
            [ 3,  4,  5],
            [ 6,  7,  8],
            [ 9, 10, 11],
            [12, 13, 14]
                               ],
          [
           [15, 16, 17],
           [18, 19, 20],
           [21, 22, 23],
           [24, 25, 26],
           [27, 28, 29]
                             ]])  shape is 2, 5, 3

N. Vector Array Stacking

1. Column wise - axis 0 
 ex: x = [['Germany' 'France']
              ['Berlin' 'Paris']]
y = [['Hungary' 'Austria']
        ['Budapest' 'Vienna']]

np.concatenate((x,y)) = > 
array([['Germany', 'France'],
       ['Berlin', 'Paris'],
       ['Hungary', 'Austria'],
       ['Budapest', 'Vienna']], dtype='<U8')

2. Concatenate Row wise:
ex:    np.concatenate((x,y), axis = 1)
=> 
array([['Germany', 'France', 'Hungary', 'Austria'],
       ['Berlin', 'Paris', 'Budapest', 'Vienna']], dtype='<U8')


O. Stack:
 - performs concatenation in the back and default is axis 0 meaning column wise
studentId = np.array([1,2,3,4])
name   = np.array(["Alice","Beth","Cathy","Dorothy"])
scores  = np.array([65,78,90,81])
np.stack((studentId, name, scores)) = > 
     array([['1', '2', '3', '4'],
               ['Alice', 'Beth', 'Cathy', 'Dorothy'],
               ['65', '78', '90', '81']], dtype='<U21')

np.stack((studentId, name, scores), axis =1) =>  row wise stacking 
array([['1', 'Alice', '65'],
       ['2', 'Beth', '78'],
       ['3', 'Cathy', '90'],
       ['4', 'Dorothy', '81']], dtype='<U21')

1. Vstack - stacks vertically - column wise axis = 0

   array([['1', '2', '3', '4'],
               ['Alice', 'Beth', 'Cathy', 'Dorothy'],
               ['65', '78', '90', '81']], dtype='<U21')

2. Hstack axis = 1 row stack - rows next to one another

array(['1', '2', '3', '4', 'Alice', 'Beth', 'Cathy', 'Dorothy', '65',
       '78', '90', '81'], dtype='<U21')


P. Histograms  -  np.histogram(  array of data, bins, range(upper, lower))

histogram returns n and bin_edges
1. n (histogram values):  occurences of data  in each bin
2. bin edges:  the right edges of each bin

ex: create a random normal distribution of  with mean = 2 and std = 0.5
data = np.random.normal( 2, 0.5, 10000 )
(n, bin_edges) = np.histogram( data , bins = 50 )

plt.plot(bin_edges[ 1 : ], n)
plt.show()


P. Where:
- returns the indices of elements that satosfy that condition
greater_than_100 = np.where(salaries > 100000)  - the indices 

salaries[greater_than_100]  - the values in the array for those indices

Q. Extract :
- returns the elements satisfying any condition 

condition = salaries > np.mean(salaries)
np.extract(condition , salaries)

R. generate np array from text
salaries = np.genfromtxt('path_to_csv.csv', delimiter=',')

S. Argmax = returmns the indices of a max val along an axis  + Argmin 
np.argmax(salaries)
salaries[np.argmax(salaries)]

T.Argsort = returns the array of indices of the sorted values in the array










  






















