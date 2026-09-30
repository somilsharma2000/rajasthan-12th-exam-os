import json
import re

questions = [
    # ==================== RATIO AND PROPORTION (8) ====================
    {
        "question_text": "A sum of Rs. 3,500 is divided among A, B, and C in the ratio 2 : 3 : 5. How much more money does C receive than A?",
        "option_a": "Rs. 350",
        "option_b": "Rs. 700",
        "option_c": "Rs. 1,050",
        "option_d": "Rs. 1,400",
        "correct_option": "C",
        "explanation": "The total number of ratio parts is 2 + 3 + 5 = 10 parts, so each part equals Rs. 3,500 divided by 10, which is Rs. 350. Person C receives 5 parts (Rs. 1,750) and person A receives 2 parts (Rs. 700). The difference between C and A is Rs. 1,750 minus Rs. 700, which equals Rs. 1,050.",
        "subject": "Mathematics",
        "topic": "Ratio and Proportion",
        "difficulty": "Easy",
        "estimated_time_seconds": 40
    },
    {
        "question_text": "What is the fourth proportional to the numbers 6, 14, and 15?",
        "option_a": "30",
        "option_b": "32",
        "option_c": "35",
        "option_d": "40",
        "correct_option": "C",
        "explanation": "In a proportion, the product of the first and fourth numbers equals the product of the second and third numbers, giving 6 times the unknown equal to 14 times 15. Multiplying 14 by 15 yields 210. Dividing 210 by 6 gives 35 as the fourth proportional.",
        "subject": "Mathematics",
        "topic": "Ratio and Proportion",
        "difficulty": "Easy",
        "estimated_time_seconds": 30
    },
    {
        "question_text": "What is the mean proportional between 16 and 36?",
        "option_a": "20",
        "option_b": "24",
        "option_c": "26",
        "option_d": "28",
        "correct_option": "B",
        "explanation": "The mean proportional between two numbers is found by multiplying them together and taking the square root. Multiplying 16 by 36 gives 576, and the square root of 576 is 24. A common trap is taking the simple average of 16 and 36, which incorrectly yields 26.",
        "subject": "Mathematics",
        "topic": "Ratio and Proportion",
        "difficulty": "Easy",
        "estimated_time_seconds": 35
    },
    {
        "question_text": "A bag contains coins of 50 paise, 25 paise, and 10 paise in the ratio 3 : 4 : 5. If the total value of all coins in the bag is Rs. 120, find the total number of 25 paise coins.",
        "option_a": "120",
        "option_b": "140",
        "option_c": "160",
        "option_d": "200",
        "correct_option": "C",
        "explanation": "One set of coins contains three 50-paise coins (Rs. 1.50), four 25-paise coins (Rs. 1.00), and five 10-paise coins (Rs. 0.50), giving a set value of Rs. 3.00. Dividing the total value of Rs. 120 by Rs. 3.00 shows there are 40 such sets. Multiplying 40 sets by 4 gives 160 coins of 25 paise.",
        "subject": "Mathematics",
        "topic": "Ratio and Proportion",
        "difficulty": "Standard",
        "estimated_time_seconds": 60
    },
    {
        "question_text": "Two numbers are in the ratio 3 : 5. If 8 is added to both numbers, their ratio becomes 2 : 3. What is the sum of the original two numbers?",
        "option_a": "48",
        "option_b": "56",
        "option_c": "64",
        "option_d": "72",
        "correct_option": "C",
        "explanation": "Let the original numbers be 3x and 5x. Setting up the equation (3x + 8) divided by (5x + 8) equals 2/3, cross-multiplying gives 9x + 24 = 10x + 16, which solves to x = 8. The original numbers are 24 and 40, so their sum is 64.",
        "subject": "Mathematics",
        "topic": "Ratio and Proportion",
        "difficulty": "Standard",
        "estimated_time_seconds": 60
    },
    {
        "question_text": "If the ratio of quantity A to quantity B is 4 : 5 and the ratio of quantity B to quantity C is 15 : 16, what is the ratio of A to C?",
        "option_a": "1 : 2",
        "option_b": "3 : 4",
        "option_c": "4 : 5",
        "option_d": "5 : 6",
        "correct_option": "B",
        "explanation": "To combine the ratios, scale 4 : 5 by multiplying by 3 to get 12 : 15 so that quantity B is represented by 15 in both ratios. The combined ratio A : B : C becomes 12 : 15 : 16. The ratio of A to C is 12 : 16, which simplifies to 3 : 4.",
        "subject": "Mathematics",
        "topic": "Ratio and Proportion",
        "difficulty": "Easy",
        "estimated_time_seconds": 45
    },
    {
        "question_text": "The monthly incomes of two persons A and B are in the ratio 5 : 4, and their expenditures are in the ratio 3 : 2. If each person saves Rs. 4,000 per month, what is the monthly income of A?",
        "option_a": "Rs. 8,000",
        "option_b": "Rs. 10,000",
        "option_c": "Rs. 12,000",
        "option_d": "Rs. 15,000",
        "correct_option": "B",
        "explanation": "Represent A's income as 5x and B's income as 4x. Since savings equal income minus expenditure, setting up (5x - 4000) / (4x - 4000) = 3/2 gives 10x - 8000 = 12x - 12000, which yields 2x = 4000 or x = 2000. Multiplying 5 by 2000 gives A's monthly income as Rs. 10,000.",
        "subject": "Mathematics",
        "topic": "Ratio and Proportion",
        "difficulty": "Standard",
        "estimated_time_seconds": 65
    },
    {
        "question_text": "In a school of 720 students, the ratio of boys to girls is 7 : 5. How many additional girls must be admitted so that the ratio of boys to girls becomes 1 : 1?",
        "option_a": "60",
        "option_b": "90",
        "option_c": "120",
        "option_d": "150",
        "correct_option": "C",
        "explanation": "The total of 720 students is split into 7 + 5 = 12 equal parts of 60 students each, meaning there are 420 boys and 300 girls. To achieve a 1 : 1 ratio, the number of girls must equal the number of boys, which is 420. Subtracting the existing 300 girls from 420 shows that 120 more girls must be admitted.",
        "subject": "Mathematics",
        "topic": "Ratio and Proportion",
        "difficulty": "Standard",
        "estimated_time_seconds": 50
    },

    # ==================== SIMPLE INTEREST (8) ====================
    {
        "question_text": "Find the simple interest earned on a principal amount of Rs. 8,000 invested at an annual interest rate of 7.5% for 4 years.",
        "option_a": "Rs. 2,000",
        "option_b": "Rs. 2,200",
        "option_c": "Rs. 2,400",
        "option_d": "Rs. 2,800",
        "correct_option": "C",
        "explanation": "Simple interest is calculated by multiplying principal, rate, and time, then dividing by 100. Multiplying 8,000 by 7.5 gives 60,000, and multiplying by 4 gives 240,000. Dividing 240,000 by 100 yields Rs. 2,400.",
        "subject": "Mathematics",
        "topic": "Simple Interest",
        "difficulty": "Easy",
        "estimated_time_seconds": 35
    },
    {
        "question_text": "At a simple interest rate of 8% per annum, in how many years will a sum of money triple itself?",
        "option_a": "12.5 years",
        "option_b": "25 years",
        "option_c": "30 years",
        "option_d": "37.5 years",
        "correct_option": "B",
        "explanation": "For a principal P to triple, the accumulated simple interest must equal 2P. Using the simple interest formula, 2P = (P * 8 * T) / 100, which simplifies to 200 = 8T, giving T = 25 years. A common trap is mistaking the total amount for interest and using 3P, which incorrectly gives 37.5 years.",
        "subject": "Mathematics",
        "topic": "Simple Interest",
        "difficulty": "Standard",
        "estimated_time_seconds": 50
    },
    {
        "question_text": "A sum of money under simple interest amounts to Rs. 6,200 in 2 years and Rs. 7,400 in 4 years. What is the annual rate of interest?",
        "option_a": "10%",
        "option_b": "12%",
        "option_c": "15%",
        "option_d": "18%",
        "correct_option": "B",
        "explanation": "The interest earned over 2 years (from year 2 to year 4) is Rs. 7,400 minus Rs. 6,200, which is Rs. 1,200, giving an annual interest of Rs. 600. Subtracting 2 years of interest (Rs. 1,200) from Rs. 6,200 gives the principal sum of Rs. 5,000. Dividing annual interest of Rs. 600 by the principal of Rs. 5,000 and multiplying by 100 gives 12%.",
        "subject": "Mathematics",
        "topic": "Simple Interest",
        "difficulty": "Standard",
        "estimated_time_seconds": 65
    },
    {
        "question_text": "A sum of Rs. 12,000 is lent out in two parts: one part at 6% per annum and the other at 10% per annum simple interest. If the total annual interest from both parts combined is Rs. 960, how much money was lent at 10%?",
        "option_a": "Rs. 4,000",
        "option_b": "Rs. 5,000",
        "option_c": "Rs. 6,000",
        "option_d": "Rs. 7,000",
        "correct_option": "C",
        "explanation": "Let the amount lent at 10% be x, so the amount at 6% is 12,000 - x. Total interest is 0.10x + 0.06(12000 - x) = 960, which simplifies to 0.04x + 720 = 960. Subtracting 720 gives 0.04x = 240, and dividing by 0.04 yields x = Rs. 6,000.",
        "subject": "Mathematics",
        "topic": "Simple Interest",
        "difficulty": "Standard",
        "estimated_time_seconds": 70
    },
    {
        "question_text": "An investment of Rs. 5,000 yields Rs. 200 more in simple interest when the annual interest rate is increased by 2 percentage points. For how many years was the money invested?",
        "option_a": "2 years",
        "option_b": "3 years",
        "option_c": "4 years",
        "option_d": "5 years",
        "correct_option": "A",
        "explanation": "The extra interest comes entirely from the additional 2% rate per year. Extra annual interest on Rs. 5,000 at 2% is (5,000 * 2) / 100 = Rs. 100 per year. Dividing total extra interest of Rs. 200 by Rs. 100 per year gives an investment duration of 2 years.",
        "subject": "Mathematics",
        "topic": "Simple Interest",
        "difficulty": "Easy",
        "estimated_time_seconds": 40
    },
    {
        "question_text": "A sum of money grows to Rs. 11,800 in 3 years at 6% per annum simple interest. What was the original principal amount?",
        "option_a": "Rs. 9,500",
        "option_b": "Rs. 10,000",
        "option_c": "Rs. 10,200",
        "option_d": "Rs. 10,500",
        "correct_option": "B",
        "explanation": "Total interest over 3 years at 6% per annum is 18% of the principal sum. The total accumulated amount is therefore 118% of the principal sum. Dividing Rs. 11,800 by 1.18 gives the original principal of Rs. 10,000.",
        "subject": "Mathematics",
        "topic": "Simple Interest",
        "difficulty": "Easy",
        "estimated_time_seconds": 45
    },
    {
        "question_text": "If the simple interest on a certain sum for 5 years at 8% per annum is Rs. 1,600, what will be the simple interest on the same sum for 8 years at the same rate?",
        "option_a": "Rs. 2,200",
        "option_b": "Rs. 2,400",
        "option_c": "Rs. 2,560",
        "option_d": "Rs. 2,800",
        "correct_option": "C",
        "explanation": "Since principal and rate are unchanged, simple interest is directly proportional to time. Annual interest is Rs. 1,600 divided by 5 years, which equals Rs. 320 per year. Multiplying Rs. 320 by 8 years gives total simple interest of Rs. 2,560.",
        "subject": "Mathematics",
        "topic": "Simple Interest",
        "difficulty": "Easy",
        "estimated_time_seconds": 40
    },
    {
        "question_text": "What equal annual installment will discharge a debt of Rs. 4,600 due in 4 years at 10% per annum simple interest?",
        "option_a": "Rs. 1,000",
        "option_b": "Rs. 1,100",
        "option_c": "Rs. 1,150",
        "option_d": "Rs. 1,200",
        "correct_option": "A",
        "explanation": "Let each annual installment be x. Over 4 years, the payments plus accrued simple interest total 1.30x + 1.20x + 1.10x + 1.00x = 4.60x, which equals Rs. 4,600 and yields x = Rs. 1,000. A common trap is dividing 4,600 by 4 to get 1,150, which ignores interest saved by early payments.",
        "subject": "Mathematics",
        "topic": "Simple Interest",
        "difficulty": "Hard",
        "estimated_time_seconds": 80
    },

    # ==================== COMPOUND INTEREST (8) ====================
    {
        "question_text": "Calculate the compound interest on Rs. 10,000 for 2 years at an annual rate of 10%, compounded annually.",
        "option_a": "Rs. 2,000",
        "option_b": "Rs. 2,100",
        "option_c": "Rs. 2,200",
        "option_d": "Rs. 2,400",
        "correct_option": "B",
        "explanation": "At the end of year 1, the amount grows by 10% to Rs. 11,000. In year 2, interest of 10% on Rs. 11,000 adds Rs. 1,100 to make a total amount of Rs. 12,100. Subtracting the principal of Rs. 10,000 gives a compound interest of Rs. 2,100.",
        "subject": "Mathematics",
        "topic": "Compound Interest",
        "difficulty": "Easy",
        "estimated_time_seconds": 35
    },
    {
        "question_text": "What is the compound interest on Rs. 16,000 for 1 year at 20% per annum, compounded half-yearly?",
        "option_a": "Rs. 3,200",
        "option_b": "Rs. 3,360",
        "option_c": "Rs. 3,520",
        "option_d": "Rs. 3,840",
        "correct_option": "B",
        "explanation": "For half-yearly compounding, the annual rate of 20% becomes 10% per half-year across 2 periods. Compounding 10% twice on Rs. 16,000 gives Rs. 17,600 after 6 months and Rs. 19,360 after 12 months, yielding compound interest of Rs. 3,360. A common trap is using annual compounding, which wrongly gives Rs. 3,200.",
        "subject": "Mathematics",
        "topic": "Compound Interest",
        "difficulty": "Standard",
        "estimated_time_seconds": 55
    },
    {
        "question_text": "The difference between compound interest and simple interest on a sum of money for 2 years at 5% per annum is Rs. 25. Find the principal sum.",
        "option_a": "Rs. 8,000",
        "option_b": "Rs. 9,000",
        "option_c": "Rs. 10,000",
        "option_d": "Rs. 12,000",
        "correct_option": "C",
        "explanation": "For 2 years, the difference between compound interest and simple interest equals Principal times (Rate / 100) squared. Here, (5 / 100) squared equals 1 / 400. Multiplying the difference of Rs. 25 by 400 yields a principal sum of Rs. 10,000.",
        "subject": "Mathematics",
        "topic": "Compound Interest",
        "difficulty": "Standard",
        "estimated_time_seconds": 50
    },
    {
        "question_text": "What is the difference between compound interest and simple interest on Rs. 8,000 for 3 years at 10% per annum?",
        "option_a": "Rs. 240",
        "option_b": "Rs. 248",
        "option_c": "Rs. 256",
        "option_d": "Rs. 280",
        "correct_option": "B",
        "explanation": "Simple interest for 3 years on Rs. 8,000 at 10% is 8,000 * 0.30 = Rs. 2,400. Compound interest amount is 8,000 times 1.10 cubed (1.331), which equals Rs. 10,648, giving compound interest of Rs. 2,648. Subtracting simple interest from compound interest gives a difference of Rs. 248.",
        "subject": "Mathematics",
        "topic": "Compound Interest",
        "difficulty": "Standard",
        "estimated_time_seconds": 65
    },
    {
        "question_text": "A sum of money invested at compound interest doubles itself in 4 years. In how many years will it become 8 times its original value at the same interest rate?",
        "option_a": "8 years",
        "option_b": "12 years",
        "option_c": "16 years",
        "option_d": "32 years",
        "correct_option": "B",
        "explanation": "Under compound interest, principal multiplies exponentially over equal time periods, so becoming 8 times (2 to the power 3) requires 3 doubling cycles. Multiplying 3 cycles by 4 years gives 12 years. A common trap is multiplying 4 by 8 to get 32 years, which wrongly assumes linear growth.",
        "subject": "Mathematics",
        "topic": "Compound Interest",
        "difficulty": "Standard",
        "estimated_time_seconds": 45
    },
    {
        "question_text": "Find the compound interest on Rs. 15,000 for 2 years if the rate of interest is 8% for the first year and 10% for the second year.",
        "option_a": "Rs. 2,700",
        "option_b": "Rs. 2,820",
        "option_c": "Rs. 2,900",
        "option_d": "Rs. 3,000",
        "correct_option": "B",
        "explanation": "After year 1 at 8%, the amount becomes 15,000 * 1.08 = Rs. 16,200. In year 2 at 10%, the amount becomes 16,200 * 1.10 = Rs. 17,820. Subtracting initial principal of Rs. 15,000 gives compound interest of Rs. 2,820.",
        "subject": "Mathematics",
        "topic": "Compound Interest",
        "difficulty": "Standard",
        "estimated_time_seconds": 60
    },
    {
        "question_text": "A sum of money invested at compound interest amounts to Rs. 2,420 in 2 years and Rs. 2,662 in 3 years. What is the principal sum?",
        "option_a": "Rs. 1,800",
        "option_b": "Rs. 2,000",
        "option_c": "Rs. 2,100",
        "option_d": "Rs. 2,200",
        "correct_option": "B",
        "explanation": "The interest earned in year 3 is Rs. 2,662 - Rs. 2,420 = Rs. 242. Dividing Rs. 242 by Rs. 2,420 gives an annual rate of 10%. Since 2-year amount is Principal times 1.10 squared (1.21), dividing Rs. 2,420 by 1.21 yields the principal sum of Rs. 2,000.",
        "subject": "Mathematics",
        "topic": "Compound Interest",
        "difficulty": "Hard",
        "estimated_time_seconds": 75
    },
    {
        "question_text": "What is the compound interest on Rs. 20,000 for 6 months at 20% per annum, compounded quarterly?",
        "option_a": "Rs. 2,000",
        "option_b": "Rs. 2,050",
        "option_c": "Rs. 2,100",
        "option_d": "Rs. 2,200",
        "correct_option": "B",
        "explanation": "Quarterly rate is 20% divided by 4, which is 5% per quarter, and 6 months equal 2 quarters. After quarter 1, amount is Rs. 21,000. After quarter 2, adding 5% to Rs. 21,000 gives Rs. 22,050, resulting in compound interest of Rs. 2,050.",
        "subject": "Mathematics",
        "topic": "Compound Interest",
        "difficulty": "Standard",
        "estimated_time_seconds": 60
    },

    # ==================== TIME AND WORK (8) ====================
    {
        "question_text": "A can complete a piece of work in 12 days, and B can complete the same work in 18 days. Working together, in how many days will they complete the work?",
        "option_a": "6 days",
        "option_b": "7.2 days",
        "option_c": "8 days",
        "option_d": "15 days",
        "correct_option": "B",
        "explanation": "Let total work be 36 units. A does 3 units per day and B does 2 units per day, giving a combined rate of 5 units per day. Dividing 36 units by 5 units per day yields 7.2 days.",
        "subject": "Mathematics",
        "topic": "Time and Work",
        "difficulty": "Easy",
        "estimated_time_seconds": 40
    },
    {
        "question_text": "A and B can complete a job in 20 days and 30 days respectively. They started working together, but A left 5 days before the job was completed. How many total days did it take to complete the job?",
        "option_a": "12 days",
        "option_b": "14 days",
        "option_c": "15 days",
        "option_d": "18 days",
        "correct_option": "C",
        "explanation": "Let total work be 60 units. A's rate is 3 units/day and B's rate is 2 units/day. If total time is T days, solving 3(T - 5) + 2T = 60 gives 5T - 15 = 60, which simplifies to 5T = 75 or T = 15 total days.",
        "subject": "Mathematics",
        "topic": "Time and Work",
        "difficulty": "Standard",
        "estimated_time_seconds": 65
    },
    {
        "question_text": "A is twice as efficient as B. If together they can finish a piece of work in 12 days, in how many days can A alone complete the work?",
        "option_a": "6 days",
        "option_b": "18 days",
        "option_c": "24 days",
        "option_d": "36 days",
        "correct_option": "B",
        "explanation": "With B's rate as 1 unit/day and A's rate as 2 units/day, their combined rate is 3 units/day, so total work completed in 12 days is 3 * 12 = 36 units. Dividing 36 units by A's rate of 2 units/day shows A alone takes 18 days. A common trap is halving the combined 12 days to get 6 days, which ignores individual rates.",
        "subject": "Mathematics",
        "topic": "Time and Work",
        "difficulty": "Standard",
        "estimated_time_seconds": 50
    },
    {
        "question_text": "Pipe A can fill a water tank in 10 hours, and Pipe B can empty the full tank in 15 hours. If both pipes are opened together, how long will it take to fill the tank?",
        "option_a": "6 hours",
        "option_b": "12 hours",
        "option_c": "25 hours",
        "option_d": "30 hours",
        "correct_option": "D",
        "explanation": "Let total tank capacity be 30 units. Pipe A fills 3 units per hour while Pipe B drains 2 units per hour, resulting in a net filling rate of 1 unit per hour. Dividing 30 units by 1 unit per hour gives a required time of 30 hours.",
        "subject": "Mathematics",
        "topic": "Time and Work",
        "difficulty": "Easy",
        "estimated_time_seconds": 45
    },
    {
        "question_text": "If 15 workers can construct a boundary wall in 20 days, how many workers are needed to construct the same wall in 12 days?",
        "option_a": "20 workers",
        "option_b": "22 workers",
        "option_c": "25 workers",
        "option_d": "28 workers",
        "correct_option": "C",
        "explanation": "Total work required is 15 workers multiplied by 20 days, which equals 300 worker-days. To complete 300 worker-days of work in 12 days, divide 300 by 12 to get 25 workers.",
        "subject": "Mathematics",
        "topic": "Time and Work",
        "difficulty": "Easy",
        "estimated_time_seconds": 35
    },
    {
        "question_text": "A and B can complete a work individually in 10 days and 15 days respectively. If they work on alternate days starting with A on the first day, in how many days will the work be completed?",
        "option_a": "6 days",
        "option_b": "10 days",
        "option_c": "12 days",
        "option_d": "15 days",
        "correct_option": "C",
        "explanation": "With total work as 30 units, A completes 3 units per day and B completes 2 units per day, giving 5 units every 2-day cycle. Completing 30 units requires 30 divided by 5 = 6 two-day cycles, making the total time 12 days.",
        "subject": "Mathematics",
        "topic": "Time and Work",
        "difficulty": "Standard",
        "estimated_time_seconds": 60
    },
    {
        "question_text": "4 men or 6 women can finish a project in 20 days. How many days will it take for 2 men and 3 women working together to finish the same project?",
        "option_a": "10 days",
        "option_b": "15 days",
        "option_c": "20 days",
        "option_d": "24 days",
        "correct_option": "C",
        "explanation": "Since 4 men equal 6 women, 1 man equals 1.5 women, making total work equal to 6 women * 20 days = 120 woman-days. A team of 2 men and 3 women equals 2(1.5) + 3 = 6 women, so dividing 120 woman-days by 6 women gives 20 days.",
        "subject": "Mathematics",
        "topic": "Time and Work",
        "difficulty": "Standard",
        "estimated_time_seconds": 60
    },
    {
        "question_text": "A and B undertake a piece of work for Rs. 1,200. A alone can do it in 8 days while B alone can do it in 12 days. With the help of C, they complete the work in 3 days. What is C's share of the total payment?",
        "option_a": "Rs. 300",
        "option_b": "Rs. 400",
        "option_c": "Rs. 450",
        "option_d": "Rs. 500",
        "correct_option": "C",
        "explanation": "Assuming total work of 24 units, A completes 9 units and B completes 6 units in 3 days. Person C completes the remaining 24 - 9 - 6 = 9 units, which represents 3/8 of the total work, giving C a share of 3/8 * Rs. 1,200 = Rs. 450.",
        "subject": "Mathematics",
        "topic": "Time and Work",
        "difficulty": "Hard",
        "estimated_time_seconds": 75
    },

    # ==================== TIME SPEED DISTANCE (8) ====================
    {
        "question_text": "A train travels at a speed of 72 km/h. How many meters does it cover in 15 seconds?",
        "option_a": "180 meters",
        "option_b": "300 meters",
        "option_c": "360 meters",
        "option_d": "1,080 meters",
        "correct_option": "B",
        "explanation": "To convert speed from km/h to m/s, multiply 72 by 5/18, which gives 20 m/s. Distance is speed multiplied by time, so 20 m/s * 15 seconds = 300 meters. A common trap is multiplying 72 directly by 15 without unit conversion, which wrongly gives 1,080 meters.",
        "subject": "Mathematics",
        "topic": "Time Speed Distance",
        "difficulty": "Easy",
        "estimated_time_seconds": 40
    },
    {
        "question_text": "A car travels from town A to town B at a speed of 40 km/h and returns along the same route at a speed of 60 km/h. What is the average speed of the car for the entire round trip?",
        "option_a": "45 km/h",
        "option_b": "48 km/h",
        "option_c": "50 km/h",
        "option_d": "52 km/h",
        "correct_option": "B",
        "explanation": "For equal distances, average speed is (2 * v1 * v2) / (v1 + v2). Substituting 40 and 60 gives (2 * 40 * 60) / (40 + 60) = 4800 / 100 = 48 km/h. A common trap is taking the simple average (40 + 60) / 2 = 50 km/h, which is incorrect because travel times differ.",
        "subject": "Mathematics",
        "topic": "Time Speed Distance",
        "difficulty": "Easy",
        "estimated_time_seconds": 45
    },
    {
        "question_text": "A train 250 meters long is running at a uniform speed of 90 km/h. How many seconds will it take to pass a standing signal pole?",
        "option_a": "8 seconds",
        "option_b": "10 seconds",
        "option_c": "12 seconds",
        "option_d": "15 seconds",
        "correct_option": "B",
        "explanation": "Convert speed of 90 km/h to m/s by multiplying by 5/18, yielding 25 m/s. Crossing a pole requires covering its own length of 250 meters. Dividing 250 meters by 25 m/s gives 10 seconds.",
        "subject": "Mathematics",
        "topic": "Time Speed Distance",
        "difficulty": "Easy",
        "estimated_time_seconds": 40
    },
    {
        "question_text": "A train 180 meters long crosses a platform 220 meters long in 20 seconds. What is the speed of the train in km/h?",
        "option_a": "54 km/h",
        "option_b": "60 km/h",
        "option_c": "72 km/h",
        "option_d": "80 km/h",
        "correct_option": "C",
        "explanation": "Total distance covered is train length plus platform length: 180 + 220 = 400 meters. Speed in m/s is 400 meters / 20 seconds = 20 m/s. Converting 20 m/s to km/h by multiplying by 18/5 gives 72 km/h.",
        "subject": "Mathematics",
        "topic": "Time Speed Distance",
        "difficulty": "Standard",
        "estimated_time_seconds": 55
    },
    {
        "question_text": "Two trains of lengths 120 meters and 180 meters are moving towards each other on parallel tracks at speeds of 40 km/h and 32 km/h respectively. How much time will they take to completely pass each other?",
        "option_a": "10 seconds",
        "option_b": "12 seconds",
        "option_c": "15 seconds",
        "option_d": "20 seconds",
        "correct_option": "C",
        "explanation": "Relative speed in opposite directions is 40 + 32 = 72 km/h, which equals 20 m/s. Total distance to cross is sum of lengths: 120 + 180 = 300 meters. Dividing 300 meters by 20 m/s gives 15 seconds.",
        "subject": "Mathematics",
        "topic": "Time Speed Distance",
        "difficulty": "Standard",
        "estimated_time_seconds": 60
    },
    {
        "question_text": "A motorboat travels at a speed of 12 km/h in still water. If the speed of the river stream is 3 km/h, how many hours will it take the boat to travel 45 km downstream?",
        "option_a": "2.5 hours",
        "option_b": "3 hours",
        "option_c": "4 hours",
        "option_d": "5 hours",
        "correct_option": "B",
        "explanation": "Downstream speed is boat speed plus stream speed: 12 + 3 = 15 km/h. Time taken to travel 45 km downstream is distance divided by downstream speed: 45 / 15 = 3 hours.",
        "subject": "Mathematics",
        "topic": "Time Speed Distance",
        "difficulty": "Easy",
        "estimated_time_seconds": 40
    },
    {
        "question_text": "If a person walks at 4 km/h, he reaches his office 10 minutes late. If he walks at 5 km/h, he reaches 5 minutes early. What is the distance to his office?",
        "option_a": "4 km",
        "option_b": "5 km",
        "option_c": "6 km",
        "option_d": "8 km",
        "correct_option": "B",
        "explanation": "The time difference between arriving 10 minutes late and 5 minutes early is 15 minutes, which equals 1/4 hour. Setting up equation for distance D: (D / 4) - (D / 5) = 1 / 4, which simplifies to D / 20 = 1 / 4. Solving for D gives D = 5 km.",
        "subject": "Mathematics",
        "topic": "Time Speed Distance",
        "difficulty": "Standard",
        "estimated_time_seconds": 65
    },
    {
        "question_text": "A police constable spots a thief from a distance of 200 meters. The thief immediately starts running at 10 km/h, and the constable gives chase at 12 km/h. How far will the thief have run before he is caught?",
        "option_a": "800 meters",
        "option_b": "1,000 meters",
        "option_c": "1,200 meters",
        "option_d": "1,500 meters",
        "correct_option": "B",
        "explanation": "Relative speed closing in on the thief is 12 - 10 = 2 km/h. Time taken to close 200 meters (0.2 km) at 2 km/h is 0.2 / 2 = 0.1 hour (6 minutes). In 0.1 hour, the thief running at 10 km/h covers 10 * 0.1 = 1 km, which equals 1,000 meters.",
        "subject": "Mathematics",
        "topic": "Time Speed Distance",
        "difficulty": "Standard",
        "estimated_time_seconds": 70
    },

    # ==================== HCF/LCM (5) ====================
    {
        "question_text": "Find the highest common factor (HCF) of the numbers 108 and 144.",
        "option_a": "12",
        "option_b": "18",
        "option_c": "24",
        "option_d": "36",
        "correct_option": "D",
        "explanation": "Prime factorisation gives 108 = 2 squared multiplied by 3 cubed, and 144 = 2 to the power 4 multiplied by 3 squared. Taking lowest powers of common prime factors gives 2 squared multiplied by 3 squared, which is 4 * 9 = 36.",
        "subject": "Mathematics",
        "topic": "HCF/LCM",
        "difficulty": "Easy",
        "estimated_time_seconds": 35
    },
    {
        "question_text": "The HCF of two numbers is 12 and their LCM is 180. If one of the numbers is 36, what is the other number?",
        "option_a": "48",
        "option_b": "54",
        "option_c": "60",
        "option_d": "72",
        "correct_option": "C",
        "explanation": "The product of two numbers equals the product of their HCF and LCM. Product of HCF and LCM is 12 * 180 = 2,160. Dividing 2,160 by the given number 36 yields 60 as the other number.",
        "subject": "Mathematics",
        "topic": "HCF/LCM",
        "difficulty": "Easy",
        "estimated_time_seconds": 40
    },
    {
        "question_text": "Find the smallest positive integer which, when divided by 12, 15, and 20, leaves a remainder of 4 in each case.",
        "option_a": "56",
        "option_b": "60",
        "option_c": "64",
        "option_d": "124",
        "correct_option": "C",
        "explanation": "First calculate the LCM of 12, 15, and 20, which is 60. The required smallest number is LCM plus the remainder, which gives 60 + 4 = 64.",
        "subject": "Mathematics",
        "topic": "HCF/LCM",
        "difficulty": "Standard",
        "estimated_time_seconds": 50
    },
    {
        "question_text": "Three alarm clocks ring at intervals of 4 minutes, 6 minutes, and 9 minutes respectively. If they all ring together at 8:00 AM, at what time will they next ring together?",
        "option_a": "8:18 AM",
        "option_b": "8:24 AM",
        "option_c": "8:36 AM",
        "option_d": "8:54 AM",
        "correct_option": "C",
        "explanation": "The clocks ring together at multiples of the LCM of their time intervals. The LCM of 4, 6, and 9 is 36 minutes. Adding 36 minutes to 8:00 AM shows they next ring together at 8:36 AM.",
        "subject": "Mathematics",
        "topic": "HCF/LCM",
        "difficulty": "Standard",
        "estimated_time_seconds": 50
    },
    {
        "question_text": "What is the maximum length of a measuring rod that can be used to measure exactly three lengths measuring 450 cm, 600 cm, and 750 cm?",
        "option_a": "50 cm",
        "option_b": "100 cm",
        "option_c": "150 cm",
        "option_d": "300 cm",
        "correct_option": "C",
        "explanation": "The maximum measuring rod length required to measure all three given dimensions exactly is the HCF of 450, 600, and 750. Prime factorisation shows the common factor is 150 cm. Thus, the highest common factor is 150 cm.",
        "subject": "Mathematics",
        "topic": "HCF/LCM",
        "difficulty": "Standard",
        "estimated_time_seconds": 50
    },

    # ==================== MENSURATION (5) ====================
    {
        "question_text": "The perimeter of a rectangular hall is 56 meters and its length is 16 meters. What is the area of the hall?",
        "option_a": "160 sq meters",
        "option_b": "180 sq meters",
        "option_c": "192 sq meters",
        "option_d": "224 sq meters",
        "correct_option": "C",
        "explanation": "Perimeter of rectangle is 2 * (length + width), so 56 = 2 * (16 + width), giving width = 12 meters. Area is length times width: 16 * 12 = 192 sq meters.",
        "subject": "Mathematics",
        "topic": "Mensuration",
        "difficulty": "Easy",
        "estimated_time_seconds": 40
    },
    {
        "question_text": "The circumference of a circular park is 88 meters. Taking pi as 22/7, what is the surface area of the park?",
        "option_a": "308 sq meters",
        "option_b": "440 sq meters",
        "option_c": "616 sq meters",
        "option_d": "1,232 sq meters",
        "correct_option": "C",
        "explanation": "Circumference is 2 * pi * r: 88 = 2 * (22/7) * r = (44/7) * r, which solves to radius r = 14 meters. Area is pi * r squared: (22/7) * 14 * 14 = 22 * 2 * 14 = 616 sq meters.",
        "subject": "Mathematics",
        "topic": "Mensuration",
        "difficulty": "Standard",
        "estimated_time_seconds": 55
    },
    {
        "question_text": "A square plot has a side length of 25 meters. What is the total cost of fencing the plot along its border with wire at the rate of Rs. 12 per meter?",
        "option_a": "Rs. 300",
        "option_b": "Rs. 1,200",
        "option_c": "Rs. 3,000",
        "option_d": "Rs. 7,500",
        "correct_option": "B",
        "explanation": "Fencing covers the perimeter of the square plot: 4 * 25 = 100 meters. Total cost is perimeter times rate per meter: 100 * 12 = Rs. 1,200. A common trap is calculating plot area (625 sq m) instead of perimeter and multiplying by 12, which incorrectly gives Rs. 7,500.",
        "subject": "Mathematics",
        "topic": "Mensuration",
        "difficulty": "Easy",
        "estimated_time_seconds": 40
    },
    {
        "question_text": "If the side length of a metallic cube is increased from 4 cm to 6 cm, by how much does its total surface area increase?",
        "option_a": "72 sq cm",
        "option_b": "96 sq cm",
        "option_c": "120 sq cm",
        "option_d": "144 sq cm",
        "correct_option": "C",
        "explanation": "Total surface area of a cube is 6 times side squared. Initial surface area is 6 * (4 * 4) = 96 sq cm, and new surface area is 6 * (6 * 6) = 216 sq cm. Subtracting 96 from 216 gives an increase of 120 sq cm.",
        "subject": "Mathematics",
        "topic": "Mensuration",
        "difficulty": "Standard",
        "estimated_time_seconds": 55
    },
    {
        "question_text": "The perimeter of a right-angled triangle is 30 cm and its hypotenuse is 13 cm. What is the area of the triangle?",
        "option_a": "25 sq cm",
        "option_b": "30 sq cm",
        "option_c": "32.5 sq cm",
        "option_d": "60 sq cm",
        "correct_option": "B",
        "explanation": "Sum of base and height is perimeter minus hypotenuse: 30 - 13 = 17 cm. Using Pythagorean triple (5, 12, 13), perpendicular sides are 5 cm and 12 cm. Area of right triangle is 0.5 * 5 * 12 = 30 sq cm.",
        "subject": "Mathematics",
        "topic": "Mensuration",
        "difficulty": "Hard",
        "estimated_time_seconds": 70
    }
]

