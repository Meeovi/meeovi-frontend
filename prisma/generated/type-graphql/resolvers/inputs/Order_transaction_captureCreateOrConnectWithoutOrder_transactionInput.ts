import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_transaction_captureCreateWithoutOrder_transactionInput } from "../inputs/Order_transaction_captureCreateWithoutOrder_transactionInput";
import { Order_transaction_captureWhereUniqueInput } from "../inputs/Order_transaction_captureWhereUniqueInput";

@TypeGraphQL.InputType("Order_transaction_captureCreateOrConnectWithoutOrder_transactionInput", {})
export class Order_transaction_captureCreateOrConnectWithoutOrder_transactionInput {
  @TypeGraphQL.Field(_type => Order_transaction_captureWhereUniqueInput, {
    nullable: false
  })
  where!: Order_transaction_captureWhereUniqueInput;

  @TypeGraphQL.Field(_type => Order_transaction_captureCreateWithoutOrder_transactionInput, {
    nullable: false
  })
  create!: Order_transaction_captureCreateWithoutOrder_transactionInput;
}
