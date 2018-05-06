# Something sort of a for loop
5.times do |i|
    puts "#{i} : Hello World"
end

# Arrays in Ruby
array = [1,6,2,4,8,4,0,3]
array << 10
array2 = array.sort
array.sort.each do |i|
    puts "#{i}: Array"
end

# Hashes => (much like Associative array in PHP, Objects in JS)
hash = {
    option1: 1,
    option2: 2,
    option3: 3,
}

# Functions coupled with conditionals
def water_status(minutes)
    if(minutes < 7)
        puts "Cold ish";
    elsif(minutes == 7)
        puts "I'm Boiling"
    else 
        puts "HOOOOOOOOOOOOOOOOOOOT"
    end
end

# Classes
class Student
    attr_accessor :first_name, :last_name, :primary_phone_number

    def introduction
        puts "Hi I'm #{first_name}"
    end     # Method introduction End

    def favourite_number
        return 7
    end

    def some_loop
        count = 0
        loop do
            puts "Input: "
            line = gets
            break if count == 2
            # ...
            
            count++
        end
    end 
end         # Class End

# Inititalising a Class
bami = Student.new
bami.first_name = "Bami"
bami.introduction
puts bami.favourite_number

