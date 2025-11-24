/* This script (common.js) is included in all html files except in gallery.html */

// Update year in the copyright section of all pages
export function copyrightYear() {
    const currYear = document.getElementById('currYear');
    const currFullYear = new Date().getFullYear();
    currYear.textContent = currFullYear;
    currYear.style.padding = '0 3px';
}

// This function is imported into the gallery.js to load images 
export function galleryMediaLoad() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxContent = document.querySelector('.lightbox-content');
    const closeBtn = document.querySelector('.close-btn');

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const mediaType = item.dataset.type;
            const mediaSource = item.dataset.src;
            
            // Clear any previous content
            lightboxContent.innerHTML = '';

            // Create new media element based on type
            if (mediaType === 'image') {
                const img = document.createElement('img');
                img.src = mediaSource;
                lightboxContent.appendChild(img);
            } else if (mediaType === 'video') {
                const video = document.createElement('video');
                video.src = mediaSource;
                video.controls = true;
                video.autoplay = true;
                lightboxContent.appendChild(video);
            }
            
            // Show the lightbox
            lightbox.classList.add('active');
        });
    });

    // Close the lightbox when the close button is clicked
    closeBtn.addEventListener('click', () => {
        lightbox.classList.remove('active');
        
        // Pause any playing videos
        const activeVideo = lightboxContent.querySelector('video');
        if (activeVideo) {
            activeVideo.pause();
        }
    });
    
    // Close the lightbox when clicking outside the content
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
            
            // Pause any playing videos
            const activeVideo = lightboxContent.querySelector('video');
            if (activeVideo) {
                activeVideo.pause();
            }
        }
    });
}

// Common event listener that runs on all pages that run this script or import this file 
document.addEventListener('DOMContentLoaded', (event) => {
    copyrightYear();
});
