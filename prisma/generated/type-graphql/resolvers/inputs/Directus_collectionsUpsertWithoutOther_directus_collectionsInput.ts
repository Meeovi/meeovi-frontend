import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Directus_collectionsCreateWithoutOther_directus_collectionsInput } from "../inputs/Directus_collectionsCreateWithoutOther_directus_collectionsInput";
import { Directus_collectionsUpdateWithoutOther_directus_collectionsInput } from "../inputs/Directus_collectionsUpdateWithoutOther_directus_collectionsInput";
import { Directus_collectionsWhereInput } from "../inputs/Directus_collectionsWhereInput";

@TypeGraphQL.InputType("Directus_collectionsUpsertWithoutOther_directus_collectionsInput", {})
export class Directus_collectionsUpsertWithoutOther_directus_collectionsInput {
  @TypeGraphQL.Field(_type => Directus_collectionsUpdateWithoutOther_directus_collectionsInput, {
    nullable: false
  })
  update!: Directus_collectionsUpdateWithoutOther_directus_collectionsInput;

  @TypeGraphQL.Field(_type => Directus_collectionsCreateWithoutOther_directus_collectionsInput, {
    nullable: false
  })
  create!: Directus_collectionsCreateWithoutOther_directus_collectionsInput;

  @TypeGraphQL.Field(_type => Directus_collectionsWhereInput, {
    nullable: true
  })
  where?: Directus_collectionsWhereInput | undefined;
}
