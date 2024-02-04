import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Directus_usersCreateWithoutDirectus_files_directus_files_modified_byTodirectus_usersInput } from "../inputs/Directus_usersCreateWithoutDirectus_files_directus_files_modified_byTodirectus_usersInput";
import { Directus_usersUpdateWithoutDirectus_files_directus_files_modified_byTodirectus_usersInput } from "../inputs/Directus_usersUpdateWithoutDirectus_files_directus_files_modified_byTodirectus_usersInput";
import { Directus_usersWhereInput } from "../inputs/Directus_usersWhereInput";

@TypeGraphQL.InputType("Directus_usersUpsertWithoutDirectus_files_directus_files_modified_byTodirectus_usersInput", {})
export class Directus_usersUpsertWithoutDirectus_files_directus_files_modified_byTodirectus_usersInput {
  @TypeGraphQL.Field(_type => Directus_usersUpdateWithoutDirectus_files_directus_files_modified_byTodirectus_usersInput, {
    nullable: false
  })
  update!: Directus_usersUpdateWithoutDirectus_files_directus_files_modified_byTodirectus_usersInput;

  @TypeGraphQL.Field(_type => Directus_usersCreateWithoutDirectus_files_directus_files_modified_byTodirectus_usersInput, {
    nullable: false
  })
  create!: Directus_usersCreateWithoutDirectus_files_directus_files_modified_byTodirectus_usersInput;

  @TypeGraphQL.Field(_type => Directus_usersWhereInput, {
    nullable: true
  })
  where?: Directus_usersWhereInput | undefined;
}
