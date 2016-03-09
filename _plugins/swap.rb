module Swap
  def swap(input,lang)
    output = ''
    if input == 'guide' and lang == 'es'
      output << 'guía'
    elsif input == 'Mapping' and lang == 'es'
      output << 'Mapeando'
    elsif input == 'Mapping with' and lang == 'es'
      output << 'Mapeando con'
    elsif input == 'back to' and lang == 'es'
      output << 'de regreso'
    elsif input == 'Next' and lang == 'es'
      output << 'Siguiente'
    elsif input =='This is the last guide in this category.'  and lang == 'es'
      output << 'Esta es la última guía en esta categoría.'
    else 
      output << input
    end
  end
end
Liquid::Template.register_filter(Swap)