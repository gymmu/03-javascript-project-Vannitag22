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
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

// irgendwie anders machen, Zähler hinzufügen?

    if (currentElement === "e") {
      String.length.count(currentElement === "e")
      }
    else if (currentElement === "E") {
      String.length.count(currentElement === "E")
    }
    else {
      result.push(currentElement)
    }  
    
  }
  return result.join("")
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

export function aufgabe08(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (currentElement === "e") {
      currentElement === "3" //ersetze 'e' mit '3'
      }
   
    else {
      result.push(currentElement)
    }
  
  }
  return result.join("")
}