import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Payment_methodWhereInput } from "../inputs/Payment_methodWhereInput";

@TypeGraphQL.InputType("Payment_methodRelationFilter", {})
export class Payment_methodRelationFilter {
  @TypeGraphQL.Field(_type => Payment_methodWhereInput, {
    nullable: true
  })
  is?: Payment_methodWhereInput | undefined;

  @TypeGraphQL.Field(_type => Payment_methodWhereInput, {
    nullable: true
  })
  isNot?: Payment_methodWhereInput | undefined;
}
