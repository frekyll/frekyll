---
layout: post
title: "A Few Days with Ruby"
date: 2018-06-30
---

Last month I spent eight consecutive days learning the Ruby language. I wasn't able to continue coding daily. I may write on that later. But, I'm inspired to keep going and wanted to recap what I've learned.

## Flexible and Expressive

Ruby is flexible. There's a lot of ways to accomplish something. I like that because it feels very expressive. For example, all of these scripts return the same result.

```ruby
number = 1
while number <= 10
  puts number
  number += 1
end

number = 1
until number > 10
  puts number
  number += 1
end

for number in 1..10
  puts number
end

number = 0
loop do
  number += 1
  print "#{number}"
  break if number >= 10
end
```

## Storing and Looping

Arrays are objects that store a collection of things. They can store things like numbers, strings, and boolean values. Arrays store their items in order. You can access any of the items or iterate through them with a loop.

```ruby
numbers = [1, 2, 3, 4, 5]

# One way to loop
numbers.each { |item| puts item }

# Another way to loop
numbers.each do |item|
  puts item
end
```

Hashes are another way to store things. They're useful when you want to store a key and value. You can loop through them just like arrays.

```ruby
# One way to create a hash
secret_identities = Hash.new
secret_identities["The Batman"] = "Bruce Wayne"

# Another way to create a hash
secret_identities {
  "The Batman" => "Bruce Wayne"
}

# Looping through the hash
secret_identities.each do |hero, name|
  puts "#{hero}: #{name}"
end
```

## A Little More Practical

Methods make code reusable. They're essentially a way to package some code and give it a name. There's a lot of them already defined in the language. Ruby's built-in `.sort!` method can be used to sort array items in alphabetical order.

```ruby
books = [
  "Charlie and the Chocolate Factory",
  "War and Peace",
  "Utopia",
  "A Brief History of Time"
]

# Sort in descending order
books.sort! do |first, second|
  second <=> first
end
```

You can also create your own. Here's an example where I check to see if a number is divisible by three.

```ruby
def by_three?(number)
  if number % 3 == 0
    return true
  else
    return false
  end
end
```

I'm having fun learning! It's exciting to develop this foundation, so I can move into coding real-world projects soon. Writing these examples was helpful for me. And, maybe you found some of them helpful too. That'd be rad.
