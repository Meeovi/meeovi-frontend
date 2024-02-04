import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Directus_usersCreateWithoutDirectus_files_directus_files_uploaded_byTodirectus_usersInput } from "../inputs/Directus_usersCreateWithoutDirectus_files_directus_files_uploaded_byTodirectus_usersInput";
import { Directus_usersWhereUniqueInput } from "../inputs/Directus_usersWhereUniqueInput";

@TypeGraphQL.InputType("Directus_usersCreateOrConnectWithoutDirectus_files_directus_files_uploaded_byTodirectus_usersInput", {})
export class Directus_usersCreateOrConnectWithoutDirectus_files_directus_files_uploaded_byTodirectus_usersInput {
  @TypeGraphQL.Field(_type => Directus_usersWhereUniqueInput, {
    nullable: false
  })
  where!: Directus_usersWhereUniqueInput;

  @TypeGraphQL.Field(_type => Directus_usersCreateWithoutDirectus_files_directus_files_uploaded_byTodirectus_usersInput, {
    nullable: false
  })
  create!: Directus_usersCreateWithoutDirectus_files_directus_files_uploaded_byTodirectus_usersInput;
}
