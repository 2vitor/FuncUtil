def random(len)
  [*'a'..'z', *'A'..'Z', *'0'..'9'].shuffle[0, len].join
end

random(5) # => 'h4kEz'