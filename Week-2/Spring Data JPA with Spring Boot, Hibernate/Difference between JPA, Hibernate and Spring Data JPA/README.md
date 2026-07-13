# Difference between JPA, Hibernate and Spring Data JPA

## What is JPA?

**JPA (Java Persistence API)** is a **specification** (standard) defined by Java EE/Jakarta EE for managing relational data in Java applications using Object-Relational Mapping (ORM).

JPA defines:

- How to map Java objects (entities) to database tables using annotations such as `@Entity`, `@Table`, `@Id`, and `@Column`
- How to perform CRUD operations through the `EntityManager` API
- How to write queries using JPQL (Java Persistence Query Language)

JPA is **not an implementation** — it is only a set of rules and interfaces. You need an ORM provider (such as Hibernate, EclipseLink, or OpenJPA) to actually run JPA-based persistence.

## What is Hibernate?

**Hibernate** is a popular **ORM framework** and the most widely used **implementation of the JPA specification**.

Hibernate provides:

- Mapping of Java classes to database tables
- Automatic SQL generation for CRUD operations
- Caching (first-level and second-level)
- Lazy loading and relationship management (`@OneToMany`, `@ManyToOne`, etc.)
- Support for both JPA-standard APIs and Hibernate-specific features (HQL, Criteria API)

In a Spring Boot application, when you add `spring-boot-starter-data-jpa`, Hibernate is included as the default JPA provider.

## What is Spring Data JPA?

**Spring Data JPA** is a **Spring module** that sits on top of JPA and Hibernate to reduce boilerplate code for data access.

Spring Data JPA provides:

- Repository interfaces such as `JpaRepository`, `CrudRepository`, and `PagingAndSortingRepository`
- Automatic implementation of repository methods at runtime (no manual DAO classes)
- Built-in methods like `findAll()`, `findById()`, `save()`, and `deleteById()`
- **Query methods** — Spring derives SQL/JPQL from method names (e.g., `findByNameStartsWith`)
- Support for custom queries using `@Query`

Example:

```java
public interface CountryRepository extends JpaRepository<Country, String> {
    List<Country> findByNameStartsWith(String prefix);
}
```

Spring Boot creates the implementation automatically — you only declare the interface.

## Difference between JPA, Hibernate and Spring Data JPA

| Aspect | JPA | Hibernate | Spring Data JPA |
|--------|-----|-----------|-----------------|
| **Type** | Specification (standard) | ORM implementation | Spring abstraction layer |
| **Role** | Defines rules for ORM in Java | Implements JPA and adds extra ORM features | Simplifies data access using repositories |
| **Who provides it** | Jakarta EE (formerly Java EE) | Red Hat / JBoss community | Spring (Pivotal / VMware) |
| **Coding effort** | Moderate — use `EntityManager` directly | Moderate — can use JPA API or Hibernate API | Low — declare interfaces, Spring implements them |
| **Query writing** | JPQL via `EntityManager` | JPQL, HQL, Criteria API | Derived query methods, `@Query`, or `EntityManager` |
| **Dependency** | Needs an implementation to work | Can run standalone or as JPA provider | Requires JPA + a provider (Hibernate by default) |

### How they work together

```
Application Code
       ↓
Spring Data JPA  (Repository interfaces — JpaRepository)
       ↓
JPA API          (EntityManager, annotations — @Entity, @Id)
       ↓
Hibernate        (ORM implementation — generates SQL, manages sessions)
       ↓
MySQL Database
```

### Simple analogy

- **JPA** = The blueprint (what persistence should look like)
- **Hibernate** = The engine that builds and runs it
- **Spring Data JPA** = The convenience toolkit that lets you write less code on top of both

### When to use what

- Use **JPA annotations** (`@Entity`, `@Table`, etc.) to define your data model — this is standard across providers.
- **Hibernate** runs under the hood when you use Spring Boot with `spring-boot-starter-data-jpa`.
- Use **Spring Data JPA repositories** for everyday CRUD and query operations to avoid writing repetitive DAO implementation classes.
- Use **`EntityManager`** directly only when you need fine-grained control over persistence operations that repositories do not cover.
