import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Directus_collectionsWhereInput } from "../inputs/Directus_collectionsWhereInput";

@TypeGraphQL.InputType("Directus_collectionsListRelationFilter", {})
export class Directus_collectionsListRelationFilter {
  @TypeGraphQL.Field(_type => Directus_collectionsWhereInput, {
    nullable: true
  })
  every?: Directus_collectionsWhereInput | undefined;

  @TypeGraphQL.Field(_type => Directus_collectionsWhereInput, {
    nullable: true
  })
  some?: Directus_collectionsWhereInput | undefined;

  @TypeGraphQL.Field(_type => Directus_collectionsWhereInput, {
    nullable: true
  })
  none?: Directus_collectionsWhereInput | undefined;
}
