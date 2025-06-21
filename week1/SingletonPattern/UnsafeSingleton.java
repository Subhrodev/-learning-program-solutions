package SingletonPattern;

public class UnsafeSingleton {

    private static UnsafeSingleton instance;

    private UnsafeSingleton() {
        System.out.println("UnsafeSingleton instance created by: " + Thread.currentThread().getName());
    }

    public static UnsafeSingleton getInstance() {
        if (instance == null) {
            instance = new UnsafeSingleton();
        }
        return instance;
    }
}
