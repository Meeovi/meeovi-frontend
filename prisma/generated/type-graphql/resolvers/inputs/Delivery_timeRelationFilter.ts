import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Delivery_timeWhereInput } from "../inputs/Delivery_timeWhereInput";

@TypeGraphQL.InputType("Delivery_timeRelationFilter", {})
export class Delivery_timeRelationFilter {
  @TypeGraphQL.Field(_type => Delivery_timeWhereInput, {
    nullable: true
  })
  is?: Delivery_timeWhereInput | undefined;

  @TypeGraphQL.Field(_type => Delivery_timeWhereInput, {
    nullable: true
  })
  isNot?: Delivery_timeWhereInput | undefined;
}
