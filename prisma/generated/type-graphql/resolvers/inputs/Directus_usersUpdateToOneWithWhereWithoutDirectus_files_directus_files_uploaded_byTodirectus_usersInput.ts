import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Directus_usersUpdateWithoutDirectus_files_directus_files_uploaded_byTodirectus_usersInput } from "../inputs/Directus_usersUpdateWithoutDirectus_files_directus_files_uploaded_byTodirectus_usersInput";
import { Directus_usersWhereInput } from "../inputs/Directus_usersWhereInput";

@TypeGraphQL.InputType("Directus_usersUpdateToOneWithWhereWithoutDirectus_files_directus_files_uploaded_byTodirectus_usersInput", {})
export class Directus_usersUpdateToOneWithWhereWithoutDirectus_files_directus_files_uploaded_byTodirectus_usersInput {
  @TypeGraphQL.Field(_type => Directus_usersWhereInput, {
    nullable: true
  })
  where?: Directus_usersWhereInput | undefined;

  @TypeGraphQL.Field(_type => Directus_usersUpdateWithoutDirectus_files_directus_files_uploaded_byTodirectus_usersInput, {
    nullable: false
  })
  data!: Directus_usersUpdateWithoutDirectus_files_directus_files_uploaded_byTodirectus_usersInput;
}
