import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Directus_foldersCreateWithoutDirectus_filesInput } from "../inputs/Directus_foldersCreateWithoutDirectus_filesInput";
import { Directus_foldersUpdateWithoutDirectus_filesInput } from "../inputs/Directus_foldersUpdateWithoutDirectus_filesInput";
import { Directus_foldersWhereInput } from "../inputs/Directus_foldersWhereInput";

@TypeGraphQL.InputType("Directus_foldersUpsertWithoutDirectus_filesInput", {})
export class Directus_foldersUpsertWithoutDirectus_filesInput {
  @TypeGraphQL.Field(_type => Directus_foldersUpdateWithoutDirectus_filesInput, {
    nullable: false
  })
  update!: Directus_foldersUpdateWithoutDirectus_filesInput;

  @TypeGraphQL.Field(_type => Directus_foldersCreateWithoutDirectus_filesInput, {
    nullable: false
  })
  create!: Directus_foldersCreateWithoutDirectus_filesInput;

  @TypeGraphQL.Field(_type => Directus_foldersWhereInput, {
    nullable: true
  })
  where?: Directus_foldersWhereInput | undefined;
}
