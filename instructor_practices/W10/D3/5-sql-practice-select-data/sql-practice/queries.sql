-- Phase 1
SELECT * FROM puppies;

-- Phase 2
SELECT name, age_yrs, weight_lbs FROM puppies;

-- Phase 3
SELECT name, age_yrs, weight_lbs FROM puppies
WHERE id = 5;

-- Phase 4
SELECT name, age_yrs, weight_lbs FROM puppies
WHERE microchipped = true;

-- Phase 5
SELECT name, age_yrs, weight_lbs FROM puppies
WHERE weight_lbs > 25;

-- Phase 6
SELECT * FROM puppies
WHERE weight_lbs > 25 AND microchipped = 1;