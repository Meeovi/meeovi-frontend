import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Directus_foldersCreateOrConnectWithoutDirectus_filesInput } from "../inputs/Directus_foldersCreateOrConnectWithoutDirectus_filesInput";
import { Directus_foldersCreateWithoutDirectus_filesInput } from "../inputs/Directus_foldersCreateWithoutDirectus_filesInput";
import { Directus_foldersWhereUniqueInput } from "../inputs/Directus_foldersWhereUniqueInput";

@TypeGraphQL.InputType("Directus_foldersCreateNestedOneWithoutDirectus_filesInput", {})
export class Directus_foldersCreateNestedOneWithoutDirectus_filesInput {
  @TypeGraphQL.Field(_type => Directus_foldersCreateWithoutDirectus_filesInput, {
    nullable: true
  })
  create?: Directus_foldersCreateWithoutDirectus_filesInput | undefined;

  @TypeGraphQL.Field(_type => Directus_foldersCreateOrConnectWithoutDirectus_filesInput, {
    nullable: true
  })
  connectOrCreate?: Directus_foldersCreateOrConnectWithoutDirectus_filesInput | undefined;

  @TypeGraphQL.Field(_type => Directus_foldersWhereUniqueInput, {
    nullable: true
  })
  connect?: Directus_foldersWhereUniqueInput | undefined;
}
