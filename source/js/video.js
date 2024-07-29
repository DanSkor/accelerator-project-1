const button = document.querySelector('.about__video-button');
const videoContainer = document.querySelector('.about__video');

function prepareFrame() {
  const video = document.createElement('div');
  video.style.width = '100%';
  video.style.height = '100%';
  video.innerHTML = '<iframe src="https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1" width="100%" height="100%" frameborder="0" loading="lazy" title="Бесплатные интерактивные онлайн-курсы HTML Academy." allowfullscreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" style="border: none;"></iframe>';
  videoContainer.appendChild(video);
}

button.addEventListener('click', () => {
  button.remove();
  prepareFrame();
});
