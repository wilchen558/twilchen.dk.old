$(function(){
    $(".typed").typed({
      strings: ["knows HTML5, CSS and jQuery.", "also knows Typo3, WordPress and SEO." , "is also a decent skier."],
      typeSpeed: 50,
      backDelay: 1200,
      loop: true,
      contentType: 'html', // or text
      // defaults to false for infinite loop
      loopCount: false
    });
});
