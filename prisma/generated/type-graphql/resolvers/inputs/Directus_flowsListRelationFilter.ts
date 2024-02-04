import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Directus_flowsWhereInput } from "../inputs/Directus_flowsWhereInput";

@TypeGraphQL.InputType("Directus_flowsListRelationFilter", {})
export class Directus_flowsListRelationFilter {
  @TypeGraphQL.Field(_type => Directus_flowsWhereInput, {
    nullable: true
  })
  every?: Directus_flowsWhereInput | undefined;

  @TypeGraphQL.Field(_type => Directus_flowsWhereInput, {
    nullable: true
  })
  some?: Directus_flowsWhereInput | undefined;

  @TypeGraphQL.Field(_type => Directus_flowsWhereInput, {
    nullable: true
  })
  none?: Directus_flowsWhereInput | undefined;
}
