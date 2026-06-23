import java.util.Arrays;
import java.util.Comparator;

public class EcommerceSearchTest {

    public static void main(String[] args) {

        Product[] products = {
                new Product(1, "Laptop", "Electronics"),
                new Product(2, "Phone", "Electronics"),
                new Product(3, "Shoes", "Fashion"),
                new Product(4, "Watch", "Accessories")
        };

        Product linear = SearchService.linearSearch(products, "Phone");

        if (linear != null) {
            System.out.println("Linear Search Found: " + linear.productName);
        }

        Arrays.sort(products, Comparator.comparing(p -> p.productName));

        Product binary = SearchService.binarySearch(products, "Phone");

        if (binary != null) {
            System.out.println("Binary Search Found: " + binary.productName);
        }
    }
}
