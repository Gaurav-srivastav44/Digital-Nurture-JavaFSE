import com.library.service.EX4_BookService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class EX4_LibraryManagementApplication {

    public static void main(String[] args) {

        ApplicationContext context =
                new ClassPathXmlApplicationContext("EX4_applicationContext.xml");

        EX4_BookService service =
                context.getBean("bookService", EX4_BookService.class);

        service.display();

    }

}
