import com.library.service.EX1_BookService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class EX1_LibraryManagementApplication {

    public static void main(String[] args) {

        ApplicationContext context =
                new ClassPathXmlApplicationContext("EX1_applicationContext.xml");

        EX1_BookService service =
                (EX1_BookService) context.getBean("bookService");

        service.display();

    }

}
