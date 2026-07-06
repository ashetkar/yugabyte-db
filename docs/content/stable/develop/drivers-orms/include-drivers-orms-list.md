<!--
+++
private = true
block_indexing = true
+++
-->

{{< tabpane text=true >}}

  {{% tab header="Java" lang="java" %}}

|            | Version | Support Level | Example apps |
| :--------- | :------ | :------------ | :----------- |
| **Drivers** | | | |
| YugabyteDB JDBC Smart Driver<br/>[Recommended] | [latest version](https://mvnrepository.com/artifact/com.yugabyte/jdbc-yugabytedb) | Full | [CRUD](/stable/develop/drivers-orms/java/yugabyte-jdbc/) |
| YugabyteDB R2DBC Smart Driver | [latest version](https://mvnrepository.com/artifact/com.yugabyte/r2dbc-postgresql) | Full | [CRUD](/stable/develop/drivers-orms/java/yb-r2dbc/) |
| PostgreSQL JDBC Driver  | [latest version](https://mvnrepository.com/artifact/org.postgresql/postgresql) | Full | [CRUD](/stable/develop/drivers-orms/java/postgres-jdbc/) |
| Vert.x Pg Client       | [latest version](https://mvnrepository.com/artifact/io.vertx/vertx-core) | Full | [CRUD](/stable/develop/drivers-orms/java/ysql-vertx-pg-client/) |
| YugabyteDB Java Driver for YCQL | [latest version](https://mvnrepository.com/artifact/com.yugabyte/cassandra-driver-core) | Full | [CRUD](/stable/develop/drivers-orms/java/ycql/) |
| YugabyteDB Java Driver for YCQL | [latest version](https://mvnrepository.com/artifact/com.yugabyte/java-driver-core) | Full | [CRUD](/stable/develop/drivers-orms/java/ycql-4.x/) |
| **ORMs** | | | |
| Ebean                   | [latest version](https://mvnrepository.com/artifact/io.ebean/ebean) | Full | [CRUD](/stable/develop/drivers-orms/java/ebean/) |
| Hibernate               | [latest version](https://mvnrepository.com/artifact/org.hibernate/hibernate-core) | Full | [CRUD](/stable/develop/drivers-orms/java/hibernate/) |
| Spring Data YugabyteDB  | [latest version](https://mvnrepository.com/artifact/com.yugabyte/spring-data-yugabytedb-ysql) | Full | [CRUD](/stable/integrations/spring-framework/sdyb/#examples) |
| Spring Data JPA         | [latest version](https://mvnrepository.com/artifact/org.springframework.data/spring-data-jpa) | Full | [CRUD](/stable/integrations/spring-framework/sd-jpa/#fundamentals) |
| MyBatis                 | [latest version](https://mvnrepository.com/artifact/org.mybatis/mybatis) | Full | [CRUD](/stable/develop/drivers-orms/java/mybatis/) |
<!-- | Micronaut | Beta |  | -->
<!-- | Quarkus | Beta |  | -->

  {{% /tab %}}

  {{% tab header="Go" lang="go" %}}

|            | Version | Support Level | Example apps |
| :--------- | :------ | :------------ | :----------- |
| **Drivers** | | | |
| YugabyteDB PGX Smart Driver<br/>[Recommended] | [latest version](https://pkg.go.dev/github.com/yugabyte/pgx/v5) | Full | [CRUD](/stable/develop/drivers-orms/go/yb-pgx/) |
| PGX Driver | [latest version](https://pkg.go.dev/github.com/jackc/pgx/v5) | Full | [CRUD](/stable/develop/drivers-orms/go/pgx/) |
| PQ Driver  | [latest version](https://github.com/lib/pq/releases) | Full | [CRUD](/stable/develop/drivers-orms/go/pq/) |
| YugabyteDB Go Driver for YCQL | [latest version](https://github.com/yugabyte/gocql) | Full | [CRUD](/stable/develop/drivers-orms/go/ycql/) |
| **ORMs** | | | |
| GORM       | [latest version](https://github.com/go-gorm/gorm) | Full | [CRUD](/stable/develop/drivers-orms/go/gorm/) |
| PG         | [latest version](https://github.com/go-pg/pg) | Full | [CRUD](/stable/develop/drivers-orms/go/pg/) |

  {{% /tab %}}

  {{% tab header="Python" lang="python" %}}

|            | Version | Support Level | Example apps |
| :--------- | :------ | :------------ | :----------- |
| **Drivers** | | | |
| YugabyteDB Psycopg 2 Smart Driver<br/>[Recommended] | [latest version](https://github.com/yugabyte/psycopg2)<br>[Binary](https://pypi.org/project/psycopg2-yugabytedb-binary/#files) |Full | [CRUD](/stable/develop/drivers-orms/python/yugabyte-psycopg2/) |
| YugabyteDB Psycopg 3 Smart Driver | [latest version](https://pypi.org/project/psycopg-yugabytedb/) | Full | [CRUD](/stable/develop/drivers-orms/python/yugabyte-psycopg3/) |
| PostgreSQL Psycopg 2 Driver | [latest version](https://github.com/psycopg/psycopg2) | Full | [CRUD](/stable/develop/drivers-orms/python/postgres-psycopg2/) |
| PostgreSQL Psycopg 3 Driver | [latest version](https://github.com/psycopg/psycopg) | Full | [CRUD](/stable/develop/drivers-orms/python/postgres-psycopg3/) |
| aiopg      | [latest version](https://pypi.org/project/aiopg/) | Full | [Hello World](/stable/develop/drivers-orms/python/aiopg/) |
| YugabyteDB Python Driver for YCQL | [latest version](https://github.com/yugabyte/cassandra-python-driver/tree/master) | Full | [CRUD](/stable/develop/drivers-orms/python/ycql/) |
| **ORMs** | | | |
| Django     | [latest version](https://pypi.org/project/Django/) | Full | [CRUD](/stable/develop/drivers-orms/python/django/) |
| SQLAlchemy | [latest version](https://pypi.org/project/SQLAlchemy/) | Full | [CRUD](/stable/develop/drivers-orms/python/sqlalchemy/) |

  {{% /tab %}}

  {{% tab header="NodeJS" lang="nodejs" %}}

|            | Version | Support Level | Example apps |
| :--------- | :------ | :------------ | :----------- |
| **Drivers** | | | |
| YugabyteDB node-postgres Smart Driver<br/>[Recommended] | [latest version](https://github.com/yugabyte/node-postgres) | Full | [CRUD](/stable/develop/drivers-orms/nodejs/yugabyte-node-driver/) |
| PostgreSQL node-postgres Driver | [latest version](https://www.npmjs.com/package/pg) | Full | [CRUD](/stable/develop/drivers-orms/nodejs/postgres-node-driver/) |
| YugabyteDB Node.js Driver for YCQL | [latest version](https://github.com/yugabyte/cassandra-nodejs-driver) | Full | [CRUD](/stable/develop/drivers-orms/nodejs/ycql/) |
| **ORMs** | | | |
| Sequelize | [latest version](https://www.npmjs.com/package/sequelize)  | Full | [CRUD](/stable/develop/drivers-orms/nodejs/sequelize/) |
| Prisma    | [latest version](https://www.npmjs.com/package/prisma)   | Full | [CRUD](/stable/develop/drivers-orms/nodejs/prisma/) |
| TypeORM   | [latest version](https://www.npmjs.com/package/typeorm) | Full | [CRUD](/stable/develop/drivers-orms/nodejs/typeorm/) |

  {{% /tab %}}

  {{% tab header="Elixir" lang="elixir" %}}

|            | Version | Support Level | Example apps |
| :--------- | :------ | :------------ | :----------- |
| **Drivers** | | | |
| Postgrex Driver | [latest version](https://hex.pm/packages/postgrex) | Full | [CRUD](/stable/develop/tutorials/build-apps/elixir/cloud-ysql-elixir/) |
| **ORMs** | | | |
| Phoenix with Ecto | [latest version](https://hex.pm/packages/phoenix) | Full | [CRUD](/stable/develop/drivers-orms/elixir/phoenix/) |

  {{% /tab %}}

  {{% tab header="C" lang="c" %}}

| Driver        | Version | Support Level | Example apps |
| :------------ | :------ | :------------ | :----------- |
| libpq C Driver| 5.11    | Full          | [CRUD](/stable/develop/drivers-orms/c/ysql/) |

  {{% /tab %}}

  {{% tab header="C++" lang="cpp" %}}

| Driver     | Version | Support Level | Example apps |
| :--------- | :------ | :------------ | :----------- |
| libpqxx C++ Driver             | | Full | [CRUD](/stable/develop/drivers-orms/cpp/ysql/) |
| YugabyteDB C++ Driver for YCQL | [latest version](https://github.com/yugabyte/cassandra-cpp-driver/releases) | Full | [CRUD](/stable/develop/drivers-orms/cpp/ycql/) |

  {{% /tab %}}

  {{% tab header="C#" lang="csharp" %}}

|            | Version | Support Level | Example apps |
| :--------- | :------ | :------------ | :----------- |
| **Drivers** | | | |
| YugabyteDB C# Smart Driver for YSQL | [latest version](https://www.nuget.org/packages/NpgsqlYugabyteDB/) | Full | [CRUD](/stable/develop/drivers-orms/csharp/ysql/) |
| PostgreSQL Npgsql Driver            | [latest version](https://www.nuget.org/packages/Npgsql/) | Full | [CRUD](/stable/develop/drivers-orms/csharp/postgres-npgsql/) |
| YugabyteDB C# Driver for YCQL       | [latest version](https://github.com/yugabyte/cassandra-csharp-driver/releases) | Full | [CRUD](/stable/develop/drivers-orms/csharp/ycql/) |
| **ORM** | | | |
| Entity Framework                    | [latest version](https://www.nuget.org/packages/Microsoft.EntityFrameworkCore/)  | Full | [CRUD](/stable/develop/drivers-orms/csharp/entityframework/) |

  {{% /tab %}}

  {{% tab header="Ruby" lang="ruby" %}}

|             | Version | Support Level | Example apps |
| :---------- | :------ | :------------ | :----------- |
| **Drivers** | | | |
| YugabyteDB ruby-pg Smart Driver | [latest version](https://github.com/yugabyte/ruby-pg) | Full | [CRUD](/stable/develop/drivers-orms/ruby/yb-ruby-pg/) |
| Pg Gem Driver                   | [latest version](https://github.com/ged/ruby-pg) | Full | [CRUD](/stable/develop/drivers-orms/ruby/ruby-pg/) |
| YugabyteDB Ruby Driver for YCQL | [latest version](https://github.com/yugabyte/cassandra-ruby-driver) | Full | [CRUD](/stable/develop/drivers-orms/ruby/ycql/) |
| **ORM**     | | | |
| Active Record                   | [latest version](https://rubygems.org/gems/activerecord) | Full | [CRUD](/stable/develop/drivers-orms/ruby/activerecord/) |

  {{% /tab %}}

  {{% tab header="Rust" lang="rust" %}}

| ORM        | Version | Support Level | Example apps |
| :--------- | :------ | :------------ | :----------- |
| **Driver** | | | |
| Rust-postgres Driver | [latest version](https://github.com/yugabyte/rust-postgres) | Full | [CRUD](/stable/develop/drivers-orms/rust/yb-rust-postgres/) |
| **ORM**    | | | |
| Diesel     | [latest version](https://crates.io/crates/diesel)    | Full          | [CRUD](/stable/develop/drivers-orms/rust/diesel/) |

  {{% /tab %}}

  {{% tab header="PHP" lang="php" %}}

|                  | Version | Support Level | Example apps |
| :--------------- | :------ | :------------ | :----------- |
| **Driver** | | | |
| php-pgsql Driver |         | Full | [CRUD](/stable/develop/drivers-orms/php/ysql/) |
| **ORM**    | | | |
| Laravel          | [latest version](https://packagist.org/packages/laravel/framework)    | Full | [CRUD](/stable/develop/drivers-orms/php/laravel/) |

  {{% /tab %}}

  {{% tab header="Scala" lang="scala" %}}

| Driver     | Version | Support Level | Example apps |
| :--------- | :------ | :------------ | :----------- |
| YugabyteDB Java Driver for YCQL | [latest version](https://mvnrepository.com/artifact/com.yugabyte/cassandra-driver-core) | Full | [CRUD](/stable/develop/drivers-orms/scala/ycql/) |

  {{% /tab %}}

{{< /tabpane >}}
