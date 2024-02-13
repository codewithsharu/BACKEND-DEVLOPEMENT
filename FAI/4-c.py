#4-c: Creating a Pandas DataFrame.

#Create a dataframe using List
import pandas as pd  
  
# string values in the list   
lst = ['Java', 'Python', 'C', 'C++','JavaScript', 'Swift', 'Go']  
  
# Calling DataFrame constructor on list  
dframe = pd.DataFrame(lst)  
print(dframe)  

#Create Dataframe from dict of ndarray/lists
import pandas as pd  
data = {'Name': ['Aditya', 'Pravallika', 'Krish', 'John'], 'Age': [20, 21, 19, 18]}  
  
# Create DataFrame  
df = pd.DataFrame(data)  
  
# Print the output.  
print(df)  