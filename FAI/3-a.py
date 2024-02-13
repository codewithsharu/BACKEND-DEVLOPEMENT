# 3-a:Create a white image using NumPy

# import required libraries
import cv2
import numpy as np

# create a white image
img = np.ones((350, 700, 3), dtype = np.uint8)
img = 255* img

# display the image using opencv
cv2.imshow('white image', img)
cv2.waitKey(0)