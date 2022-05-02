SELECT  
    *
FROM 
    payment_order
WHERE  payment_order.data->'pay_order'->'status'->>'id' = '1'
