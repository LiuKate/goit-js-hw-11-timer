class CountdownTimer{
    constructor({ selector, targetDate }) {
        this.selector = selector;
        this.delta = targetDate.getTime() - Date.now();
        this.timerRef = document.querySelector(`${this.selector}`)

        this.timerInit();
    }

    getDays() {
        const days = Math.floor(this.delta / (1000 * 60 * 60 * 24));
        return transformValues(days);
    }

    getHours() {
        const hours = Math.floor((this.delta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        return transformValues(hours);
    }

    getMinutes() {
        const mins = Math.floor((this.delta % (1000 * 60 * 60)) / (1000 * 60));
        return transformValues(mins);
    }

    getSeconds() {
        const secs = Math.floor((this.delta % (1000 * 60)) / 1000);
        return transformValues(secs);
    }

    renderTimeMarkup() {
        this.timerRef.textContent = `${this.getDays()} ${this.getHours()} ${this.getMinutes()} ${this.getSeconds()}`;
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



