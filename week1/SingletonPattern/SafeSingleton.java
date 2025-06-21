//The Singleton design pattern is a creational pattern that ensures the creation of only one instance of a class 
//and provides a global point of access to it.

//This code implements the Singleton design pattern with thread safety

package SingletonPattern;

public class SafeSingleton {

    private static volatile SafeSingleton instance;

    private SafeSingleton() {
        System.out.println("Singleton instance created by: " + Thread.currentThread().getName());
    }

    public static SafeSingleton getInstance() {
        if (instance == null) {
            synchronized (SafeSingleton.class) {
                if (instance == null) {
                    instance = new SafeSingleton();
                }
            }
        }
        return instance;
    }
}

