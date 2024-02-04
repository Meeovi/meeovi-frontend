import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_transactionCreateWithoutAdyen_paymentInput } from "../inputs/Order_transactionCreateWithoutAdyen_paymentInput";
import { Order_transactionWhereUniqueInput } from "../inputs/Order_transactionWhereUniqueInput";

@TypeGraphQL.InputType("Order_transactionCreateOrConnectWithoutAdyen_paymentInput", {})
export class Order_transactionCreateOrConnectWithoutAdyen_paymentInput {
  @TypeGraphQL.Field(_type => Order_transactionWhereUniqueInput, {
    nullable: false
  })
  where!: Order_transactionWhereUniqueInput;

  @TypeGraphQL.Field(_type => Order_transactionCreateWithoutAdyen_paymentInput, {
    nullable: false
  })
  create!: Order_transactionCreateWithoutAdyen_paymentInput;
}
