class Formatter {
  //add static methods here
  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-'-' ']+/g, '')
  }

  static titleize(string) {
    let array = string.split(" ")
    let capString = array.map(function(element) {
      
      if (element != 'the' && element != 'a' && element != 'an' && element!= 'but' && element != 'of' && element != 'and' && element != 'for' && element != 'at' && element != 'by' && element != 'from') {
        return Formatter.capitalize(element)
      } else {
        return element
      }
    }).join(" ")
    return Formatter.capitalize(capString)
  }
}