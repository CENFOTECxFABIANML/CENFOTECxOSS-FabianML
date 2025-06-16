# Función para verificar si una cadena es palíndromo
def es_palindromo?(cadena)
  cadena == cadena.reverse
end

# Función principal para encontrar el palíndromo más largo
def palindromo_mas_largo(texto)
  # Caso especial
  return "" if texto.empty?
  
  palindromo_actual = ""
  
  # Probar todos los posibles substrings
  i = 0
  while i < texto.length
    j = i
    while j < texto.length
      substring = texto[i..j]
      
      # Si es palíndromo y es más largo que el actual
      if es_palindromo?(substring) && substring.length > palindromo_actual.length
        palindromo_actual = substring
      end
      
      j += 1
    end
    i += 1
  end
  
  palindromo_actual
end


puts "\n" + "="*50
puts "INGRESA TU PROPIA CADENA DE TEXTO"
puts "="*50

print "Escribe una cadena para encontrar su palíndromo más largo: "
entrada_usuario = gets.chomp

resultado_usuario = palindromo_mas_largo(entrada_usuario)

puts
puts "Palíndromo más largo encontrado: '#{resultado_usuario}'"
puts "Longitud del palíndromo: #{resultado_usuario.length}"

# Verificar que realmente es un palíndromo
if resultado_usuario.empty?
  puts "No se encontraron palíndromos en tu cadena."
end