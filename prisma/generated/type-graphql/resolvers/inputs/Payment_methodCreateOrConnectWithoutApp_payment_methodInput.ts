import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Payment_methodCreateWithoutApp_payment_methodInput } from "../inputs/Payment_methodCreateWithoutApp_payment_methodInput";
import { Payment_methodWhereUniqueInput } from "../inputs/Payment_methodWhereUniqueInput";

@TypeGraphQL.InputType("Payment_methodCreateOrConnectWithoutApp_payment_methodInput", {})
export class Payment_methodCreateOrConnectWithoutApp_payment_methodInput {
  @TypeGraphQL.Field(_type => Payment_methodWhereUniqueInput, {
    nullable: false
  })
  where!: Payment_methodWhereUniqueInput;

  @TypeGraphQL.Field(_type => Payment_methodCreateWithoutApp_payment_methodInput, {
    nullable: false
  })
  create!: Payment_methodCreateWithoutApp_payment_methodInput;
}
