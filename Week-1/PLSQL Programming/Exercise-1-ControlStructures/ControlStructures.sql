DECLARE
BEGIN
    FOR c IN (
        SELECT CustomerID, Age
        FROM Customers
        WHERE Age > 60
    )
    LOOP
        UPDATE Loans
        SET InterestRate = InterestRate - 1
        WHERE CustomerID = c.CustomerID;

        DBMS_OUTPUT.PUT_LINE('Discount applied to Customer ' || c.CustomerID);
    END LOOP;
END;
/

DECLARE
BEGIN
    FOR c IN (
        SELECT CustomerID, Balance
        FROM Customers
        WHERE Balance > 10000
    )
    LOOP
        UPDATE Customers
        SET IsVIP = 'TRUE'
        WHERE CustomerID = c.CustomerID;

        DBMS_OUTPUT.PUT_LINE('VIP assigned to Customer ' || c.CustomerID);
    END LOOP;
END;
/

DECLARE
BEGIN
    FOR l IN (
        SELECT LoanID, CustomerID, DueDate
        FROM Loans
        WHERE DueDate BETWEEN SYSDATE AND SYSDATE + 30
    )
    LOOP
        DBMS_OUTPUT.PUT_LINE(
            'Reminder: Loan ' || l.LoanID ||
            ' for Customer ' || l.CustomerID ||
            ' due on ' || l.DueDate
        );
    END LOOP;
END;
/
