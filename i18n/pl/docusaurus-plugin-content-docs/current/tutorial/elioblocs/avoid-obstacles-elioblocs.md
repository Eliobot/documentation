---
sidebar_position: 3
---

# Unikaj przeszkód

W tym poradniku dowiemy się jak wykorzystać czujniki, aby samodzielnie korzystać z Eliobota i sprawić, że ominie on przeszkodę 😉


## Jak działają czujniki podczerwieni

Eliobot wyposażony jest w 4 czujniki podczerwieni (patrz schemat poniżej), które pozwalają mu wykrywać przeszkody.

![tekst alternatywny](/img/tutorial/elioblocs/avoid-obstacles-elioblocs/eliobot-sensors-position.png)

Ale technicznie jak to działa? 🤔

Każdy czujnik składa się z nadajnika i odbiornika. Rolą nadajnika jest wysyłanie światła w celu oświetlenia przeszkód. Światło zostanie następnie odbite w kierunku odbiornika, co pozwoli nam poznać ilość otrzymanego światła, a tym samym wydedukować odległość.

Im większa ilość światła, tym bliżej przeszkody.

![tekst alternatywny](/img/tutorial/elioblocs/avoid-obstacles-elioblocs/infrared-sensor.png)

## Wykryj przeszkodę

Aby rozpocząć ten samouczek, przejdź do naszego interfejsu programowania https://app.eliobot.com/.

Zaczynamy od pierwszego prostego przykładu: jeśli Eliobot wykryje przed sobą przeszkodę, zapala się czerwona dioda LED. Jeśli Eliobot nie wykryje żadnej przeszkody, dioda zgaśnie 💡

![tekst alternatywny](/img/tutorial/elioblocs/avoid-obstacles-elioblocs/obstacle-light-example.png)

Pierwszym krokiem jest wybranie akcji wykrywania przeszkód. W tym celu należy przejść do zakładki ```Obstacles``` następnie zaznaczyć blok ```przeszkoda jest z przodu```.

Można wybrać, który czujnik zastosować, w naszym przypadku będzie to czujnik przedni.

Prawdopodobnie zauważyłeś, że ten nowy klocek ma inny kształt i nie można go używać tak, jak dotychczas. Jest to wartość logiczna, której będziemy mogli użyć jako warunku w bloku ```Jeśli... zrób... w przeciwnym razie```.

Na koniec, aby wyraźnie określić, kiedy wykryta została przeszkoda, wyświetlamy kolor z blokiem ```Pokaż kolor``` przy części ```wtedy```, a ```Wyłącz światło``` przy części ```w przeciwnym razie```.

Wybierz wybrany kolor, jesteś artystą! 😉

![tekst alternatywny](/img/tutorial/elioblocs/avoid-obstacles-elioblocs/color-when-obstacle.png)

## Omiń przeszkodę

Teraz, gdy Eliobot jest w stanie wykryć przeszkodę, będziemy mogli mu powiedzieć, co ma zrobić, gdy ją napotka. Najprostszą czynnością jest po prostu zmiana kierunku poprzez obrót w prawo lub w lewo.

![tekst alternatywny](/img/tutorial/elioblocs/avoid-obstacles-elioblocs/obstacle-turn-example.png)

Ponieważ większość pracy została już wykonana w powyższym programie, zajmiemy się nią ponownie, dodając ruchy oprócz poleceń dla diody LED.

Najpierw definiujemy ruch, jaki Eliobot ma wykonać w momencie napotkania przeszkody, w naszym przypadku wykonaj ćwierć obrotu w prawo. Aby to zrobić możesz wziąć blok ```Obróć w prawo o 90 stopni``` w zakładce ```Ruchy``` i dodać go poniżej koloru czerwonego.

Następnie definiujemy ruch, który należy wykonać, gdy nie ma przeszkody, czyli ruch do przodu. Blok ```Jedź do przodu``` znajdziesz również w zakładce ```Ruchy```, który zostanie umieszczony w części ```w przeciwnym razie```

![tekst alternatywny](/img/tutorial/elioblocs/avoid-obstacles-elioblocs/turn-when-obstacle.png)


### Transfer programu

Aby przetestować program na Eliobocie, należy podłączyć go do komputera kablem USB i kliknąć przycisk „Program”.

Następnie zobaczysz migającą diodę LED, a po zakończeniu możesz odłączyć Eliobota, aby zobaczyć wynik! 🙂
