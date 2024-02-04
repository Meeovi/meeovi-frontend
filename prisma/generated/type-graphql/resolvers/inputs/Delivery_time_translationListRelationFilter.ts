import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Delivery_time_translationWhereInput } from "../inputs/Delivery_time_translationWhereInput";

@TypeGraphQL.InputType("Delivery_time_translationListRelationFilter", {})
export class Delivery_time_translationListRelationFilter {
  @TypeGraphQL.Field(_type => Delivery_time_translationWhereInput, {
    nullable: true
  })
  every?: Delivery_time_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => Delivery_time_translationWhereInput, {
    nullable: true
  })
  some?: Delivery_time_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => Delivery_time_translationWhereInput, {
    nullable: true
  })
  none?: Delivery_time_translationWhereInput | undefined;
}
