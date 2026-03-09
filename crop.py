from PIL import Image
import numpy as np

img = Image.open('src/assets/minpaku/hosts_manga.png').convert('L')
arr = np.array(img)

mask = arr < 250

def get_center(x1, x2, y1, y2):
    region = mask[y1:y2, x1:x2]
    rows = np.any(region, axis=1)
    cols = np.any(region, axis=0)
    if not np.any(rows):
        return (x1+x2)//2, (y1+y2)//2
    ymin, ymax = np.where(rows)[0][[0, -1]]
    xmin, xmax = np.where(cols)[0][[0, -1]]
    
    # adjust Y center slightly higher to center on the face rather than the whole body
    y_center = y1 + (ymin + ymax)//2 - int((ymax - ymin) * 0.1)
    
    return x1 + (xmin + xmax)//2, y_center

centers = [
    get_center(0, 512, 0, 512), # Aga
    get_center(512, 1024, 0, 512), # Tainai
    get_center(1024, 1536, 0, 512), # Joetsu
    get_center(0, 768, 512, 1024), # Myoko
    get_center(768, 1536, 512, 1024), # Tokamachi
]

img_color = Image.open('src/assets/minpaku/hosts_manga.png')
size = 420 # slightly larger crop to ensure head fits
for i, (cx, cy) in enumerate(centers):
    left = cx - size//2
    upper = cy - size//2
    right = cx + size//2
    lower = cy + size//2
    names = ['host_aga_bw.png', 'host_tainai_bw.png', 'host_joetsu_bw.png', 'host_myoko_bw.png', 'host_tokamachi_bw.png']
    
    # White background for out-of-bounds
    new_img = Image.new('RGB', (size, size), (255, 255, 255))
    cropped = img_color.crop((left, upper, right, lower))
    
    # If out of bounds, crop handles it but we want strict size
    new_img.paste(cropped, (0,0))
    new_img.save('src/assets/minpaku/' + names[i])
    print(f"{names[i]} centered at {cx}, {cy}")

