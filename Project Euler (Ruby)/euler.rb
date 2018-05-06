require 'Prime'

def sum_of_multiples(count)
    multiples = []
    sum = 0

    count.times do |i|
        if ((i.remainder(3).abs == 0 || i.remainder(5).abs == 0) && i != 0)
            multiples << i
            sum = sum + i
        end # If end
    end # Times End

    return sum
end # Def End

def fibonacci(target)
    #######################################################
    ## TARGET is the number of times the body should run ##
    ## ------------------------------------------------- ##
    ##                                                   ##    
    ## ------------------------------------------------- ##
    ## The while loop calculate the fibonacci until the  ##
    ## TARGET value is gotten.                           ##
    ## => The first two lines get the two values to be   ##
    ##    added to generate the next number in the seq.  ##
    ## => The Break line is true if the value being      ##
    ##    calculated atm is greater than the TARGET.     ##
    ## => The next three lines push the value into the   ##
    ##    fib_array, updates the sum variable and then   ##
    ##    adds 1 to the counter to continue the loop     ##
    #######################################################

    fib_array = [1,2]
    count = 2
    sum = 3;

    while fib_array.last < target do
        left = fib_array[count-1]
        right = fib_array[count-2]

        break if (left + right) > target
        fib_array << (left + right)
        sum = sum + (left + right)
        count = count + 1
    end # End While
    
    return sum
end # Def End

def largest_prime_factor(number)
    ##################################
    ##      UNDER CONSTRUCTION      ##
    ##################################

    sum = 0
    prime_array = []

    Prime.each(number) do |i|
        if number.remainder(i) == 0
            sum = sum + i
            prime_array << i
        end
    end

    return prime_array.last
end # Def End

puts sum_of_multiples(1000)
puts fibonacci(10)
puts largest_prime_factor(600851475143)