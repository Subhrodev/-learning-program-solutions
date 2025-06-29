CREATE PROCEDURE TransferFunds(
  from_acc IN NUMBER,
  to_acc IN NUMBER,
  amount IN NUMBER
) AS
  from_balance NUMBER;
BEGIN

  SELECT Balance INTO from_balance
  FROM Accounts
  WHERE AccountID = from_acc;

  IF from_balance < amount THEN
    RAISE_APPLICATION_ERROR(-20001, 'Insufficient balance in source account.');
  END IF;


  UPDATE Accounts
  SET Balance = Balance - amount
  WHERE AccountID = from_acc;

  UPDATE Accounts
  SET Balance = Balance + amount
  WHERE AccountID = to_acc;

  COMMIT;
END;
/
