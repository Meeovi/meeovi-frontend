import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Directus_collectionsCreateOrConnectWithoutOther_directus_collectionsInput } from "../inputs/Directus_collectionsCreateOrConnectWithoutOther_directus_collectionsInput";
import { Directus_collectionsCreateWithoutOther_directus_collectionsInput } from "../inputs/Directus_collectionsCreateWithoutOther_directus_collectionsInput";
import { Directus_collectionsUpdateToOneWithWhereWithoutOther_directus_collectionsInput } from "../inputs/Directus_collectionsUpdateToOneWithWhereWithoutOther_directus_collectionsInput";
import { Directus_collectionsUpsertWithoutOther_directus_collectionsInput } from "../inputs/Directus_collectionsUpsertWithoutOther_directus_collectionsInput";
import { Directus_collectionsWhereInput } from "../inputs/Directus_collectionsWhereInput";
import { Directus_collectionsWhereUniqueInput } from "../inputs/Directus_collectionsWhereUniqueInput";

@TypeGraphQL.InputType("Directus_collectionsUpdateOneWithoutOther_directus_collectionsNestedInput", {})
export class Directus_collectionsUpdateOneWithoutOther_directus_collectionsNestedInput {
  @TypeGraphQL.Field(_type => Directus_collectionsCreateWithoutOther_directus_collectionsInput, {
    nullable: true
  })
  create?: Directus_collectionsCreateWithoutOther_directus_collectionsInput | undefined;

  @TypeGraphQL.Field(_type => Directus_collectionsCreateOrConnectWithoutOther_directus_collectionsInput, {
    nullable: true
  })
  connectOrCreate?: Directus_collectionsCreateOrConnectWithoutOther_directus_collectionsInput | undefined;

  @TypeGraphQL.Field(_type => Directus_collectionsUpsertWithoutOther_directus_collectionsInput, {
    nullable: true
  })
  upsert?: Directus_collectionsUpsertWithoutOther_directus_collectionsInput | undefined;

  @TypeGraphQL.Field(_type => Directus_collectionsWhereInput, {
    nullable: true
  })
  disconnect?: Directus_collectionsWhereInput | undefined;

  @TypeGraphQL.Field(_type => Directus_collectionsWhereInput, {
    nullable: true
  })
  delete?: Directus_collectionsWhereInput | undefined;

  @TypeGraphQL.Field(_type => Directus_collectionsWhereUniqueInput, {
    nullable: true
  })
  connect?: Directus_collectionsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Directus_collectionsUpdateToOneWithWhereWithoutOther_directus_collectionsInput, {
    nullable: true
  })
  update?: Directus_collectionsUpdateToOneWithWhereWithoutOther_directus_collectionsInput | undefined;
}
