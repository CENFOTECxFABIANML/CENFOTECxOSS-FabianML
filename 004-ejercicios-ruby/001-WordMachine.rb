class WordMachine
  def self.process(commands)
    stack = []
    tokens = commands.split(' ')
    
    tokens.each do |token|
      case token
      # Regex para número entero (incluye negativos)
      when /^-?\d+$/
        stack.push(token.to_i)
        
      when 'DUP'
        return -1 if stack.empty?
        stack.push(stack.last)
        
      when 'POP'
        return -1 if stack.empty?
        stack.pop
        
      when '+'
        return -1 if stack.length < 2
        b = stack.pop
        a = stack.pop
        stack.push(a + b)
        
      when '-'
        return -1 if stack.length < 2
        b = stack.pop
        a = stack.pop
        stack.push(a - b)
        
      when '*'
        return -1 if stack.length < 2
        b = stack.pop
        a = stack.pop
        stack.push(a * b)
        
      else
        # Comando inválido
        return -1
      end
    end
    
    # Retornar elemento superior o -1 si la pila está vacía
    stack.empty? ? -1 : stack.last
  end
end

def word_machine(commands)
  WordMachine.process(commands)
end


puts "\n" + "="*60
print "Escribe tus comandos separados por espacios: "
entrada_usuario = gets.chomp

resultado_usuario = word_machine(entrada_usuario)

puts
puts "="*40
puts "RESULTADO DE TU ENTRADA"
puts "="*40
puts "Resultado: #{resultado_usuario}"

if resultado_usuario == -1
  puts "Error: Operación inválida o pila en estado incorrecto"
else
  puts "Operación exitosa"
end