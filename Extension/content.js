(function() {
    const POLL_INTERVAL = 10; // lower value = quicker clicks = more likely to instant skip, lower values may impact performance.
  
    const clickIfExists = (selector, name) => {
      const el = document.querySelector(selector);
      if (el) {
        console.log(`[Bypass] Clicking ${name}`);
        el.click();
        return true;
      }
      return false;
    };
  
    const clickByText = (tag, text, name) => {
      const els = [...document.querySelectorAll(tag)];
      const el = els.find(e => e.textContent.trim() === text);
      if (el) {
        console.log(`[Bypass] Clicking ${name}`);
        el.click();
        return true;
      }
      return false;
    };
  
    const runFastClicks = () => {
      clickIfExists('.accessBtn', 'Go To Destination');
      clickIfExists('button:has(svg.lucide-zap)', 'Get Instant Access');
      clickIfExists('button:has(svg.lucide-x)', 'Close Signup Popup');
      clickByText('button', 'Proceed to Safe Destination', 'Proceed to Safe Destination');
      clickIfExists('button.interestedBtn.button', 'Accept');
    };
  
    window.addEventListener('DOMContentLoaded', () => {
      runFastClicks();
      setInterval(runFastClicks, POLL_INTERVAL);
    });
  })();  
