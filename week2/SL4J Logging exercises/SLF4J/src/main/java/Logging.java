import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class Logging {
    // Step 1: Create logger instance
    private static final Logger logger = LoggerFactory.getLogger(Logging.class);

    public static void main(String[] args) {
        // Step 2: Log messages
        logger.error("This is an error message");   // highest level
        logger.warn("This is a warning message");   // second highest
    }
}
