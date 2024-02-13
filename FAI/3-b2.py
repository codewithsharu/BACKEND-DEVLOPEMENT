# 3-b2: Convert a NumPy array to an image

from PIL import Image
import numpy as np
w,h=250,250
t=(h,w,3)
A=np.zeros(t,dtype=np.uint8)
for i in range(h):
    for j in range(w):
        A[i,j]=[i%256,j%256,(i+j)%256]
i=Image.fromarray(A,"RGB")
i.show()