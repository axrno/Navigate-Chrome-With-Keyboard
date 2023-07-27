chrome.tabs.executeScript({
    code: `
    document.onkeydown = function(e) {
        switch (e.key) {
            case 'ArrowLeft':
                window.scrollBy(-10, 0);
                break;
            case 'ArrowUp':
                window.scrollBy(0, -10);
                break;
            case 'ArrowRight':
                window.scrollBy(10, 0);
                break;
            case 'ArrowDown':
                window.scrollBy(0, 10);
                break;
            case 'Tab':
                break;
            case 'Enter':
                document.activeElement.click();
                break; 
        }
    };
    `
  });
                                                                                        