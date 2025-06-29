import static org.junit.Assert.*;
import org.junit.Test;

public class JTest {

    @Test
    public void testAdd() {
        Calculator calc = new Calculator();
        assertEquals(5, calc.add(3, 2));
        assertEquals(5, calc.subtract(9, 4));
    }
}
