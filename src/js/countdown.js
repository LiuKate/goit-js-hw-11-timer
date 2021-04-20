class CountdownTimer{
    constructor({ selector, targetDate }) {
        this.selector = selector;
        this.delta = targetDate.getTime() - Date.now();
        this.timerRef = document.querySelector(`${this.selector}`)

        this.timerInit();
    }

    getTime() {
        const days = transformValues(Math.floor(this.delta / (1000 * 60 * 60 * 24)));
        const hours = transformValues(Math.floor((this.delta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = transformValues(Math.floor((this.delta % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = transformValues(Math.floor((this.delta % (1000 * 60)) / 1000));
        
        return `${days}:${hours}:${mins}:${secs}`;
    }

       renderTimeMarkup() {
        this.timerRef.textContent = `${this.getTime()}`;
        this.timerRef.classList.add('time');
    }

    timerInit() {
        
        const interval = setInterval(() => {
            this.delta -= 1000;

            if (this.delta <= 0) {
                clearInterval(interval);
            }

            this.renderTimeMarkup();
        }, 1000)
    }

}

function transformValues(value) {
  return String(value).padStart(2, '0');
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('May 5, 2021'),
});