def count_sentences(text):
    clean = re.sub(r'Rs\.', 'Rs', text)
    clean = re.sub(r'(\d+)\.(\d+)', r'\1_\2', clean)
    sentences = [s.strip() for s in re.split(r'[.!?]+', clean) if s.strip()]
    return len(sentences)

print("Total questions count:", len(questions))

topic_counts = {}
difficulties = {}
keys_required = {
    "question_text", "option_a", "option_b", "option_c", "option_d",
    "correct_option", "explanation", "subject", "topic", "difficulty", "estimated_time_seconds"
}

forbidden_keywords = [
    "successive percentage", "savings fraction", "population", "invalid votes",
    "rice mixture", "40 litres", "4 months", "daughter"
]

errors = []

for i, q in enumerate(questions, 1):
    missing_keys = keys_required - set(q.keys())
    if missing_keys:
        errors.append(f"Q{i} missing keys: {missing_keys}")
    
    t = q["topic"]
    topic_counts[t] = topic_counts.get(t, 0) + 1
    
    d = q["difficulty"]
    difficulties[d] = difficulties.get(d, 0) + 1
    if d not in ["Easy", "Standard", "Hard"]:
        errors.append(f"Q{i} invalid difficulty: {d}")
        
    est = q["estimated_time_seconds"]
    if not isinstance(est, int) or est < 30 or est > 90:
        errors.append(f"Q{i} invalid estimated time: {est}")
        
    co = q["correct_option"]
    if co not in ["A", "B", "C", "D"]:
        errors.append(f"Q{i} invalid correct_option: {co}")
        
    opts = [q["option_a"], q["option_b"], q["option_c"], q["option_d"]]
    if len(set(opts)) != 4:
        errors.append(f"Q{i} options not unique: {opts}")
        
    if q["subject"] != "Mathematics":
        errors.append(f"Q{i} subject is not Mathematics: {q['subject']}")
        
    sentence_count = count_sentences(q["explanation"])
    if sentence_count < 2 or sentence_count > 3:
        errors.append(f"Q{i} explanation sentence count is {sentence_count}, expected 2-3")

    q_text_lower = (q["question_text"] + " " + q["explanation"]).lower()
    for kw in forbidden_keywords:
        if kw in q_text_lower:
            errors.append(f"Q{i} contains forbidden keyword '{kw}'")

print("\n--- TOPIC COUNTS ---")
for t, c in topic_counts.items():
    print(f"  {t}: {c}")

print("\n--- DIFFICULTY COUNTS ---")
for d, c in difficulties.items():
    print(f"  {d}: {c}")

if errors:
    print("\n--- ERRORS FOUND ---")
    for e in errors:
        print("  -", e)
else:
    print("\nAll quality checks passed successfully!")
    with open("authored-math-b.json", "w") as f:
        json.dump(questions, f, indent=2)
    print("Saved 50 questions to authored-math-b.json")
