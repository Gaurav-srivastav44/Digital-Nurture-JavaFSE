import com.library.service.EX2_BookService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class EX2_LibraryManagementApplication {

    public static void main(String[] args) {

        ApplicationContext context =
                new ClassPathXmlApplicationContext("EX2_applicationContext.xml");

        EX2_BookService service =
                (EX2_BookService) context.getBean("bookService");

        service.display();

    }

}
