import cv2
import numpy as np

img = cv2.imread("input.jpg")
if img is None:
    raise ValueError("Image not found")

h, w, c = img.shape

# Bands to DELETE (y_start, y_end)
bands = [
    (0,413),
    (2010,2200)
]
# bands = [
#     (0,287),
#     (392,549),
#     (650,800),   # example band
#     (845,960),
#     (1080,1126),
#     (1202,1291),
#     (1400,1557),
#     (1596,1635),
#     (1675,1724),
#     (2000,2200)
# ]

# Sort bands top → bottom
bands.sort()

# Delete from bottom upward to avoid index shifting
for y1, y2 in reversed(bands):
    img = np.delete(img, np.s_[y1:y2], axis=0)

cv2.imwrite("output.jpg", img)

print("Band(s) deleted. Saved as output.jpg")
