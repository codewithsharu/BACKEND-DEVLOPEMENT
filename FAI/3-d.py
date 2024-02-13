# 3-d: Write a program to demonstrate the use of the reshape() method.

import numpy as np
arr = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
newarr = arr.reshape(4, 3)
print(newarr)

#Unknown Dimension
newarr = arr.reshape(2, 2, -1)
print("\n")
print(newarr)

#Flattening the arrays
newarr = arr.reshape(-1)
print("\n")
print(newarr)