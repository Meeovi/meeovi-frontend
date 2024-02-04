import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Directus_filesCreateWithoutDirectus_users_directus_files_modified_byTodirectus_usersInput } from "../inputs/Directus_filesCreateWithoutDirectus_users_directus_files_modified_byTodirectus_usersInput";
import { Directus_filesUpdateWithoutDirectus_users_directus_files_modified_byTodirectus_usersInput } from "../inputs/Directus_filesUpdateWithoutDirectus_users_directus_files_modified_byTodirectus_usersInput";
import { Directus_filesWhereUniqueInput } from "../inputs/Directus_filesWhereUniqueInput";

@TypeGraphQL.InputType("Directus_filesUpsertWithWhereUniqueWithoutDirectus_users_directus_files_modified_byTodirectus_usersInput", {})
export class Directus_filesUpsertWithWhereUniqueWithoutDirectus_users_directus_files_modified_byTodirectus_usersInput {
  @TypeGraphQL.Field(_type => Directus_filesWhereUniqueInput, {
    nullable: false
  })
  where!: Directus_filesWhereUniqueInput;

  @TypeGraphQL.Field(_type => Directus_filesUpdateWithoutDirectus_users_directus_files_modified_byTodirectus_usersInput, {
    nullable: false
  })
  update!: Directus_filesUpdateWithoutDirectus_users_directus_files_modified_byTodirectus_usersInput;

  @TypeGraphQL.Field(_type => Directus_filesCreateWithoutDirectus_users_directus_files_modified_byTodirectus_usersInput, {
    nullable: false
  })
  create!: Directus_filesCreateWithoutDirectus_users_directus_files_modified_byTodirectus_usersInput;
}
