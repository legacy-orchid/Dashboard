new Vue({
    el: '#loading-bar',
    ready: function () {
        var self = this;
        self.progress = 10;
        for (var i = 0; i < 30; i++) {
            if (i > 20 && i < 29) {
                setTimeout(function () {
                    self.progress += 5;
                }, 50 * i);
            } else {
                setTimeout(function () {
                    self.progress++;
                }, 10 * i);
            }
        }
        setTimeout(function () {
            self.progress = 100;
        }, 1500);
    },
    data: {
        progress: 0,
        status: "doesn't start yet",
        error: false,
        direction: false,
    }
});