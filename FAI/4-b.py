#4-b: Create a Pandas Series from a dictionary.

import pandas as pd
# Creating dictionary
dictionary = {'A':10, 'B':63, 'D':32, 'C':87}

# Creating Series
s = pd.Series(dictionary)
print(s)