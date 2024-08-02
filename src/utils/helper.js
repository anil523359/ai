/********************Text - Animations********************** */
export const consoleText = (words, id, colors) => {
    if (colors === undefined) colors = ['#fff'];
    let visible = true;
    let con = document.getElementById('terminalConsole');
    let letterCount = 1;
    let x = 1;
    let waiting = false;
    let target = document.getElementById(id)
    target.setAttribute('style', 'color:' + colors[0])
    window.setInterval(function () {

        if (letterCount === 0 && waiting === false) {
            waiting = true;
            target.innerHTML = words[0].substring(0, letterCount)
            window.setTimeout(function () {
                let usedColor = colors.shift();
                colors.push(usedColor);
                let usedWord = words.shift();
                words.push(usedWord);
                x = 1;
                target.setAttribute('style', 'color:' + colors[0])
                letterCount += x;
                waiting = false;
            }, 1000)
        } else if (letterCount === words[0].length + 1 && waiting === false) {
            waiting = true;
            window.setTimeout(function () {
                x = -1;
                letterCount += x;
                waiting = false;
            }, 1000)
        } else if (waiting === false) {
            target.innerHTML = words[0].substring(0, letterCount)
            letterCount += x;
        }
    }, 120)
    window.setInterval(function () {
        if (visible === true) {
            con.className = 'terminal-text-console-underscore terminal-text-hidden'
            visible = false;
        } else {
            con.className = 'terminal-text-console-underscore'
            visible = true;
        }
    }, 400)
}

export default class TextScramble {
    constructor(el) {
        this.el = el
        this.chars = '!<>-_\\/[]{}—=+*^?#________'
        this.update = this.update.bind(this)
    }
    setText(newText) {
        const oldText = this.el.innerText
        const length = Math.max(oldText.length, newText.length)
        const promise = new Promise((resolve) => this.resolve = resolve)
        this.queue = []
        for (let i = 0; i < length; i++) {
            const from = oldText[i] || ''
            const to = newText[i] || ''
            const start = Math.floor(Math.random() * 40)
            const end = start + Math.floor(Math.random() * 40)
            this.queue.push({ from, to, start, end })
        }
        cancelAnimationFrame(this.frameRequest)
        this.frame = 0
        this.update()
        return promise
    }
    update() {
        let output = ''
        let complete = 0
        for (let i = 0, n = this.queue.length; i < n; i++) {
            let { from, to, start, end, char } = this.queue[i]
            if (this.frame >= end) {
                complete++
                output += to
            } else if (this.frame >= start) {
                if (!char || Math.random() < 0.28) {
                    char = this.randomChar()
                    this.queue[i].char = char
                }
                output += `<span class="scramble-text-dud">${char}</span>`
            } else {
                output += from
            }
        }
        this.el.innerHTML = output
        if (complete === this.queue.length) {
            this.resolve()
        } else {
            this.frameRequest = requestAnimationFrame(this.update)
            this.frame++
        }
    }
    randomChar() {
        return this.chars[Math.floor(Math.random() * this.chars.length)]
    }
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.nav')) {
        let dropdowns = document.getElementsByClassName("nav-sub-menu");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('active')) {
                openDropdown.classList.remove('active');
            }
        }
    }
}

function isElementOutViewport(el) {
    let rect = el.getBoundingClientRect();
    return rect.bottom < 0 || rect.right < 0 || rect.left > window.innerWidth || rect.top > window.innerHeight;
}

export const verticalProgress = (elmId, wrpId) => {
    const progressBar = document.getElementById(elmId);
    const elmWrpr = document.getElementById(wrpId);
    const roadmapItems = document.getElementsByClassName("roadmap-item");
    const roadmapTip = document.getElementsByClassName("progress-bar-tip");
    window.onscroll = () => {
        if (!elmWrpr) {
            return false;
        }
        if (isElementOutViewport(elmWrpr) === false) {
            let wrpr = elmWrpr.getBoundingClientRect();

            const scrolled = (wrpr.height - wrpr.top) - 350;

            if (scrolled <= wrpr.height) {
                progressBar.style.height = (scrolled) + "px";
            } else {
                progressBar.style.height = (wrpr.height) + "px";
            }

            let i;
            for (i = 1; i < roadmapItems.length; i++) {
                let item = roadmapItems[i].getBoundingClientRect();
                let rmapTip = roadmapTip[0].getBoundingClientRect();
                let itemNum = roadmapItems[i].getElementsByClassName('roadmap-num');

                if (itemNum.length > 0) {
                    if ((rmapTip.top + 60) >= item.top) {
                        itemNum[0].classList.add('green');
                    } else {
                        itemNum[0].classList.remove('green');
                    }
                }
            }
        }
    };
}