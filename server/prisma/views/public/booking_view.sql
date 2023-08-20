SELECT
  t1.starting_id,
  t1.end_id,
  t1.booking_id,
  t1.ship_id,
  t3.price,
  t2.name,
  t2.ship_type,
  t1.starting_date,
  t1.starting_time
FROM
  (
    (
      "Available Booking" t1
      LEFT JOIN "Spaceship" t2 ON ((t1.ship_id = t2.ship_id))
    )
    LEFT JOIN "Booking-spaceship" t3 ON (
      (
        (t2.ship_type = t3.ship_type)
        AND (t1.starting_id = t3.starting_id)
        AND (t1.end_id = t3.end_id)
      )
    )
  );