1. dotnet new angular -o GraphQLBookstore
2. dotnet add package Npgsql
3. dotnet add package Npgsql.EntityFrameworkCore.PostgreSQL
4. dotnet add package GraphQl --version 2.4.0
5. dotnet add package GraphQL.Server.Transports.AspNetCore --version 3.4.0
6. dotnet add package GraphQL.Server.Ui.Playground
7. dotnet add package Microsoft.EntityFrameworkCore.Design
8. dotnet add package EFCore.NamingConventions
9. dotnet tool install --global dotnet-ef
10. dotnet ef migrations add InitialCreate
11. dotnet ef database update
12. dotnet run 
13. https://localhost:5001/ui/playground


# Apollo setup (run these commands in the ClientApp)

1. npm install -g npm-check-updates
2. ncu -u
3. npm install
4. npm install typescript@">=4.0.0 and <4.1.0" --save-dev
5. ng add apollo-angular
