#3-c: Perform Sorting, Searching and Counting using Numpy methods.

# importing libraries
import numpy as np
 
# sort along the first axis
a = np.array([[12, 15], [10, 1]])
arr1 = np.sort(a, axis = 0)        
print ("Along first axis : \n", arr1)        
 
# sort along the last axis
a = np.array([[10, 15], [12, 1]])
arr2 = np.sort(a, axis = -1)        
print ("\nAlong first axis : \n", arr2)
 
a = np.array([[12, 15], [10, 1]])
arr1 = np.sort(a, axis = None)        
print ("\nAlong none axis : \n", arr1)


#Searching
import numpy as np
array = np.arange(12).reshape(3, 4)
print("Input ARRAY : \n", array)
 
# No axis mentioned, so works on entire array
print("\nMax element : ", np.argmax(array))
 
# returning Indices of the max element as per the indices
print(("\nIndices of Max element : ", np.argmax(array, axis=0)))
print(("\nIndices of Max element : ", np.argmax(array, axis=1)))


#Counting
import numpy as np
  
# Counting a number of non-zero values
a = np.count_nonzero([[0,1,7,0,0],[3,0,0,2,19]])
b = np.count_nonzero(([[0,1,7,0,0],[3,0,0,0,19]]))
 
print("Number of nonzero values is :",a)
print("Number of nonzero values is :",b)