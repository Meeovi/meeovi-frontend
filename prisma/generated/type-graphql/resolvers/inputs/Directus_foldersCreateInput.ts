import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Directus_filesCreateNestedManyWithoutDirectus_foldersInput } from "../inputs/Directus_filesCreateNestedManyWithoutDirectus_foldersInput";
import { Directus_foldersCreateNestedManyWithoutDirectus_foldersInput } from "../inputs/Directus_foldersCreateNestedManyWithoutDirectus_foldersInput";
import { Directus_foldersCreateNestedOneWithoutOther_directus_foldersInput } from "../inputs/Directus_foldersCreateNestedOneWithoutOther_directus_foldersInput";

@TypeGraphQL.InputType("Directus_foldersCreateInput", {})
export class Directus_foldersCreateInput {
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

  @TypeGraphQL.Field(_type => Directus_foldersCreateNestedManyWithoutDirectus_foldersInput, {
    nullable: true
  })
  other_directus_folders?: Directus_foldersCreateNestedManyWithoutDirectus_foldersInput | undefined;
}
