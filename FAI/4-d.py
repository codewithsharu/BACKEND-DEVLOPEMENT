#4-d: Write a program which makes use of the following Pandas methods i) describe() ii) head() iii) tail() iv) info()

import pandas as pd
import numpy as np
import re  # importing regex module

#Create a series with 4 random numbers
s = pd.Series(np.random.randn(4))
print("The original series is:")
print(s)

print("\n")

print("The first two rows of the data series:")
print(s.head(2))
print("\n")

print ("The last two rows of the data series:")
print(s.tail(2))
print("\n")

print(s.describe());
print("\n")
	
# making data frame
data = pd.read_csv("nba.csv")
	
# removing null values to avoid errors
data.dropna(inplace = True)

# percentile list
perc =[.20, .40, .60, .80]

# list of dtypes to include
include =['object', 'float', 'int']

# calling describe method
desc = data.describe(percentiles = perc, include = include)

# display
print(desc)

print("\n")

# calling describe method
desc = data["Name"].describe()

# display
print(desc)