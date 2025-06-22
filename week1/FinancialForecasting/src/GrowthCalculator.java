//Simple program to calculate the compound Interest on a sum using Recursion

import java.util.*;
public class GrowthCalculator {

    // Recursive method to calculate future value
    public static double calculateFutureValue(double curVal, double rate, int yrs) {
        // Base case: no more years left
        if (yrs == 0) {
            return curVal;
        }

        // Recursive case: apply growth and reduce years
        return calculateFutureValue(curVal * (1 + rate/100), rate, yrs - 1);
    }

    public static void main(String[] args) {
    	Scanner scanner=new Scanner(System.in);
    	System.out.println("Enter current Value: ");
    	double Val=scanner.nextLong();
    	System.out.println("Enter rate: ");
    	double rate=scanner.nextLong();
    	System.out.println("Enter time: ");
    	int yrs=scanner.nextInt();

        double futureValue = calculateFutureValue(Val, rate, yrs);
        
        System.out.println("Current Value: "+Val);
        System.out.printf("Future Value after " +yrs+ " years: %.2f",futureValue);
    }
}
