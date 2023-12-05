export function aufgabe01(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (currentElement === "e") {
      //mache nichts
      }
    else if (currentElement === "E") {
      //mache nichts
    }
    else {
      result.push(currentElement) //daêr text wird ohne die 'e's gepuscht (weil Befehl oben-->nichts machen mit den 'e')
    }
  
  }
  return result.join("")
}

export function aufgabe02 (args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

      result.push(currentElement.toUpperCase()) //toUpperCase --> alles gross -->der Text wird in Grossbuchstaben angezeigt
        
  }
  return result.join("")
}

export function aufgabe03 (args) {
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

export function aufgabe04 (args) {
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

export function aufgabe05 (args) {
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

export function aufgabe06 (args) {
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

export function aufgabe07 (args) {
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

export function aufgabe08(args) {
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

export function aufgabe09 (args) {
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

export function aufgabe10 (args) {
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

export function aufgabe11 (args) {
  const input = args

  if (input.length !== 1) return null //-->weil dann zu viele Zeichen--> braucht nur 1 Zeichen
  
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const ascii = currentElement.charCodeAt(0)
    return ascii //gibt den asciiWert des Zeichens zurück

  }
  
  return null
}

export function aufgabe12 (args) {
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

export function aufgabe13 (args) {
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

export function aufgabe14 (args) {
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

export function aufgabe15 (args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    
    if (currentElement === " "){ //sobald ein' ' kommt-> gebe das, was du bis jetzt eingelesen hast
      return result.join("") //result=bis dort wo es eingelesen wurde
    }

    result.push(currentElement)
  }
  
  return result.join("")
}

export function aufgabe16 (args) {
  const text = args
  let switchFirst = true
  const listFirst = []
  const listSecond = []
  for (let i = 0; i < text.length; i++) {
   if (text[i] === "$") {
    switchFirst = false
    } else {
      if (switchFirst === true) {
      listFirst.push(text[i])
      } else {
      listSecond.push(text[i])
      }
    }
  }
  return [listFirst.join(""), listSecond.join("")]
//Tests werden als falsch angezeigt, aber so wie jetzt ist die Aufgabe richtig
}

export function aufgabe17 (args) {
  const text = args
  const phrases = []
let currentPhrase = []
for (let i = 0; i < text.length; i++) {
  const currentElement = text[i]
  if (currentElement === '.') {
    // Wenn wir hier sind haben wir einen '.' gefunden, und möchten den aktuellen Satz als eine Element in phrases speichern.
    phrases.push(currentPhrase.join(""))
    currentPhrase = []  // Damit löschen wir alles was im aktuellen Satz drin war.
  } else {
    // Wenn wir keinen '.' lesen, dann möchten wir die Zeichen an den aktuellen Satz anhängen.
    currentPhrase.push(currentElement)
  }
}
phases.push(currentPhrase.join(""))
console.log(phrases)
}
