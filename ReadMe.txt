URL APLIKACIJE: https://web2-6projekt-2.onrender.com

SVOJSTVA:

1. interpolation/one-way binding - DA
	- varijabla totalWorkouts, .src/components/WorkoutTracker.vue -> linija 99
2. two-way binding - DA
	- input polje tijekom uređivanja treninga, .src/components/WorkoutTracker.vue -> linije 34, 104
3. methods - DA
	- korištene u .src/components/WorkoutTracker.vue -> linija 73, .src/components/EventComponent.vue -> linija 9, .src/components/MotivationPopup.vue -> linija 13
4. computed properties - NIJE IMPLEMENTIRANO
5. barem jedan scoped style - DA
	- korišten u gotovo svim komponentama
6. koristiti barem jedan lifecycle hook - NIJE IMPLEMENTIRANO
7. routing (više stranica) - DA
- aplikacija mora biti bookmarkable, tako da rade linkovi (ne samo na root, već i moj-web.com/stranica1, moj-web.com/stranica2)
- dinamičko usmjeravanje s 404 stranicom ("catch all")
   - implementiran u sklopu ./src/router/index.js dokumenta
8. (barem) dvije komponente - DA
- komponenta bez stanja, koristiti properties
	- komponenta ./src/components/WorkoutCounter.vue -> props na liniji 10
   - komponenta ./src/components/MotivationPopup.vue -> props na liniji 10
- komponenta sa stanjem
	- komponenta .src/components/EventComponent.vue -> koristi stanja iz storea, state varijabla workouts, linija 90
9. barem jedna komponenta mora emitirati barem jedan event - DA
	- komponenta .src/components/EventComponent.vue sadrži metodu kojom emitira poruku na liniji 19, a prikazuje se preko .src/components/WorkoutTracker.vue komponente na liniji 48
10. store (pinia) - DA
   - napravljen; ./stores/counter.js
	- sadrži akcije koje se koriste u .src/components/WorkoutTracker.vue komponenti
11. asinkroni dohvat podataka s backenda - NIJE IMPLEMENTIRANO

POKRETANJE APLIKACIJE:
- Unzip predane mape
- pozicioniranje u mapu
- npm install
- npm run dev