import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Directus_collectionsWhereInput } from "../inputs/Directus_collectionsWhereInput";

@TypeGraphQL.InputType("Directus_collectionsNullableRelationFilter", {})
export class Directus_collectionsNullableRelationFilter {
  @TypeGraphQL.Field(_type => Directus_collectionsWhereInput, {
    nullable: true
  })
  is?: Directus_collectionsWhereInput | undefined;

  @TypeGraphQL.Field(_type => Directus_collectionsWhereInput, {
    nullable: true
  })
  isNot?: Directus_collectionsWhereInput | undefined;
}
