package SingletonPattern;

public class Main {
    public static void main(String[] args) {

        // Create 5 threads trying to access Singleton
        for (int i = 0; i < 5; i++) {
            Thread t = new Thread(() -> {
            	
            	//Use one at a time
                SafeSingleton obj = SafeSingleton.getInstance();
                System.out.println("Got instance by "+Thread.currentThread().getName()+" : "+ obj.hashCode());
                
                //UnsafeSingleton obj = UnsafeSingleton.getInstance();
                //System.out.println("Got instance by "+Thread.currentThread().getName()+" : "+ obj.hashCode());
                
            });
            t.start();
        }
    }
}
