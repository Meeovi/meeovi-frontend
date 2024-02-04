import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Directus_foldersCreateOrConnectWithoutDirectus_filesInput } from "../inputs/Directus_foldersCreateOrConnectWithoutDirectus_filesInput";
import { Directus_foldersCreateWithoutDirectus_filesInput } from "../inputs/Directus_foldersCreateWithoutDirectus_filesInput";
import { Directus_foldersUpdateToOneWithWhereWithoutDirectus_filesInput } from "../inputs/Directus_foldersUpdateToOneWithWhereWithoutDirectus_filesInput";
import { Directus_foldersUpsertWithoutDirectus_filesInput } from "../inputs/Directus_foldersUpsertWithoutDirectus_filesInput";
import { Directus_foldersWhereInput } from "../inputs/Directus_foldersWhereInput";
import { Directus_foldersWhereUniqueInput } from "../inputs/Directus_foldersWhereUniqueInput";

@TypeGraphQL.InputType("Directus_foldersUpdateOneWithoutDirectus_filesNestedInput", {})
export class Directus_foldersUpdateOneWithoutDirectus_filesNestedInput {
  @TypeGraphQL.Field(_type => Directus_foldersCreateWithoutDirectus_filesInput, {
    nullable: true
  })
  create?: Directus_foldersCreateWithoutDirectus_filesInput | undefined;

  @TypeGraphQL.Field(_type => Directus_foldersCreateOrConnectWithoutDirectus_filesInput, {
    nullable: true
  })
  connectOrCreate?: Directus_foldersCreateOrConnectWithoutDirectus_filesInput | undefined;

  @TypeGraphQL.Field(_type => Directus_foldersUpsertWithoutDirectus_filesInput, {
    nullable: true
  })
  upsert?: Directus_foldersUpsertWithoutDirectus_filesInput | undefined;

  @TypeGraphQL.Field(_type => Directus_foldersWhereInput, {
    nullable: true
  })
  disconnect?: Directus_foldersWhereInput | undefined;

  @TypeGraphQL.Field(_type => Directus_foldersWhereInput, {
    nullable: true
  })
  delete?: Directus_foldersWhereInput | undefined;

  @TypeGraphQL.Field(_type => Directus_foldersWhereUniqueInput, {
    nullable: true
  })
  connect?: Directus_foldersWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Directus_foldersUpdateToOneWithWhereWithoutDirectus_filesInput, {
    nullable: true
  })
  update?: Directus_foldersUpdateToOneWithWhereWithoutDirectus_filesInput | undefined;
}
