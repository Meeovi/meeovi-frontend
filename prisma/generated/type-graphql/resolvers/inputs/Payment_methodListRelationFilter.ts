import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Payment_methodWhereInput } from "../inputs/Payment_methodWhereInput";

@TypeGraphQL.InputType("Payment_methodListRelationFilter", {})
export class Payment_methodListRelationFilter {
  @TypeGraphQL.Field(_type => Payment_methodWhereInput, {
    nullable: true
  })
  every?: Payment_methodWhereInput | undefined;

  @TypeGraphQL.Field(_type => Payment_methodWhereInput, {
    nullable: true
  })
  some?: Payment_methodWhereInput | undefined;

  @TypeGraphQL.Field(_type => Payment_methodWhereInput, {
    nullable: true
  })
  none?: Payment_methodWhereInput | undefined;
}
