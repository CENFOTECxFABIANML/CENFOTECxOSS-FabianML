# Blogify

### 1\. Clone & Setup

Clone the repository to your local machine.

```bash
git clone <your-repository-url>
cd <your-project-directory>
```

### 2\. Install Dependencies

Install both Ruby gems and npm packages.

```bash
# Install Ruby gems
bundle install

# Install JavaScript packages
npm install
```

### 3\. Database Setup

Create the database, run migrations, and (optionally) seed it with initial data.

```bash
rails db:create
rails db:migrate
rails db:seed
```

### 4\. Run the Development Server

This command will start the Rails server, the Shakapacker dev server for the client, and the server bundle watcher.

```bash
./bin/dev
```

Your application should now be running at **http://localhost:3000**.