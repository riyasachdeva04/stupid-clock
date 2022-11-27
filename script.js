setInterval(() => {
d=newDate();
htime=d.getHours();
mtime=d.getMinutes();
stime=d.getSeconds();
hrotation=30*htime+0.5*mtime;
mrotation=6*mtime;
srotation=6*stime;

hour.style.transform=`rotate(${hrotation}deg)`;
min.style.transform=`rotate(${mrotation}deg)`;
sec.style.transform=`rotate(${srotation}deg)`;

}, 1000);