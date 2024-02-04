import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Directus_foldersCreateOrConnectWithoutOther_directus_foldersInput } from "../inputs/Directus_foldersCreateOrConnectWithoutOther_directus_foldersInput";
import { Directus_foldersCreateWithoutOther_directus_foldersInput } from "../inputs/Directus_foldersCreateWithoutOther_directus_foldersInput";
import { Directus_foldersWhereUniqueInput } from "../inputs/Directus_foldersWhereUniqueInput";

@TypeGraphQL.InputType("Directus_foldersCreateNestedOneWithoutOther_directus_foldersInput", {})
export class Directus_foldersCreateNestedOneWithoutOther_directus_foldersInput {
  @TypeGraphQL.Field(_type => Directus_foldersCreateWithoutOther_directus_foldersInput, {
    nullable: true
  })
  create?: Directus_foldersCreateWithoutOther_directus_foldersInput | undefined;

  @TypeGraphQL.Field(_type => Directus_foldersCreateOrConnectWithoutOther_directus_foldersInput, {
    nullable: true
  })
  connectOrCreate?: Directus_foldersCreateOrConnectWithoutOther_directus_foldersInput | undefined;

  @TypeGraphQL.Field(_type => Directus_foldersWhereUniqueInput, {
    nullable: true
  })
  connect?: Directus_foldersWhereUniqueInput | undefined;
}
