import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Payment_methodCreateWithoutOrder_transactionInput } from "../inputs/Payment_methodCreateWithoutOrder_transactionInput";
import { Payment_methodWhereUniqueInput } from "../inputs/Payment_methodWhereUniqueInput";

@TypeGraphQL.InputType("Payment_methodCreateOrConnectWithoutOrder_transactionInput", {})
export class Payment_methodCreateOrConnectWithoutOrder_transactionInput {
  @TypeGraphQL.Field(_type => Payment_methodWhereUniqueInput, {
    nullable: false
  })
  where!: Payment_methodWhereUniqueInput;

  @TypeGraphQL.Field(_type => Payment_methodCreateWithoutOrder_transactionInput, {
    nullable: false
  })
  create!: Payment_methodCreateWithoutOrder_transactionInput;
}
