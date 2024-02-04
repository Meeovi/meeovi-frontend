import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_transaction_captureCreateManyOrder_transactionInputEnvelope } from "../inputs/Order_transaction_captureCreateManyOrder_transactionInputEnvelope";
import { Order_transaction_captureCreateOrConnectWithoutOrder_transactionInput } from "../inputs/Order_transaction_captureCreateOrConnectWithoutOrder_transactionInput";
import { Order_transaction_captureCreateWithoutOrder_transactionInput } from "../inputs/Order_transaction_captureCreateWithoutOrder_transactionInput";
import { Order_transaction_captureWhereUniqueInput } from "../inputs/Order_transaction_captureWhereUniqueInput";

@TypeGraphQL.InputType("Order_transaction_captureCreateNestedManyWithoutOrder_transactionInput", {})
export class Order_transaction_captureCreateNestedManyWithoutOrder_transactionInput {
  @TypeGraphQL.Field(_type => [Order_transaction_captureCreateWithoutOrder_transactionInput], {
    nullable: true
  })
  create?: Order_transaction_captureCreateWithoutOrder_transactionInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_transaction_captureCreateOrConnectWithoutOrder_transactionInput], {
    nullable: true
  })
  connectOrCreate?: Order_transaction_captureCreateOrConnectWithoutOrder_transactionInput[] | undefined;

  @TypeGraphQL.Field(_type => Order_transaction_captureCreateManyOrder_transactionInputEnvelope, {
    nullable: true
  })
  createMany?: Order_transaction_captureCreateManyOrder_transactionInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Order_transaction_captureWhereUniqueInput], {
    nullable: true
  })
  connect?: Order_transaction_captureWhereUniqueInput[] | undefined;
}
