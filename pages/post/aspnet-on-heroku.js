import styles from "./blogPostStyles.module.scss";
import Prism from "prismjs";
import Link from "next/link";
import { useContext, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import DarkModeContext from "../../contexts/darkMode/DarkModeContext";

export default () => {
  const darkModeContext = useContext(DarkModeContext);
  const { isDarkMode } = darkModeContext;

  useEffect(() => {
    Prism.highlightAll();
  });

  const stylesConfig = {
    code: isDarkMode
      ? `${styles.code} ${styles.code__dark}`
      : `${styles.code} ${styles.code__light}`,
    linkAnchor: isDarkMode
      ? `${styles.linkAnchor} ${styles.linkAnchor__dark}`
      : `${styles.linkAnchor} ${styles.linkAnchor__light}`,
    codeblock: isDarkMode
      ? `${styles.codeblock} ${styles.codeblock__dark}`
      : `${styles.codeblock}`,
    navPost: isDarkMode
      ? `${styles.navPost} ${styles.navPost__dark}`
      : `${styles.navPost} ${styles.navPost__light}`,
    caption: isDarkMode
      ? `${styles.caption} ${styles.caption__dark}`
      : `${styles.caption} ${styles.caption__light}`,
  };

  // Weird indention is for formatting.
  const codeFigure1 = `
  services.AddDbContextPool<ApplicationDbContext>(options =>
    options.UseSqlServer(
        Configuration.GetConnectionString("DefaultConnection")));`.trim();

  const codeFigure2 = `
  services.AddDbContextPool<ApplicationDbContext>(options =>
    options.UseNpgsql(
        Configuration.GetConnectionString("DefaultConnection")));`.trim();

  const codeFigure3 = `"ConnectionStrings": {
    "DefaultConnection": "Server=localhost; Port=5432; User Id=******; Password=******; Database=******"
  },`.trim();

  const codeFigure4 =
    `heroku buildpacks:set https://github.com/jincod/dotnetcore-buildpack -a <your-app-name>`.trim();

  const codeFigure5 = `services.AddDbContextPool<AppDbContext>(options =>
      {
          var env = Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT");

          string connStr;

          // Depending on if in development or production, use either Heroku-provided
          // connection string, or development connection string from env var.
          if (env == "Development")
          {
              // Use connection string from file.
              connStr = Configuration.GetConnectionString("DefaultConnection");
          }
          else
          {
              // Use connection string provided at runtime by Heroku.
              var connUrl = Environment.GetEnvironmentVariable("DATABASE_URL");

              // Parse connection URL to connection string for Npgsql
              connUrl = connUrl.Replace("postgres://", string.Empty);
              var pgUserPass = connUrl.Split("@")[0];
              var pgHostPortDb = connUrl.Split("@")[1];
              var pgHostPort = pgHostPortDb.Split("/")[0];
              var pgDb = pgHostPortDb.Split("/")[1];
              var pgUser = pgUserPass.Split(":")[0];
              var pgPass = pgUserPass.Split(":")[1];
              var pgHost = pgHostPort.Split(":")[0];
              var pgPort = pgHostPort.Split(":")[1];

              connStr = $"Server={pgHost};Port={pgPort};User Id={pgUser};Password={pgPass};Database={pgDb};SSL Mode=Require;TrustServerCertificate=True";
          }

          // Whether the connection string came from the local development configuration file
          // or from the environment variable from Heroku, use it to set up your DbContext.
          options.UseNpgsql(connStr);
      });`.trim();

  return (
    <Layout>
      <h1 className={styles.h1}>Hosting an ASP.NET Core App on Heroku</h1>
      <div className={styles.infoFlexContainer}>
        <div className={styles.infoFlexItem__author}>
          <img
            className={styles.profilePhoto}
            src="/images/profilePhoto.jpg"
            alt="Andrew Umstead"
          />
          <span className={styles.byLine}>Andrew Umstead</span>
        </div>
        <span className={styles.date}>May 20th, 2021</span>
      </div>

      <article className={styles.article}>
        <p className={styles.p}>
          This is a guide to getting a .NET Core application up and running for
          free on Heroku. It's not fully comprehensive, because I'm essentially
          a newb at hosting in general. That's why I use Heroku — because it's
          easy.
        </p>
        <p className={styles.p}>
          Most of this knowledge comes from Neil Cummings' most recent Angular
          and .NET course on Udemy. His step-by-step instructions were
          impeccable. This is the condensed version, which I'm writing in part
          so I don't have to watch the videos for a third time.
        </p>

        <h2 className={styles.h2}>Just the ASP.NET Core Part</h2>

        <p className={styles.p}>
          If your app is a SPA with a .NET Core Web API, you'll want to skip
          below and start with the steps needed to prepare the SPA. I'm going to
          start here with the shorter process for just a Razor Pages or MVC app.
        </p>

        <h3 className={styles.h3}>Step 1: Delete the migrations folder</h3>

        <p className={styles.p}>
          I suppose you don't need to do this if you're already using Postgres.
          Heroku provides a free Postgres database, and that's the one I use.
          First, I make a "pre-postgres transition" git commit, just to be safe.
          Then, I delete the migrations folder.
        </p>

        <h3 className={styles.h3}>Step 2: Drop the old database</h3>

        <p className={styles.p}>
          I assume this step actually isn't necessary, but Neil told me to do
          it, so I still do it. I use the 'drop-database' command in the package
          manager console.
        </p>

        <h3 className={styles.h3}>
          Step 3: Add Postgres provider Nuget package
        </h3>

        <p className={styles.p}>
          You need to download and add the Postgres provider package to your
          project. It is called 'Npgsql.EntityFrameworkCore.PostgreSQL'. I just
          search for this in the Nuget package manager, and it comes up. This
          package lets you use a Postgres database with Entity Framework Core.
        </p>

        <p className={styles.p}>
          You also have to make sure you use the version of this package that
          matches your EF Core package version. So, even though there's npgsql
          5.0 available, if you're using an earlier version of EF Core, such as
          3.1, you'll get an error.
        </p>

        <h3 className={styles.h3}>Step 4: Use the Postgres provider</h3>

        <p className={styles.p}>
          Before configuring everything for Heroku, we'll get the Postgres DB
          working locally. So, fair warning, in a few minutes we'll have to add
          more to this particular step. But for now, and in the following step,
          we'll configure our app so that it uses Postgres locally in
          development mode too.
        </p>

        <p className={styles.p}>
          So, after adding the Nuget package, you have to actually use the
          provider in your app. This is done in the{" "}
          <code className={stylesConfig.code}>ConfigureServices</code> method of
          your <code className={stylesConfig.code}>Startup</code> class.
        </p>

        <p className={styles.p}>
          If you use the SQL Server LocalDB feature in development like I do,
          when you add your database context class to your services, it probably
          looks something like this:
        </p>

        <div className={stylesConfig.codeblock}>
          <pre
            style={{ borderRadius: "5px", margin: "0 0", padding: "2.5rem" }}
          >
            <code className="language-dotnet">{codeFigure1}</code>
          </pre>
        </div>

        <p className={styles.p}>
          In the options LAMBDA, you just swap out the SqlServer provider for
          the Postgres one. The exact example from above, only using the
          Postgres provider instead, would look like this:
        </p>

        <div className={stylesConfig.codeblock}>
          <pre
            style={{ borderRadius: "5px", margin: "0 0", padding: "2.5rem" }}
          >
            <code className="language-dotnet">{codeFigure2}</code>
          </pre>
        </div>

        <h3 className={styles.h3}>Step 5: Use a Postgres connection string</h3>

        <p className={styles.p}>
          In your appsettings.development.json file or wherever your connection
          string is located, you'll have to change it to a Postgres one. You can
          find the format at{" "}
          <a
            className={stylesConfig.linkAnchor}
            target="_blank"
            href="https://www.connectionstrings.com/"
          >
            connectionstrings.com
          </a>{" "}
          or try to follow this format here:
        </p>

        <div className={stylesConfig.codeblock}>
          <pre
            style={{ borderRadius: "5px", margin: "0 0", padding: "2.5rem" }}
          >
            <code className="language-dotnet">{codeFigure3}</code>
          </pre>
        </div>

        <p className={styles.p}>
          5432 is the default port for Postgres. You can also just choose your
          DB name here, and it will be used when your DB is created.
        </p>

        <h3 className={styles.h3}>Step 6: Add migration and create DB</h3>

        <p className={styles.p}>
          Now you need to create a new migration, which if you deleted your
          migrations folder before, this will be your initial migration. I use
          the "add-migration" command in the package manager console. Then, you
          can run the migration, which will create the Postgres DB. I run
          migrations every time my app starts from my{" "}
          <code className={stylesConfig.code}>Program</code> class, but I
          suppose you could also run the "update-database" in the package
          manager console as well. Of course, there's the .NET CLI as well.
        </p>

        <p className={styles.p}>
          Now your Postgres DB should be created and your app should run
          smoothly in development mode. You can view your data using pgAdmin,
          which you can search for and download if you don't have it.
        </p>

        <h2 className={styles.h2}>On to Heroku</h2>

        <h3 className={styles.h3}>Step 1: Install the Heroku CLI</h3>

        <p className={styles.p}>
          I've had the CLI installed for ages, so I don't remember going through
          the process, but here is a link to instructions:{" "}
          <a
            className={stylesConfig.linkAnchor}
            target="_blank"
            href="https://devcenter.heroku.com/articles/heroku-cli"
          >
            The Heroku CLI
          </a>
          . You'll need to login as well.
        </p>

        <h3 className={styles.h3}>Step 2: Create a new app</h3>

        <p className={styles.p}>
          You can create a new Heroku app using the CLI or the dashboard. I use
          the dashboard because it's easiest for me.
        </p>

        <h3 className={styles.h3}>
          Step 3: Add the .NET Core buildpack to your app
        </h3>

        <p className={styles.p}>
          So, here is where the magic and Heroku's ease-of-use really shines.
        </p>

        <p className={styles.p}>
          I've yet to learn how to host .NET Core apps myself on Linux or IIS —
          I think you have to install the .NET SDK, set up a reverse proxy, and
          do all sorts of configuring. But, with Heroku and this community
          created buildpack, there's just a simple command to take care of all
          that for you.{" "}
        </p>

        <p className={styles.p}>
          Here's a link to the{" "}
          <a
            className={stylesConfig.linkAnchor}
            target="_blank"
            href="https://github.com/jincod/dotnetcore-buildpack"
          >
            buildpack's Github
          </a>
          . I use the .NET Core edge command, and it has always worked for me.
          Just copy/paste the command into your terminal. The command adds the
          buildpack to your Heroku app. There is a required flag, as Heroku
          needs the name of the app. The flag is{" "}
          <code className={stylesConfig.code}>-a &#60;your-app-name&#62;</code>{" "}
          or{" "}
          <code className={stylesConfig.code}>
            -app &#60;your-app-name&#62;
          </code>
          . The full command would look like this:
        </p>

        <div className={stylesConfig.codeblock}>
          <pre
            style={{ borderRadius: "5px", margin: "0 0", padding: "2.5rem" }}
          >
            <code className="language-dotnet">{codeFigure4}</code>
          </pre>
        </div>

        <h3 className={styles.h3}>Step 4: Add Postgres as an add-on</h3>

        <p className={styles.p}>
          In the resources tab, you can search Add-ons and find Heroku Postgres.
          Add the free Hobby Dev version to your app.
        </p>

        <h3 className={styles.h3}>Step 5: Add Heroku Postgres code snippet</h3>

        <p className={styles.p}>
          This is the strangest part of the whole process. Heroku is able to
          change your database connection string. I don't fully understand why
          or what's going on with this, but it is related to the free tier. So,
          there is a code snippet that needs to be copy/pasted into your app.
          Here is the snippet:
        </p>

        <div className={stylesConfig.codeblock}>
          <pre
            style={{ borderRadius: "5px", margin: "0 0", padding: "2.5rem" }}
          >
            <code className="language-dotnet">{codeFigure5}</code>
          </pre>
        </div>

        <p className={styles.p}>
          Note, this is where the database context is added to our services, or
          dependency injection container. This line is from the{" "}
          <code className={stylesConfig.code}>ConfigureServices</code> method of
          the <code className={stylesConfig.code}>Startup</code> class. Earlier,
          I mentioned that we'd have to change this line of code for Heroku.
        </p>

        <p className={styles.p}>
          The required snippet is the body of the LAMBDA function. Note, that if
          the environment is in{" "}
          <code className={stylesConfig.code}>Development</code>, the connection
          string comes from the{" "}
          <code className={stylesConfig.code}>Configuration</code> property. You
          may need to adjust a couple of the names in the snippet, such as the
          database context or connection string configuration, to your own app.
        </p>

        <p className={styles.p}>
          You'll then see that if the environment is not in{" "}
          <code className={stylesConfig.code}>Development</code> mode, a
          complicated section of code is used to create the Postgres connection
          string. In Neil Cummings' course, he says one person wrote it and
          everyone else just copy/pastes it.
        </p>

        <h3 className={styles.h3}>Step 6: Configure environment variables</h3>

        <p className={styles.p}>
          If you have any environment variables, you can configure them in the
          Settings tab under Config Vars. I set ASPNETCORE_ENVIRONMENT to
          "Production", even though I believe it is set to "Production" by
          default. You'll also see a key and value for DATABASE_URL, which is
          set up by Heroku.
        </p>

        <h2 className={styles.h2}>Deployment</h2>

        <p className={styles.p}>
          Almost everything is set up now for deployment. If you go to the
          Deploy tab, you'll see three different deployment methods available.
          I've yet to have any issues with using the Github method.
        </p>

        <h3 className={styles.h3}>Step 1: Connect Heroku to Github</h3>

        <p className={styles.p}>
          Simply click the Github option and follow the instructions to connect
          the two. Then choose your repository.
        </p>

        <h3 className={styles.h3}>Step 2: Commit and push to Github</h3>

        <p className={styles.p}>
          You'll need to make sure your remote repository is up-to-date with the
          changes you've made locally. After that, you're ready to deploy.
        </p>

        <h3 className={styles.h3}>Step 3: Automatic or manual deploys</h3>

        <p className={styles.p}>
          If you want to set it up so that when you push to your Github
          repository, your changes will also be deployed to Heroku, you can. I
          just use manual deploys though. Now, all you have to do is click
          Deploy Branch and Heroku will do the rest!
        </p>
      </article>

      <div className={styles.navPostFlexContainer}>
        <Link href="/post/gsap-timelines-in-react">
          <a className={stylesConfig.navPost}>
            &larr;
            <br />
            Previous
            <br />
            GSAP in React: Timelines
          </a>
        </Link>
      </div>
    </Layout>
  );
};
