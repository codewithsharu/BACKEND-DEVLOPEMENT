#4-a: Write a python program to implement Pandas Series with labels.

# import pandas and numpy 
import pandas as pd
import numpy as np
 
# creating simple array
data = np.array(['a','i','t','a','m','c', 's','m','c','s','d'])
ser = pd.Series(data,index=[10,11,12,13,14,15,16,17,18,19,20])

print(ser)
    
# accessing a element using index element
print(ser[16])