import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Directus_collectionsUpdateWithoutOther_directus_collectionsInput } from "../inputs/Directus_collectionsUpdateWithoutOther_directus_collectionsInput";
import { Directus_collectionsWhereInput } from "../inputs/Directus_collectionsWhereInput";

@TypeGraphQL.InputType("Directus_collectionsUpdateToOneWithWhereWithoutOther_directus_collectionsInput", {})
export class Directus_collectionsUpdateToOneWithWhereWithoutOther_directus_collectionsInput {
  @TypeGraphQL.Field(_type => Directus_collectionsWhereInput, {
    nullable: true
  })
  where?: Directus_collectionsWhereInput | undefined;

  @TypeGraphQL.Field(_type => Directus_collectionsUpdateWithoutOther_directus_collectionsInput, {
    nullable: false
  })
  data!: Directus_collectionsUpdateWithoutOther_directus_collectionsInput;
}
