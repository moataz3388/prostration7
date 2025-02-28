document.getElementById('city-select').addEventListener('change', function() {
    let city = this.value;
    let prayerTimes = {
        tripoli: { fajr: '05:15', dhuhr: '12:30', asr: '15:45', maghrib: '18:20', isha: '19:45' },
        benghazi: { fajr: '05:10', dhuhr: '12:25', asr: '15:40', maghrib: '18:15', isha: '19:40' },
        misrata: { fajr: '05:12', dhuhr: '12:28', asr: '15:43', maghrib: '18:18', isha: '19:42' },
        sabha: { fajr: '05:20', dhuhr: '12:35', asr: '15:50', maghrib: '18:25', isha: '19:50' }
    };
    
    document.getElementById('fajr').textContent = prayerTimes[city].fajr;
    document.getElementById('dhuhr').textContent = prayerTimes[city].dhuhr;
    document.getElementById('asr').textContent = prayerTimes[city].asr;
    document.getElementById('maghrib').textContent = prayerTimes[city].maghrib;
    document.getElementById('isha').textContent = prayerTimes[city].isha;
});