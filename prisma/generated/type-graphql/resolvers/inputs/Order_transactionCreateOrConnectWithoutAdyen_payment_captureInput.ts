import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_transactionCreateWithoutAdyen_payment_captureInput } from "../inputs/Order_transactionCreateWithoutAdyen_payment_captureInput";
import { Order_transactionWhereUniqueInput } from "../inputs/Order_transactionWhereUniqueInput";

@TypeGraphQL.InputType("Order_transactionCreateOrConnectWithoutAdyen_payment_captureInput", {})
export class Order_transactionCreateOrConnectWithoutAdyen_payment_captureInput {
  @TypeGraphQL.Field(_type => Order_transactionWhereUniqueInput, {
    nullable: false
  })
  where!: Order_transactionWhereUniqueInput;

  @TypeGraphQL.Field(_type => Order_transactionCreateWithoutAdyen_payment_captureInput, {
    nullable: false
  })
  create!: Order_transactionCreateWithoutAdyen_payment_captureInput;
}
