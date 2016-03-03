module Swap
  def swap(input,lang)
    output = ''
    if input == 'guide' and lang == 'es'
      output << 'guía'
    elsif input == 'Mapping' and lang == 'es'
      output << 'Mapeando'
    else 
      output << input
    end
  end
end
Liquid::Template.register_filter(Swap)