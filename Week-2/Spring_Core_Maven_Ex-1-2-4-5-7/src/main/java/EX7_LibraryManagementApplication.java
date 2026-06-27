import com.library.service.EX7_BookService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class EX7_LibraryManagementApplication {

    public static void main(String[] args) {

        ApplicationContext context =
                new ClassPathXmlApplicationContext("EX7_applicationContext.xml");

        EX7_BookService service =
                context.getBean("bookService", EX7_BookService.class);

        service.display();

    }

}
