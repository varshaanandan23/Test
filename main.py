from collections import Counter

def tokenize_and_stem(text):
    # Simple tokenization and stemming function
    # This can be expanded or replaced with more sophisticated techniques
    return [token.lower() for token in text.split()]

def generate_ngrams(tokens, n):
    # Generate n-grams from tokens
    return [tuple(tokens[i:i+n]) for i in range(len(tokens)-n+1)]

def custom_sorensen_dice(s1, s2):
    # Tokenize and stem input strings
    tokens_s1 = tokenize_and_stem(s1)
    tokens_s2 = tokenize_and_stem(s2)

    # Determine dynamic n-gram length (1/4 of the length of the shortest string)
    n = max(1, len(min(tokens_s1, tokens_s2)) // 4)

    # Generate n-grams
    ngrams_s1 = generate_ngrams(tokens_s1, n)
    ngrams_s2 = generate_ngrams(tokens_s2, n)

    # Calculate frequencies of n-grams
    freq_s1 = Counter(ngrams_s1)
    freq_s2 = Counter(ngrams_s2)

    # Calculate intersection of n-grams
    intersection = sum((freq_s1 & freq_s2).values())

    # Calculate total number of n-grams in both strings
    total = sum(freq_s1.values()) + sum(freq_s2.values())

    # Calculate similarity score
    similarity = (2.0 * intersection) / total if total != 0 else 0.0

    return similarity

# Example usage:
string1 = "Keg Toronto"
string2 = "Kes' Toronto"
similarity_score = custom_sorensen_dice(string1, string2)
print("Custom Sørensen-Dice similarity score:", similarity_score)
