import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Directus_filesScalarWhereInput } from "../inputs/Directus_filesScalarWhereInput";
import { Directus_filesUpdateManyMutationInput } from "../inputs/Directus_filesUpdateManyMutationInput";

@TypeGraphQL.InputType("Directus_filesUpdateManyWithWhereWithoutDirectus_users_directus_files_uploaded_byTodirectus_usersInput", {})
export class Directus_filesUpdateManyWithWhereWithoutDirectus_users_directus_files_uploaded_byTodirectus_usersInput {
  @TypeGraphQL.Field(_type => Directus_filesScalarWhereInput, {
    nullable: false
  })
  where!: Directus_filesScalarWhereInput;

  @TypeGraphQL.Field(_type => Directus_filesUpdateManyMutationInput, {
    nullable: false
  })
  data!: Directus_filesUpdateManyMutationInput;
}
