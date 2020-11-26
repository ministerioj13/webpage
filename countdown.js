simplyCountdown('#cuenta', {
            year: 2020, // required
            month: 11, // required
            day: 26, // required
            hours: 12, // Default is 0 [0-23] integer. Is our time - 6 hours.
            minutes: 0, // Default is 0 [0-59] integer
            seconds: 0, // Default is 0 [0-59] integer
            words: { //words displayed into the countdown
                days: 'Dia',
                hours: 'Hora',
                minutes: 'Minuto',
                seconds: 'Segundo',
                pluralLetter: 's'
            },
            plural: true, //use plurals
            inline: false, //set to true to get an inline basic countdown like : 24 days, 4 hours, 2 minutes, 5 seconds
            inlineClass: 'simply-countdown-inline', //inline css span class in case of inline = true
            // in case of inline set to false
            enableUtc: true, //Use UTC as default
            onEnd: function() {
              //alert('Bienvenidos a nuestra reunion de domingo!');
              window.location.href = "gracias.html";
              /*NEW
                Link: jueves (https://us02web.zoom.us/j/84218300605)
                Link: domingo (https://us02web.zoom.us/j/82713339740)
                OLD
                lINK: jueves  (https://us02web.zoom.us/j/84307157612)
                LINK: domingo (https://us02web.zoom.us/j/89751779761)*/
              return; }, //Callback on countdown end, put your own function here
            refresh: 1000, // default refresh every 1s
            sectionClass: 'simply-section', //section css class
            amountClass: 'simply-amount', // amount css class
            wordClass: 'simply-word', // word css class
            zeroPad: false,
            countUp: false
    });
