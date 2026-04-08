# Digit Gatekeeper

## Approach
Counts integers between L and R that satisfy three conditions:
1. Divisible by K
2. Sum of digits is a prime number
3. Does not contain the digit 0

## Algorithm
- Iterate through each number from L to R
- For each number, check all three conditions
- Increment counter if all conditions are met

## Time Complexity
O((R-L) × √M) where M is the maximum digit sum (~50 for numbers < 10^6)

## Space Complexity
O(1)

## Approach for Roll-Seed Lock

This program checks if a number `N` can be transformed into a 3-digit number whose middle digit equals the seed value.

**Algorithm:**
1. Take an integer `N` and a seed digit as input
2. Validate that N is between 1 and 10^6, and seed is 0-9
3. Apply transformations 3 times based on whether N is even or odd:
    - **Even N**: Divide by 2 and add seed
    - **Odd N**: Multiply by 3 and subtract seed
4. Check if the result is a 3-digit number AND its middle digit equals the seed
5. Output "YES" or "NO" with the final value

## Complexity

- **Time Complexity:** O(1)
  - Fixed 3 iterations of the loop (constant)
  - String conversion and digit extraction are O(1) for 3-digit numbers

- **Space Complexity:** O(1)
  - Only stores a few variables regardless of input size

   # Mirror Corridor 

    ## Problem Explanation
    The program finds the smallest non-negative integer `X` such that:
    1. (N + X) is divisible by `K`
    2. (N + X) is a palindrome number

    If no such X exists within the search limit (10^6), it returns `-1`.

    ## Approach

    1. **Input Validation**: Check if N is between 0 and 10^6, and K is between 2 and 9.

    2. **Palindrome Check**: The isPalindrome() function compares characters from both ends of the number's string representation, moving towards the center.

    3. **Linear Search**: Loop through values starting from `X = 0` and check:
        - If '(N + X)' is divisible by 'K'
        - If '(N + X)' is a palindrome
        
    4. **Output**: Return the first 'X' that satisfies both conditions, or '-1' if none found.

    ## Complexity Analysis

    ### Time Complexity
    - **Worst Case**: O(10^6 × M), where M is the average number of digits
      - We may loop up to 10^6 times
      - Each palindrome check is O(M), where M ≈ 7 (since max value ≈ 10^6 + 10^6)

    - **Best Case**: O(M) if found immediately

    ### Space Complexity
    - **O(M)**: For string conversion during palindrome checking

# Fare Calculator

## Approach

This program calculates the final taxi fare based on multiple factors:

1. **Base Fare**: Starting fare amount (1-1000)
2. **Distance Charge**: 7 units per kilometer (0-100 km)
3. **Late Charge**: Additional 20 units if delay > 15 minutes
4. **Distance Surcharge**: 10% extra if distance > 10 km
5. **Seed Adjustment**: 
    - If seed is odd: subtract seed value
    - If seed is even: add seed value
6. **Rounding**: Final fare rounded up to nearest 5

## Input Validation

The program validates all inputs:
- Base: 1 to 1000
- Distance: 0 to 100 km
- Delay: 0 to 120 minutes
- Seed: 0 to 9

## Time Complexity
**O(1)** - All operations (arithmetic, comparisons) are constant time

## Space Complexity
**O(1)** - Uses only a fixed number of variables regardless of input size

# Skipping Numbers 

## Approach
This program skips certain numbers based on a seed value and finds the smallest number `m` where the sum of non-skipped numbers reaches or exceeds `N`.

**Step-by-step:**
1. Take input: a target number `N` and a `seed` value (0-9)
2. Loop through numbers starting from 1
3. Skip numbers where `(i % seed + 2)` equals 0
4. Add remaining numbers to `sum`
5. Stop when `sum >= N`
6. Display the result

## Complexity

- **Time Complexity:** O(m) - where `m` is the final number found
    - Single loop runs until the sum condition is met
    
- **Space Complexity:** O(1)
    - Uses only fixed variables (N, seed, m, sum, i)
    - No additional data structures

## Example
If N=10 and seed=2:
- Include numbers where (i%2+2) ≠ 0
- Sum numbers until reaching 10

# Contest Score Judge

## Approach

This program calculates and judges a contestant's score based on their answers:

1. **Input**: Takes three values from the user:
    - Number of correct answers
    - Number of partially-correct answers
    - Number of wrong answers

2. **Validation**: Checks if inputs are within valid range (0-100)

3. **Scoring**:
    - Correct answer: +3 marks
    - Partially-correct answer: +1 mark
    - Wrong answer: -2 marks

4. **Adjustments**:
    - If score is negative, set it to 0
    - If total answers exceed 50, deduct 10 marks

5. **Result**: Displays PASS (≥60 marks) or FAIL status with final score

## Complexity

- **Time Complexity**: O(1) - Constant time, only arithmetic operations
- **Space Complexity**: O(1) - Uses fixed number of variables

## Note

The validation logic has a bug. Use `&&` instead of `,` to properly check all three values:
