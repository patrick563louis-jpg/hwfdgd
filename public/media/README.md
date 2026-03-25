# 📁 مجلد الوسائط (Media)

ضع ملفات الوسائط في المجلدات المخصصة أدناه، وستكون متاحة مباشرةً عبر المسار `/media/...` في موقعك.

## 📂 هيكل المجلدات

```
public/media/
├── images/   → الصور (jpg, png, webp, svg, gif ...)
├── videos/   → الفيديوهات (mp4, webm, ogg ...)
├── audio/    → الملفات الصوتية (mp3, wav, ogg ...)
└── docs/     → المستندات والملفات (pdf, docx, xlsx ...)
```

## 🔗 كيفية الاستخدام في المقالات

### صورة
```markdown
![وصف الصورة](/media/images/اسم-الصورة.jpg)
```

### فيديو
```html
<video controls>
  <source src="/media/videos/اسم-الفيديو.mp4" type="video/mp4" />
</video>
```

### صوت
```html
<audio controls>
  <source src="/media/audio/اسم-الملف.mp3" type="audio/mpeg" />
</audio>
```

### مستند / PDF
```markdown
[تحميل الملف](/media/docs/اسم-الملف.pdf)
```
