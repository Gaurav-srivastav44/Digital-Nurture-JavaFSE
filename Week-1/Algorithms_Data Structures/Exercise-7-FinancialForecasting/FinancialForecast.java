public class FinancialForecast {

    public static double forecast(double currentValue,
                                  double growthRate,
                                  int years) {

        if (years == 0) {
            return currentValue;
        }

        return forecast(
                currentValue * (1 + growthRate),
                growthRate,
                years - 1
        );
    }

    public static void main(String[] args) {

        double result = forecast(10000, 0.10, 5);

        System.out.printf("Future Value: %.2f%n", result);
    }
}
