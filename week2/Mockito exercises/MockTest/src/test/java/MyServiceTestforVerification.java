import static org.mockito.Mockito.*;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

public class MyServiceTestforVerification {

    @Test
    public void testVerifyInteraction() {
        // Step 1: Create mock
        ExternalApi mockApi = Mockito.mock(ExternalApi.class);

        // Step 2: Inject mock into service and call method
        MyService service = new MyService(mockApi);
        service.fetchData();  // this should trigger mockApi.getData()

        // Step 3: Verify interaction
        verify(mockApi).getData();  // Passes only if getData() was actually called
    }
}
