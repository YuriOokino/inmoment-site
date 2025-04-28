// Animation utilities for the InMoment site

/**
 * Fade in an element
 * @param {HTMLElement} element - The element to fade in
 * @param {number} duration - Duration of the animation in milliseconds
 * @param {string} easing - CSS easing function
 */
export const fadeIn = (element, duration = 500, easing = 'ease-in-out') => {
    element.style.opacity = '0';
    element.style.transition = `opacity ${duration}ms ${easing}`;
    
    // Force a reflow
    element.offsetHeight;
    
    element.style.opacity = '1';
};

/**
 * Fade out an element
 * @param {HTMLElement} element - The element to fade out
 * @param {number} duration - Duration of the animation in milliseconds
 * @param {string} easing - CSS easing function
 */
export const fadeOut = (element, duration = 500, easing = 'ease-in-out') => {
    element.style.opacity = '1';
    element.style.transition = `opacity ${duration}ms ${easing}`;
    
    // Force a reflow
    element.offsetHeight;
    
    element.style.opacity = '0';
};

/**
 * Slide an element in from a direction
 * @param {HTMLElement} element - The element to slide
 * @param {string} direction - Direction to slide from ('left', 'right', 'top', 'bottom')
 * @param {number} duration - Duration of the animation in milliseconds
 * @param {string} easing - CSS easing function
 */
export const slideIn = (element, direction = 'left', duration = 500, easing = 'ease-in-out') => {
    const transformMap = {
        left: 'translateX(-100%)',
        right: 'translateX(100%)',
        top: 'translateY(-100%)',
        bottom: 'translateY(100%)'
    };

    element.style.transform = transformMap[direction];
    element.style.transition = `transform ${duration}ms ${easing}`;
    
    // Force a reflow
    element.offsetHeight;
    
    element.style.transform = 'translate(0)';
};

/**
 * Slide an element out to a direction
 * @param {HTMLElement} element - The element to slide
 * @param {string} direction - Direction to slide to ('left', 'right', 'top', 'bottom')
 * @param {number} duration - Duration of the animation in milliseconds
 * @param {string} easing - CSS easing function
 */
export const slideOut = (element, direction = 'left', duration = 500, easing = 'ease-in-out') => {
    const transformMap = {
        left: 'translateX(-100%)',
        right: 'translateX(100%)',
        top: 'translateY(-100%)',
        bottom: 'translateY(100%)'
    };

    element.style.transform = 'translate(0)';
    element.style.transition = `transform ${duration}ms ${easing}`;
    
    // Force a reflow
    element.offsetHeight;
    
    element.style.transform = transformMap[direction];
};

/**
 * Scale an element
 * @param {HTMLElement} element - The element to scale
 * @param {number} scale - Scale factor (1 = normal size)
 * @param {number} duration - Duration of the animation in milliseconds
 * @param {string} easing - CSS easing function
 */
export const scale = (element, scale = 1.2, duration = 500, easing = 'ease-in-out') => {
    element.style.transform = 'scale(1)';
    element.style.transition = `transform ${duration}ms ${easing}`;
    
    // Force a reflow
    element.offsetHeight;
    
    element.style.transform = `scale(${scale})`;
}; 