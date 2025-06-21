public class Main {
    public static void main(String[] args) {

        Logger logger1 = Logger.getInstance();
        Logger logger2 = Logger.getInstance();

        logger1.log("instance: " + logger1.hashCode());
        logger2.log("instance: " + logger2.hashCode());

        if (logger1 == logger2) {
            System.out.println("Singleton");
        } else {
            System.out.println("Not Singleton");
        }
    }
}
