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

    result.push(currentElement.toLowerCase()) // toLowerCase --> alle Buchstaben klein
    
  }

  return result.join("")
}

export function aufgabe07 (args) {
  const input = args
  const result = []
for (let i = 0; i < input.length; i++) {
  const currentElement = input[i]
  
  if (currentElement = "und") {
   //weglassen
  }
  
  else {
    result.push(currentElement)
  }
}

  return result.join("")
}

export function aufgabe08(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (currentElement === "e") {
      result.pusch(3)
      }
   
    else {
      result.push(currentElement)
    }
  
  }
  return result.join("")
}