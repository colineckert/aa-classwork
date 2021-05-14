class BrowserHistory {
    constructor(homepage) {
        // create first node in history linked list
        this.page = {
            url: homepage,
            prev: null,
            next: null,
        }
    }

    visit(url) {
        // create new node in history list
        this.page.next = {
            url,
            prev: this.page,
            next: null,
        }
        // move to latest node
        this.page = this.page.next;
    };

    back(steps) {
        // move back until first page or exhaust steps
        while (this.page.prev && steps) {
            this.page = this.page.prev;
            steps--;
        }
        return this.page.url;
    };

    forward(steps) {
        // move forward until last page or exhaust steps
        while (this.page.next && steps) {
            this.page = this.page.next;
            steps--;
        }
        return this.page.url;
    };
};