
  //  ////////////////////// for auto play ///////////////////////////
    

    function playNextVideo() {
      if (currentVideoIndex < videoSources.length - 1) {
        currentVideoIndex++;
        const nextVideoSrc = videoSources[currentVideoIndex];
        const video = document.getElementById('video' + (currentVideoIndex + 1));
        video.src = nextVideoSrc;
        video.play();
      }
    }

    
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    
    const callback = (entries, observer) => {
      entries.forEach(entry => {
        const video = entry.target.querySelector('video'); 
        if (entry.isIntersecting) {
          video.play(); 
        } else {
          video.pause(); 
        }
      });
    };

   
    document.querySelectorAll('.video-container').forEach(container => {
      const observer = new IntersectionObserver(callback, options);
      observer.observe(container);
    });

    

      // //////////////////////////////////script for mute and unmute//////////////////////
   
      const videos = document.querySelectorAll('video');


      function muteAllVideos() {
        videos.forEach(video => {
          video.muted = true;
        });
      }
      
      
      function unmuteAllVideos() {
        videos.forEach(video => {
          video.muted = false;
        });
      }
      
      
      videos.forEach(video => {
        video.addEventListener('volumechange', function() {
          if (video.muted) {
            muteAllVideos();
          } else {
            unmuteAllVideos();
          }
        });
      });


//////////////////////////////////////////  for likes //////////////////////////////////////////////

    
    function incrementLikes(postId) {
      
      let postElement = document.querySelector('.post[data-post-id="' + postId + '"]');
      
      
      if (postElement.dataset.liked === "true") {
        alert("You've already liked this content.");
        return;
      }
      
     
      let likeCountElement = postElement.querySelector('.likeCount');
      let currentLikes = parseInt(likeCountElement.textContent);
      currentLikes++;
      likeCountElement.textContent = currentLikes;
      
      
      postElement.dataset.liked = "true"; 
      
     
      let likeIconElement = postElement.querySelector('.likeIcon');
      likeIconElement.style.color = 'red';
      
    }





