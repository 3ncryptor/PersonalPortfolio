def can_reduce_to_single_element(t, test_cases):
    results = []
    for case in test_cases:
        n, arr = case
        min_val = min(arr)
        max_val = max(arr)
        
        if max_val - min_val > 1:
            results.append("NO")
        else:
            valid = all(x == min_val or x == min_val + 1 for x in arr)
            if valid:
                results.append("YES")
            else:
                results.append("NO")
    
    return results

t = int(input())
test_cases = []
for _ in range(t):
    n = int(input())
    arr = list(map(int, input().split()))
    test_cases.append((n, arr))

results = can_reduce_to_single_element(t, test_cases)
for result in results:
    print(result)
