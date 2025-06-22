import java.util.*;

public class Main {
	
	//Linear Search
	public static Product linearSearch(Product[] products, int targetId) {
        for (Product product : products) {
            if (product.proId == targetId) {
                return product;
            }
        }
        return null;
    }
	
	//binary Search
    public static Product binarySearch(Product[] products, int targetId) {
        int left = 0;
        int right = products.length - 1;

        while (left <= right) {
            int mid = (left + right) / 2;
            if (products[mid].proId == targetId) {
                return products[mid];
            } else if (products[mid].proId < targetId) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return null;
    }

    // binary sort
    public static void Sort(Product[] products) {
        int n = products.length;
        for (int i = 0; i < n - 1; i++) {
            // Optimization: If no swaps happen, array is already sorted
            boolean swapped = false;
            for (int j = 0; j < n - 1 - i; j++) {
                if (products[j].proId > products[j + 1].proId) {
                    // Swap the products
                    Product temp = products[j];
                    products[j] = products[j + 1];
                    products[j + 1] = temp;
                    swapped = true;
                }
            }
            if (swapped == false) {
                break;
            }
        }
    }
    
    public static void main(String[] args) {
    	
    	Scanner scanner=new Scanner(System.in);
    	String proName,category;
    	int proID;
    	System.out.println("Enter number of products: ");
    	int n=scanner.nextInt();
    	Product[] products=new Product[n];
    	for(int i=0;i<n;i++) {
	    	System.out.println("Enter products ID: ");
	    	proID=scanner.nextInt();
	    	System.out.println("Enter products name: ");
	    	proName=scanner.nextLine();
	    	System.out.println("Enter products category: ");
	    	category=scanner.nextLine();
	    	products[i]=new Product(proID,proName,category);
    	}
//    	Product[] products = {
//            new Product(101, "Laptop", "Electronics"),
//            new Product(205, "Notebook", "Stationery"),
//            new Product(150, "Smartphone", "Electronics"),
//            new Product(50, "Chair", "Furniture")
//        };
    	
    	System.out.println("Search product by ID: ");
    	int s=scanner.nextInt();

        // Test Linear Search
        Product result1=linearSearch(products, s);
        if(result1 != null) 
        	 System.out.println("Linear Search Result: " + result1);
        else {
        	 System.out.println("Not Found");
		}
       

        // Sort before Binary Search
        Sort(products);

        // Test Binary Search
        Product result2=linearSearch(products, s);
        if(result1 != null) 
        	 System.out.println("Linear Search Result: " + result2);
        else {
        	 System.out.println("Not Found");
		}
       
    }
}
