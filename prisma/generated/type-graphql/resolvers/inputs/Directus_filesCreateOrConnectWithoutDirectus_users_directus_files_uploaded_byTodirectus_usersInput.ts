import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Directus_filesCreateWithoutDirectus_users_directus_files_uploaded_byTodirectus_usersInput } from "../inputs/Directus_filesCreateWithoutDirectus_users_directus_files_uploaded_byTodirectus_usersInput";
import { Directus_filesWhereUniqueInput } from "../inputs/Directus_filesWhereUniqueInput";

@TypeGraphQL.InputType("Directus_filesCreateOrConnectWithoutDirectus_users_directus_files_uploaded_byTodirectus_usersInput", {})
export class Directus_filesCreateOrConnectWithoutDirectus_users_directus_files_uploaded_byTodirectus_usersInput {
  @TypeGraphQL.Field(_type => Directus_filesWhereUniqueInput, {
    nullable: false
  })
  where!: Directus_filesWhereUniqueInput;

  @TypeGraphQL.Field(_type => Directus_filesCreateWithoutDirectus_users_directus_files_uploaded_byTodirectus_usersInput, {
    nullable: false
  })
  create!: Directus_filesCreateWithoutDirectus_users_directus_files_uploaded_byTodirectus_usersInput;
}
