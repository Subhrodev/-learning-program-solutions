DECLARE
  datelimit DATE := SYSDATE + 30;
BEGIN
  FOR loan IN (
    SELECT CustomerID, LoanID, DueDate
    FROM Loans
    WHERE DueDate <= datelimit
  )
  LOOP
    DBMS_OUTPUT.PUT_LINE(
      'Reminder: Loan ' || loan.LoanID || 
      ' for Customer ' || loan.CustomerID || 
      ' is due on ' || TO_CHAR(loan.DueDate, 'DD-MON-YYYY')
    );
  END LOOP;
END;
