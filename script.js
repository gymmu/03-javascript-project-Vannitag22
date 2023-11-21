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
      result.push(currentElement)
    }
  
  }
  return result.join("")
}

export function aufgabe02 (args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

      result.push(currentElement.toUpperCase()) //toUpperCase --> alles gross
        
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
      count = count +1
      }
    else if (currentElement === "E") {
      count = count +1
    }
    else {
      result.push(currentElement)
    }  
    
  }
  return count //result.join("") wäre ganze Liste zurücksetzen, hier aber nur Zähler
}

export function aufgabe04 (args) {
  const input = args
  let count = 1
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === " " ) { //Leerzeichen Zählen, weil ein Wort ist immer von Leerzeichen umgeben
      count = count +1
    }
  }
  return count 
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
      return true
    }
    
  }

  return false
}

export function aufgabe06 (args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    
    if (currentElement === ".") {
      return true
    }
  }
  return false
}

export function aufgabe07 (args) {
  const input = args
  const result = []
for (let i = 0; i < input.length; i++) {
  const currentElement = input[i]
  
  if (currentElement === "u") { //currentElement ist ein Buchstabe, kann also nicht mehrere Buchstaben (ein Wort) sein
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
      result.push(3)
      }
   
    else {
      result.push(currentElement)
    }
  
  }
  return result.join("")
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