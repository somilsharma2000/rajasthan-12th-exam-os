import easyocr, glob, io, time
reader = easyocr.Reader(['hi'], gpu=False, verbose=False)
pages = sorted(glob.glob('advt-pages/p*.jpg'))[1:]  # skip decorative cover
for p in pages:
    out = p.replace('.jpg', '.txt').replace('advt-pages/', 'advt-pages/txt-')
    try:
        lines = reader.readtext(p, detail=0, paragraph=True)
        txt = '\n'.join(lines)
    except Exception as e:
        txt = 'ERR ' + str(e)
    io.open(out, 'w', encoding='utf-8').write(txt)
    print(p, len(txt), int(time.time()), flush=True)
print('OCR COMPLETE', flush=True)
