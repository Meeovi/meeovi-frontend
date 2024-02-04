import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Payment_method_translationWhereInput } from "../inputs/Payment_method_translationWhereInput";

@TypeGraphQL.InputType("Payment_method_translationListRelationFilter", {})
export class Payment_method_translationListRelationFilter {
  @TypeGraphQL.Field(_type => Payment_method_translationWhereInput, {
    nullable: true
  })
  every?: Payment_method_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => Payment_method_translationWhereInput, {
    nullable: true
  })
  some?: Payment_method_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => Payment_method_translationWhereInput, {
    nullable: true
  })
  none?: Payment_method_translationWhereInput | undefined;
}
