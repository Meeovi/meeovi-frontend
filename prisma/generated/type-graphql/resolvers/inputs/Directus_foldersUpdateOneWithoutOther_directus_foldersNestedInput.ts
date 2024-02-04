import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Directus_foldersCreateOrConnectWithoutOther_directus_foldersInput } from "../inputs/Directus_foldersCreateOrConnectWithoutOther_directus_foldersInput";
import { Directus_foldersCreateWithoutOther_directus_foldersInput } from "../inputs/Directus_foldersCreateWithoutOther_directus_foldersInput";
import { Directus_foldersUpdateToOneWithWhereWithoutOther_directus_foldersInput } from "../inputs/Directus_foldersUpdateToOneWithWhereWithoutOther_directus_foldersInput";
import { Directus_foldersUpsertWithoutOther_directus_foldersInput } from "../inputs/Directus_foldersUpsertWithoutOther_directus_foldersInput";
import { Directus_foldersWhereInput } from "../inputs/Directus_foldersWhereInput";
import { Directus_foldersWhereUniqueInput } from "../inputs/Directus_foldersWhereUniqueInput";

@TypeGraphQL.InputType("Directus_foldersUpdateOneWithoutOther_directus_foldersNestedInput", {})
export class Directus_foldersUpdateOneWithoutOther_directus_foldersNestedInput {
  @TypeGraphQL.Field(_type => Directus_foldersCreateWithoutOther_directus_foldersInput, {
    nullable: true
  })
  create?: Directus_foldersCreateWithoutOther_directus_foldersInput | undefined;

  @TypeGraphQL.Field(_type => Directus_foldersCreateOrConnectWithoutOther_directus_foldersInput, {
    nullable: true
  })
  connectOrCreate?: Directus_foldersCreateOrConnectWithoutOther_directus_foldersInput | undefined;

  @TypeGraphQL.Field(_type => Directus_foldersUpsertWithoutOther_directus_foldersInput, {
    nullable: true
  })
  upsert?: Directus_foldersUpsertWithoutOther_directus_foldersInput | undefined;

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

  @TypeGraphQL.Field(_type => Directus_foldersUpdateToOneWithWhereWithoutOther_directus_foldersInput, {
    nullable: true
  })
  update?: Directus_foldersUpdateToOneWithWhereWithoutOther_directus_foldersInput | undefined;
}
