import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Directus_foldersCreateWithoutDirectus_filesInput } from "../inputs/Directus_foldersCreateWithoutDirectus_filesInput";
import { Directus_foldersWhereUniqueInput } from "../inputs/Directus_foldersWhereUniqueInput";

@TypeGraphQL.InputType("Directus_foldersCreateOrConnectWithoutDirectus_filesInput", {})
export class Directus_foldersCreateOrConnectWithoutDirectus_filesInput {
  @TypeGraphQL.Field(_type => Directus_foldersWhereUniqueInput, {
    nullable: false
  })
  where!: Directus_foldersWhereUniqueInput;

  @TypeGraphQL.Field(_type => Directus_foldersCreateWithoutDirectus_filesInput, {
    nullable: false
  })
  create!: Directus_foldersCreateWithoutDirectus_filesInput;
}
