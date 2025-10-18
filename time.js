const offset = -3;
const clock = document.getElementById("clock");

function addzerototheleftifitwouldlookweirdifthezerowasntaddethisfunctionismademoreforlikeyouknowthehoursanditwouldlookveryveryweirdifitwasjustsomethinglike20_1_9orsomethinglikethatyouknowitwouldlookFAARbetterifitwas20_01_09nowseethatisverymuchlovelythankyouforcomingtomytedtalk(number) {
    if (number < 10) {
        return "0" + String(number)
    } else {
        return String(number)
    }
};

setInterval(() => {
    const unix = new Date();
    let hours = unix.getUTCHours() + offset;
    if (hours < 0) {
        hours += 24;
    } else if (hours >= 24) {
        hours -= 24;
    }
    hours = addzerototheleftifitwouldlookweirdifthezerowasntaddethisfunctionismademoreforlikeyouknowthehoursanditwouldlookveryveryweirdifitwasjustsomethinglike20_1_9orsomethinglikethatyouknowitwouldlookFAARbetterifitwas20_01_09nowseethatisverymuchlovelythankyouforcomingtomytedtalk(hours);
    const minutes = addzerototheleftifitwouldlookweirdifthezerowasntaddethisfunctionismademoreforlikeyouknowthehoursanditwouldlookveryveryweirdifitwasjustsomethinglike20_1_9orsomethinglikethatyouknowitwouldlookFAARbetterifitwas20_01_09nowseethatisverymuchlovelythankyouforcomingtomytedtalk(unix.getUTCMinutes());
    const seconds = addzerototheleftifitwouldlookweirdifthezerowasntaddethisfunctionismademoreforlikeyouknowthehoursanditwouldlookveryveryweirdifitwasjustsomethinglike20_1_9orsomethinglikethatyouknowitwouldlookFAARbetterifitwas20_01_09nowseethatisverymuchlovelythankyouforcomingtomytedtalk(unix.getUTCSeconds());
    clock.innerHTML = hours + ":" + minutes + ":" + seconds;
}, 100);