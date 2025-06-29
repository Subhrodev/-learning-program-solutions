// File: MyServiceTest.java
import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

public class MyServiceTest {
    @Test
    public void testExternalApi() {
        // Step 1: Create mock object
        ExternalApi mockApi = Mockito.mock(ExternalApi.class);

        // Step 2: Stub method to return a predefined value
        when(mockApi.getData()).thenReturn("Mock Data");

        // Step 3: Inject mock into the service
        MyService service = new MyService(mockApi);

        // Call method and assert
        String result = service.fetchData();
        assertEquals("Mock Data", result);
    }
}
