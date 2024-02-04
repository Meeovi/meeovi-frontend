import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Directus_filesCreateNestedManyWithoutDirectus_foldersInput } from "../inputs/Directus_filesCreateNestedManyWithoutDirectus_foldersInput";
import { Directus_foldersCreateNestedOneWithoutOther_directus_foldersInput } from "../inputs/Directus_foldersCreateNestedOneWithoutOther_directus_foldersInput";

@TypeGraphQL.InputType("Directus_foldersCreateWithoutOther_directus_foldersInput", {})
export class Directus_foldersCreateWithoutOther_directus_foldersInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => Directus_filesCreateNestedManyWithoutDirectus_foldersInput, {
    nullable: true
  })
  directus_files?: Directus_filesCreateNestedManyWithoutDirectus_foldersInput | undefined;

  @TypeGraphQL.Field(_type => Directus_foldersCreateNestedOneWithoutOther_directus_foldersInput, {
    nullable: true
  })
  directus_folders?: Directus_foldersCreateNestedOneWithoutOther_directus_foldersInput | undefined;
}
