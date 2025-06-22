
public class Product {
    int proId;
    String proName;
    String category;

    public Product(int productId, String productName, String category) {
        this.proId=productId;
        this.proName=productName;
        this.category=category;
    }

    @Override
    public String toString() {
        return "Product ID: " + proId + ", Name: " + proName + ", Category: " + category;
    }
}
