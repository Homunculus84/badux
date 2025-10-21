import Alpine from 'alpinejs';
import { DateTime } from "luxon";

Alpine.data('selectcha', () => ({

    rawDate: {
        day: Array(2),
        month: Array(2),
        year: Array(4)
    },

    date: null,
    error: '',

    getDate() {
        const day = this.rawDate.day.join('');
        const month = this.rawDate.month.join('');
        const year = this.rawDate.year.join('');

        return DateTime.fromObject({ day, month, year });
    },

    submit() {
        const d = this.getDate();

        if(d.isValid) {
            this.date = d.toFormat('dd LLL yyyy')
            this.close();
        }
        else {
            this.randomize();
            this.error = 'Verification failed. Try again';
        }
    },

    init() {
        UIkit.util.on(this.$refs.modal, 'show', () => {
            this.randomize();
        });

        UIkit.util.on(this.$refs.modal, 'hidden', () => {
            this.clear();
        });
    },

    randomize() {
        this.rawDate.day = this.randomIntArray(2);
        this.rawDate.month = this.randomIntArray(2);
        this.rawDate.year = this.randomIntArray(4);
    },

    clear() {
        this.rawDate.day = Array(2);
        this.rawDate.month = Array(2);
        this.rawDate.year = Array(4);
        this.error = '';
    },

    open() {
        UIkit.modal(this.$refs.modal).show();
    },

    close() {
        UIkit.modal(this.$refs.modal).hide();
    },

    randomIntArray(size) {
        return Array.from({ length: size }, () => Math.floor(Math.random() * 10));
    },

}));

Alpine.data('selectchaSquare', () => ({

    value: null,
    enabled: true,
    pool: [],

    init() {
        this.$watch('value', value => { 
            if(value === undefined) { this.initPool(); }
            else { this.randomStyle(); }
        });
    },

    randomize() {
        if(this.pool.length === 0) { this.initPool(); }
        this.value = this.pool[Math.floor(Math.random() * this.pool.length)];
    },

    select() {
        this.enabled = false;
        this.pool = this.pool.filter(n => n !== this.value);

        setTimeout(() => {
            this.randomize();
            this.enabled = true;
        }, 2000);
    },

    randomStyle(el) {
        const randomColor = () => '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
        const randomDeg = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
        const randomFontSize = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

        this.$el.style.setProperty('--bg-color', randomColor());
        this.$el.style.setProperty('--fn-color', randomColor());
        this.$el.style.setProperty('--fn-size', randomFontSize(24, 48) + 'px');
        this.$el.style.setProperty('--tr-rotate', randomDeg(-30, 30) + 'deg');
        this.$el.style.setProperty('--tr-skew-x', randomDeg(-30, 30) + 'deg');
        this.$el.style.setProperty('--tr-skew-y', randomDeg(-30, 30) + 'deg');
        this.$el.style.setProperty('--delay', '6000ms');
    },

    initPool() {
        this.pool = Array.from({ length: 10 }, (_, i) => i);
    }

}));

Alpine.start();

