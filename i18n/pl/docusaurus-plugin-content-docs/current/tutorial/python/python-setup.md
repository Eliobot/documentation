---
sidebar_position: 1
---

# Konfiguracja Pythona

Pierwszym krokiem do rozpoczęcia programowania jest skonfigurowanie środowiska programistycznego (o IDE mówimy w języku angielskim). Ten, który Ci oferujemy, nazywa się Thonny i jest dostępny tutaj: https://thonny.org/

Po pobraniu i zainstalowaniu wersji odpowiadającej Twojemu komputerowi skonfigurujemy Thonny tak, aby był kompatybilny z Eliobotem.

![tekst alternatywny](/img/tutorial/python/python-setup/screenshot.png)

Podczas pierwszego uruchomienia Thonny poprosi Cię o wybranie języka, możesz następnie wybrać „francuski”, a następnie kliknąć „Chodźmy!”

![tekst alternatywny](/img/tutorial/python/python-setup/Capture-decran-2023-08-07-a-11.45.44-1024x565.png)

Teraz, gdy Thonny zostanie uruchomiony, połączymy z nim Eliobota. Podłącz Eliobota do komputera za pomocą kabla USB, następnie na samej górze okna kliknij „Uruchom”, a następnie „Konfiguruj interpreter”.

![tekst alternatywny](/img/tutorial/python/python-setup/Capture-decran-2023-08-07-a-11.48.08.png)

Następnie pojawi się okno z dwoma rozwijanymi menu, które należy skonfigurować jak poniżej. Pierwszy pyta o typ interpretera, w naszym przypadku jest to „CircuitPython”. Drugi prosi o wybranie portu, z którym chcesz się połączyć, a następnie wybierz „Eliobot”.

Czasami port jest rozpoznawany w systemie Windows jako „CircuitPython”, w tym przypadku użyjemy tego.

![tekst alternatywny](/img/tutorial/python/python-setup/Capture-decran-2023-08-07-a-11.49.57-2048x1401.png)

Po kliknięciu „OK” dioda Eliobota zapala się na biało, co oznacza, że ​​jest dobrze podłączony. Aby sprawdzić połączenie możemy wysłać do niego polecenie „help()” w konsoli na dole, powinien wówczas odpowiedzieć następującym komunikatem:

![tekst alternatywny](/img/tutorial/python/python-setup/Capture-decran-2023-08-07-a-11.51.05.png)

Ostatnim krokiem do uprzyjemnienia interfejsu jest wyświetlenie zawartości Eliobota. Aby to zrobić, przejdź na górę w „Widok”, a następnie „Pliki”

![tekst alternatywny](/img/tutorial/python/python-setup/Capture-decran-2023-08-07-a-11.51.33.png)

Jak widać, po lewej stronie właśnie pojawiła się nowa kolumna.

Poniżej „Urządzenia CircuitPython” znajdują się wszystkie pliki zawarte w Twoim Eliobocie.

Znajdziesz w szczególności plik „main.py”, program główny, który zawiera cały kod ostatniego programu, który wysłałeś do Eliobota. Rozszerzenie „.py” oznacza, że ​​jest to plik napisany w języku Python.

Otworzymy plik „main.py”, aby utworzyć nasz program.
Typowym przykładem jest wyświetlenie komunikatu „Hello world!” i w naszym przypadku użyjemy polecenia „print()”, aby wyświetlić go w konsoli.

Nasz program mieści się w jednej linii: print(“Witaj, świecie!”)

Aby zobaczyć wyświetlony komunikat wystarczy uruchomić program klikając w przycisk ze strzałką ▶️.

Powinieneś otrzymać następujący wynik:

![tekst alternatywny](/img/tutorial/python/python-setup/Capture-decran-2023-08-07-a-13.58.43-1.png)

I gotowe, właśnie stworzyłeś swoje pierwsze polecenie w Pythonie dla Eliobota!

W poniższym przykładzie wspólnie zobaczymy, jak zbudować program, który do działania nie potrzebuje komputera.