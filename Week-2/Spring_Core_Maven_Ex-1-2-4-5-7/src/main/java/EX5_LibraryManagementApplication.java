import com.library.service.EX5_BookService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class EX5_LibraryManagementApplication {

    public static void main(String[] args) {

        ApplicationContext context =
                new ClassPathXmlApplicationContext("EX5_applicationContext.xml");

        EX5_BookService service =
                context.getBean("bookService", EX5_BookService.class);

        service.display();

    }

}
