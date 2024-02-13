#3-b: Convert images to NumPy array

# Converting an image into NumPy Array

# Import the necessary libraries
from PIL import Image
from numpy import asarray

# load the image and convert into numpy array
img = Image.open('C:/Users/M.V.B.Chandrasekhar/Desktop/images/Sample.png')

# asarray() class is used to convert PIL images into NumPy arrays
numpydata = asarray(img)

# <class 'numpy.ndarray'>
print(type(numpydata))

# shape
print(numpydata.shape)
