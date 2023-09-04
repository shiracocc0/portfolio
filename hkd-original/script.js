'use script';

window.addEventListener("load", function() {
    const target = document.querySelectorAll('.on')
    const targetArray = Array.prototype.slice.call(target);
    const options = {
        root: null,
        rootMargin: '0px 0px',
        threshold: 0.2
    };
    
    const observer = new IntersectionObserver(callback, options)
    targetArray.forEach(function (tgt) {
      observer.observe(tgt)
    });
    
    function callback(entries) {
      entries.forEach(function(entry) {
        const target = entry.target;
        if (entry.isIntersecting && !target.classList.contains('is-active')) {
          target.classList.add('is-active');
        }
      });
    };
    });


    window.addEventListener('scroll', () => {
      const scroll = window.scrollY; //スクロール値
      console.log(scroll);
  
      if (scroll >= 600) {
          document.getElementById('page-top').classList.add('open');
      } else {
          document.getElementById('page-top').classList.remove('open');
      }
  });
  