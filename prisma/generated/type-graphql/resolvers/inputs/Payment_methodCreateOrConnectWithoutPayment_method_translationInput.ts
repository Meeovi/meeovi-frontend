import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Payment_methodCreateWithoutPayment_method_translationInput } from "../inputs/Payment_methodCreateWithoutPayment_method_translationInput";
import { Payment_methodWhereUniqueInput } from "../inputs/Payment_methodWhereUniqueInput";

@TypeGraphQL.InputType("Payment_methodCreateOrConnectWithoutPayment_method_translationInput", {})
export class Payment_methodCreateOrConnectWithoutPayment_method_translationInput {
  @TypeGraphQL.Field(_type => Payment_methodWhereUniqueInput, {
    nullable: false
  })
  where!: Payment_methodWhereUniqueInput;

  @TypeGraphQL.Field(_type => Payment_methodCreateWithoutPayment_method_translationInput, {
    nullable: false
  })
  create!: Payment_methodCreateWithoutPayment_method_translationInput;
}
