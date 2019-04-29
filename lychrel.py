import permutations

allPermutations = set([permutations.combine_numbers(x)
                       for x in permutations.permutations(range(1, 10))])
highestNumber = 0

for n in xrange(1, 10000):  # the was found experimentally
    pandigitalMultiply = 0

    for i in xrange(1, 10):
        pandigitalPart = n * i
        pandigitalMultiply *= (10 ** len(str(pandigitalPart)))
        pandigitalMultiply += pandigitalPart

        if len(str(pandigitalMultiply)) >= 9:
            break

    if pandigitalMultiply in allPermutations:
        if pandigitalMultiply > highestNumber:
            highestNumber = pandigitalMultiply

print str(highestNumber)
