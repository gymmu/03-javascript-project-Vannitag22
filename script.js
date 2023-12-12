export function aufgabe01(args) { //keine 'e' pushen
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) { //man geht die Liste Zeichen für Zeichen durch
    const currentElement = input[i]

    if (currentElement === "e") {
      //mache nichts
      }
    else if (currentElement === "E") {
      //mache nichts
    }
    else {
      result.push(currentElement) //der text wird ohne die 'e's gepuscht (weil Befehl oben-->nichts machen mit den 'e')
    }
  
  }
  return result.join("")
}

export function aufgabe02 (args) { //alles in Grossbuchstaben
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

      result.push(currentElement.toUpperCase()) //toUpperCase-->alles gross-->der Text wird in Grossbuchstaben angezeigt
        
  }
  return result.join("")
}

export function aufgabe03 (args) { //'e's und 'E's zählen
  const input = args
  const result = []
  let count = 0
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e") {
      count = count +1 //wenn es ein 'e' liesst, dann soll der Zähler um 1 hochgehen
      }
    else if (currentElement === "E") {
      count = count +1 //wenn es ein 'E' liesst, dann soll der Zähler um 1 hochgehen
    }
    else {
      result.push(currentElement)
    }  
    //es wird gezählt, wie viele 'e' und 'E' vorkommen
  }
  return count //result.join("") wäre ganze Liste zurücksetzen, hier aber nur Zähler
}

export function aufgabe04 (args) { //Wörter (->Leerzeichen) zählen
  const input = args
  let count = 1 //den Zähler von 1 starten lasse, weil wenn von 0 starten, dann wäre ein "Wort" zu wenig (-->es ist immer 1 Leerzeichen weniger als die Anz. Worte)
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === " " ) { //Leerzeichen Zählen, weil ein Wort ist immer von Leerzeichen umgeben
      count = count +1
    }
  }
  return count //--> soll den Zähler zurückgeben
}

export function aufgabe05 (args) { //testen ob ein Grossbuchstabe vorhanden ist
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (currentElement === " ") {

    } else if (currentElement === ".") {

    }
    else if (currentElement === currentElement.toUpperCase()) {
      return true //wenn es ein Grossbuchstabe ist, ist die Funktion richtig
    }
    
  }

  return false //ist falsch, weil wenn kein Grossbuchstabe vorhanden ist, kommt es nicht in die obere Schleife, somit ist die Funktion falsch
}

export function aufgabe06 (args) { //testen ob ein Sonderzeichen (->Punkt) vorhanden ist
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    
    if (currentElement === ".") {
      return true //wenn ein Punkt vorkommt, ist die Funktion richtig
    }
  }
  return false
}

export function aufgabe07 (args) { //testen ob 'und' vorhanden ist
  const input = args
  const result = []
for (let i = 0; i < input.length; i++) {
  const currentElement = input[i]
  
  if (currentElement === "u") { //currentElement ist ein Buchstabe, kann also nicht mehrere Buchstaben (ein Wort, bsp: und) sein--> deswegen eine "Auflistung", die das Wort ergibt
    if (input[i+1] === "n") { //input[i] = aktuelle Position/Zeichen
      if (input[i+2] === "d") //input[i+x] = das Zeichen x weiter als [i] 
      return true
    }
  }
  
}

  return false
}

export function aufgabe08(args) { //'e' durch '3' ersetzen
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (currentElement === "e") {
      result.push(3) //soll das 'e' durch '3' ersetzen
      }
   
    else {
      result.push(currentElement)
    }
  
  }
  return result.join("")
}

export function aufgabe09 (args) { //testen ob die Eingabe sechs Zeichen lang ist
  const input = args
  const result = []
  let length = 0
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    length++ //für jedes Zeichen, geht der Zähler um 1 hoch --> Zählt die Zeichen
  }
  if (length === 6 ){
    return true // wenn die Zeichenkette 6 Zeichen lang ist, dann ist die Funktion richtig
  } else { // man könnte noch (length !== 6 (--> wenn es nicht 6 Zeichen lang ist)) hinschreiben, bringt aber nicht mehr (und auf webseite verschwinden die aufgaben)
     return false
  }
}

export function aufgabe10 (args) { //testen ob die Eingabe ein korrekter RGB Hexcode ist.
  const input = args
  
  if (input.length !== 7) return false // ! = wenn das nicht der fall ist; / weil Hexcode hat 7 Zeichen Bsp unten
  if (input[0] !== "#") return false // # -> ist ein Hexcode --> bsp #OAB2FF (hier: OA=rot, B2=grün, FF=blau)

  for (let i = 1; i < input.length; i++) {
    const currentElement = input[i]
    const ascii = currentElement.charCodeAt(0)

    if ( 48 <= ascii && ascii <= 57) {
      // ist eine Ziffer
    } else if ( 65 <= ascii && ascii <= 70) {
       //ist A-F
    } else {
    return false
    }
  }

return true
}

export function aufgabe11 (args) { //den asciiWert eines einzelnen Zeichens angeben
  const input = args

  if (input.length !== 1) return null //-->weil dann zu viele Zeichen--> braucht nur 1 Zeichen
  
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const ascii = currentElement.charCodeAt(0)
    return ascii //gibt den asciiWert des Zeichens zurück

  }
  
  return null
}

export function aufgabe12 (args) { //Position des 1. 'e' angeben
  const input = args
  const result = []
  let position = 0
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    
    if (currentElement === "e" ){
      return position //--> gibt die Position zurück, an der das erste 'e' steht
    }
    position++ //zählt die Position hoch
  }

  return -1
}

export function aufgabe13 (args) { //Position des letzten 'e' angeben
  const input = args
  const result = []
  for (let i = input.length-1; i >= 0; i--) { //input.length-1 letzte position; Zählrichtung umdrehen
    const currentElement = input[i]
    
    if (currentElement === "e" ){
      return i //i ist die Position des currentElement
    }
  }

  return -1
}

export function aufgabe14 (args) { //Position des 3. 'e' angeben
  const input = args
  let pos = -1
  let countE = 0
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    
    if (currentElement === "e"){
      countE++ // um 1 hochzählen
    if (countE === 3) //wenn es bei 3 angelangt
      pos = i        // position des 3.E zurückgeben
    }
  }

  return pos // oder -1
}

export function aufgabe15 (args) { //die Eingabe bis zum ersten ' ' zurückgeben

  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    
    if (currentElement === " "){ //sobald ein ' ' kommt-> gebe das, was du bis jetzt eingelesen hast
      return result.join("") //result=bis dort wo es eingelesen wurde
    }

    result.push(currentElement)
  }
  
  return result.join("")
}

export function aufgabe16 (args) { //die Eingabe bis zum '$' als 1. Teil der Liste einlesen, und den Rest als den 2. Teil
  
  const text = args
  let switchFirst = true //Schalter --> wir sind jetzt im 1. teil der liste
  const listFirst = []
  const listSecond = []
  for (let i = 0; i < text.length; i++) {
   if (text[i] === "$") { //das '$' trennt den Text in 2 Teile
    switchFirst = false //schalter wird umgestellt auf 2. teil der liste
    } else {
      if (switchFirst === true) { //wenn es in der 1. liste ist
      listFirst.push(text[i]) //die 1. Liste pushen
      } else { //wenn es in der 2. liste ist (also nicht in der 1. liste)
      listSecond.push(text[i]) //die 2. Liste pushen
      }
    }
  }
  return [listFirst.join(""), listSecond.join("")]
//Tests werden als falsch angezeigt, aber so wie jetzt ist die Aufgabe richtig
}

export function aufgabe17 (args) { //die Eingabe wird mit einem ',' getrennt --> als 1. Teil der Liste einlesen, Rest als 2. Teil
  const text = args
  const phrases = []
let currentPhrase = []
for (let i = 0; i < text.length; i++) {
  const currentElement = text[i]
  if (currentElement === ',') {
    // Wenn wir hier sind haben wir ein ',' gefunden, und möchten den aktuellen Satz als ein Element in phrases speichern.
    phrases.push(currentPhrase.join(""))
    currentPhrase = []  // Damit löschen wir alles was im aktuellen Satz drin war.
  } else {
    // Wenn wir kein ',' lesen, dann möchten wir die Zeichen an den aktuellen Satz anhängen.
    currentPhrase.push(currentElement)
  }
}
phrases.push(currentPhrase.join(""))
return phrases
//Test werden falsch angezeigt, sind aber richtig
}

export function aufgabe18 (args) { //Sie heissen `name` und sind `age` Jahre alt, `name` und `alter` durch Eingaben ersetzen
  const text = args
  let switchFirst = true //Schalter --> wir sind jetzt im 1. teil der liste
  const listFirst = []
  const listSecond = []
  for (let i = 0; i < text.length; i++) {
   if (text[i] === " ") { //das erste ' ' trennt den Text in 2 Teile
    switchFirst = false //schalter wird umgestellt auf 2. teil der liste
    } else {
      if (switchFirst === true) {
      listFirst.push(text[i])
      } else {
      listSecond.push(text[i])
      }
    }
  }
  const name = listFirst.join("") //join macht das wieder zu einer Zeichenkette
  const age = listSecond.join("") //der 1. Teil der Liste heisst 'name' und der 2. Teil heisst 'age'
  
  return "Sie heissen " + name + " und sind " + age + " Jahre alt" //Die Listen in 'name' und 'age' einsetzten
}

