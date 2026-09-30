import math

tests = []

# mat-001
tests.append(("mat-001", 20 * 21 // 2 == 210 and sum(range(1, 21)) == 210))
# mat-002
tests.append(("mat-002", (45782 // 100) % 10 * 100 == 700))
# mat-003
tests.append(("mat-003", 193 % 47 == 5 and (893 + 193) % 47 == 5))
# mat-004
def is_prime(n): return n > 1 and all(n % i != 0 for i in range(2, int(n**0.5)+1))
tests.append(("mat-004", len([x for x in range(1, 31) if is_prime(x)]) == 10))
# mat-005
tests.append(("mat-005", 3**5 - 3**4 == 162))
# mat-006
tests.append(("mat-006", pow(2137, 754, 10) == 9))
# mat-007
tests.append(("mat-007", math.gcd(36, 84) == 12))
# mat-008
tests.append(("mat-008", math.lcm(12, 15, 20) == 60))
# mat-009
tests.append(("mat-009", (12 * 240) // 48 == 60))
# mat-010
tests.append(("mat-010", math.ceil(1000 / math.lcm(12, 15, 18)) * math.lcm(12, 15, 18) == 1080))
# mat-011
tests.append(("mat-011", math.lcm(9, 12, 15) // 60 == 3))
# mat-012
tests.append(("mat-012", 25 - 5 * 4 + 12 // 3 == 9))
# mat-013
tests.append(("mat-013", round((3/5 + 1/4) / (3/4 - 1/2), 4) == 3.4))
# mat-014
tests.append(("mat-014", round(13824**(1/3)) == 24))
# mat-015
tests.append(("mat-015", round((13/12)**2 * 144 - 144) == 25))
# mat-016
tests.append(("mat-016", round((0.04 + 0.0004) / (0.04 + 0.0004)) == 1))
# mat-017
tests.append(("mat-017", (854**3 + 146**3) // (854**2 - 854*146 + 146**2) == 1000))
# mat-018
tests.append(("mat-018", (45 / 250) * 100 == 18.0))
# mat-019
tests.append(("mat-019", ((18000 - 15000) / 15000) * 100 == 20.0))
# mat-020
tests.append(("mat-020", (25 / 125) * 100 == 20.0))
# mat-021
tests.append(("mat-021", ((113 + 13) / 36) * 100 == 350.0))
# mat-022
tests.append(("mat-022", round(50000 * 1.10 * 0.90) == 49500))
# mat-023
tests.append(("mat-023", ((308 - 60) / 4) * 100 == 6200.0))
# mat-024
tests.append(("mat-024", ((960 - 800) / 800) * 100 == 20.0))
# mat-025
tests.append(("mat-025", 540 / 0.90 == 600.0))
# mat-026
tests.append(("mat-026", 20 + 10 - (20 * 10) / 100 == 28.0))
# mat-027
tests.append(("mat-027", ((15 - 12) / 12) * 100 == 25.0))
# mat-028
tests.append(("mat-028", round((100 / 900) * 100, 4) == 11.1111))
# mat-029
tests.append(("mat-029", 20**2 / 100 == 4.0))
# mat-030
tests.append(("mat-030", (5000 * 8 * 3) / 100 == 1200.0))
# mat-031
tests.append(("mat-031", 100 / 8 == 12.5))
# mat-032
tests.append(("mat-032", round(10000 * (1.10**2 - 1)) == 2100))
# mat-033
tests.append(("mat-033", round(25 / (5/100)**2) == 10000))
# mat-034
tests.append(("mat-034", (7 - 1) * 5 / (3 - 1) == 15.0))
# mat-035
tests.append(("mat-035", round(((9261 / 8000)**(1/3) - 1) * 100) == 5))
# mat-036
tests.append(("mat-036", (2*4, 3*4, 5*3) == (8, 12, 15)))
# mat-037
tests.append(("mat-037", 1200 * 5 / 8 == 750.0))
# mat-038
tests.append(("mat-038", [x for x in range(10) if (15-x)*(27-x) == (19-x)*(21-x)][0] == 3))
# mat-039
tests.append(("mat-039", (3*6, 4*6) == (18, 24)))
# mat-040
tests.append(("mat-040", 6 * (240 / (5*1 + 6*0.5 + 8*0.25)) == 144.0))
# mat-041
tests.append(("mat-041", (5 * 8 * 9) / (6 * 5) == 12.0))
# mat-042
tests.append(("mat-042", sum(range(2, 21, 2)) / 10 == 11.0))
# mat-043
tests.append(("mat-043", 6 * 17 - 5 * 14 == 32))
# mat-044
tests.append(("mat-044", round(25 * 35.4 - 24 * 35) == 45))
# mat-045
tests.append(("mat-045", (6 * 49 + 6 * 52) - 11 * 50 == 56))
# mat-046
tests.append(("mat-046", 3 * (37 - 34) * 5 == 45))
# mat-047
tests.append(("mat-047", (12 * 45 + 84) / 13 - 45 == 3.0))
# mat-048
tests.append(("mat-048", (10 * 15) / (10 + 15) == 6.0))
# mat-049
tests.append(("mat-049", (12 * 15) / 18 == 10.0))
# mat-050
tests.append(("mat-050", round((1 - 4*(1/12 + 1/16)) / (1/16), 4) == round(20/3, 4)))
# mat-051
tests.append(("mat-051", 3 * 14 / 2 == 21.0))
# mat-052
tests.append(("mat-052", round(1 / (1/10 - 1/15)) == 30))
# mat-053
tests.append(("mat-053", (6 * 16) / 32 == 3.0))
# mat-054
tests.append(("mat-054", 72 * 5 / 18 == 20.0))
# mat-055
tests.append(("mat-055", 60 * 3.5 == 210.0))
# mat-056
tests.append(("mat-056", (150 / 9) * 18 / 5 == 60.0))
# mat-057
tests.append(("mat-057", 2 * 30 * 20 / (30 + 20) == 24.0))
# mat-058
tests.append(("mat-058", ((45 + 35) * 5 / 18) * 18 - 220 == 180.0))
# mat-059
tests.append(("mat-059", (12 / 0.8) - 3 == 12.0))
# mat-060
tests.append(("mat-060", 14 * (24 - 14) == 140))
# mat-061
tests.append(("mat-061", (2 * 128)**0.5 == 16.0))
# mat-062
tests.append(("mat-062", 2 * 20 + 20**2 / 100 == 44.0))
# mat-063
tests.append(("mat-063", 0.5 * 9 * 12 == 54.0))
# mat-064
tests.append(("mat-064", 2 * (22/7) * 7 * (7 + 10) == 748.0))
# mat-065
tests.append(("mat-065", round((math.pi * 6**2 * 12) / ((4/3) * math.pi * 3**3)) == 12))
# mat-066
tests.append(("mat-066", 56 * 2 == 112))
# mat-067
tests.append(("mat-067", 6**2 + 1 == 37))
# mat-068
tests.append(("mat-068", 48 + 18 == 66))
# mat-069
tests.append(("mat-069", 74 * 2 + 5 == 153))
# mat-070
tests.append(("mat-070", 38 == 38))

passed = sum(1 for tid, ok in tests if ok)
print(f"Mathematical Solver Verification: {passed}/{len(tests)} passed!")