export function aufgabe19 (args) { //die Zeichen verdoppeln
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
   result.push(currentElement)
   result.push(currentElement) //es wird 2mal hingeschrieben --> die einzelnen Zeichen doppelt hingeschrieben
  }
  
  return result.join("")
}

export function aufgabe20 (args) { //testen ob nach jedem '.' ein ' ' steht
  const input = args
  const result = []
for (let i = 0; i < input.length; i++) {
  const currentElement = input[i]

  if (currentElement === ".") {
    if (input[i+1] === " ") { //das folgende Zeichen ist ein ' '
    return true
  }
  }
}

return false
}

export function aufgabe21 (args) { //die Eingabe umgekehrt hinschreiben
  const input = args
  const result = []
  for (let i = input.length-1; i >= 0; i--) { //input.length-1 letzte position; Zählrichtung umdrehen --> von hinten nach vorne einlesen
    const currentElement = input[i]
  
    result.push(currentElement) //die Zeichen werden in umgekehrter Reihenfolge geschrieben, weil oben rückwärts gelesen wird
  }

  return result.join("")
}

export function aufgabe22 (args) { //Zeichen bis 'k' (1.Teil der Liste) durch '_' ersetzen
  const input = args
  const result = []
  let switchFirst = true
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "k") { //sobald ein 'k' kommt
        switchFirst = false //lege den schalter um
    }

    if (switchFirst === true) { //bevor ein 'k' kommt
      result.push("_") // ersetze alles durch'_'
    } else { //nachdem ein 'k' kommt
      result.push(currentElement) //pushe den Text normal
    }
  }
  
  return result.join("")
}

export function aufgabe23 (args) { //erstes Zeichen zusätzlich nochmal vorne und hinten hinzufügen
  const input = args
  const result = []

  const firstElement = input[0]//input[0] = 1. Zeichen im Text

  result.push(firstElement) //nur 1. Zeichen pushen

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
  
    result.push(currentElement) //alle Zeichen (inkl. 1. Zeichen) pushen --> 1. Zeichen wird 2x gepusht
  }

  result.push(firstElement) //nochmal 1. Zeichen pushen--> wird hinten angehängt
  
  return result.join("")
}

export function aufgabe24 (args) { // 1. und letztes Zeichen vertauschen
  const input = args
  const result = []

  if (input.length === 1) return input //wenn der Text nur 1 Zeichen lang ist, dann den Text normal pushen, weil das Zeichen gleichzeitig 1. & letztes Zeichen

  const firstElement = input[0] //input[0] = 1. Zeichen im Text
  const lastElement = input[input.length - 1] //input[input.length - 1] = letzte Zeichen im Text

  result.push(lastElement) //zuerst das letzte Zeichen pushen

  for (let i = 1; i < input.length - 1; i++) { //i = 1, weil 1. Zeichen auslassen; input.length - 1, weil letztes Zeichen auslassen
    const currentElement = input[i]
    result.push(currentElement) //alle Zeichen (ohne 1. und letztes Zeichen) pushen
  }
  result.push(firstElement) //erst nach der Schleife (den Text von links nach rechts ohne 1.&letztes Zeichen pushen) das 1. Zeichen pushen

  return result.join("")
}

export function aufgabe25 (args) { //mittlere Zeichen entfernen
  const input = args
  const result = []

  //const even = input.length % 2 === 0 //true, wenn die Länge durch 2 teilbar sind; % --> Rest, wenn Rest = 0, dann ducrh 2 teilbar --> gerade (even)

  const middleElement = input[Math.floor(input.length / 2)] //input[Math.floor(input.length / 2)] = Länge das Textes durch 2 teilen --> mittlere Position des Textes 

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    
    if (currentElement === middleElement) {
      //mittleres Zeichen nicht pushen  
    }
    else result.push(currentElement) 
    }
  

  return result.join("")
}

export function bubbleSort (args) {
  const text = args
const list = text.split("") // Text in Liste umwandeln, damit Elemente vertaschen möglich
for (let i = 0; i < list.length - 1; i++) {
  const currentElement = list[i]
  const nextElement = list[i + 1]
  if (currentElement.charCodeAt(0) > nextElement.charCodeAt(0)) {
    // Reihenfolge stimmt nicht --> Elemente tauschen
    const tmp = list[i + 1]
    list[i + 1] = list[i]
    list[i] = tmp
    i = -1 // wenn etwas vertauscht, dann wieder von vorne starten
  }
}
const result = list.join("")
return result
}