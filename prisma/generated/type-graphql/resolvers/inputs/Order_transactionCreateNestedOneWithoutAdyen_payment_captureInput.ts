import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_transactionCreateOrConnectWithoutAdyen_payment_captureInput } from "../inputs/Order_transactionCreateOrConnectWithoutAdyen_payment_captureInput";
import { Order_transactionCreateWithoutAdyen_payment_captureInput } from "../inputs/Order_transactionCreateWithoutAdyen_payment_captureInput";
import { Order_transactionWhereUniqueInput } from "../inputs/Order_transactionWhereUniqueInput";

@TypeGraphQL.InputType("Order_transactionCreateNestedOneWithoutAdyen_payment_captureInput", {})
export class Order_transactionCreateNestedOneWithoutAdyen_payment_captureInput {
  @TypeGraphQL.Field(_type => Order_transactionCreateWithoutAdyen_payment_captureInput, {
    nullable: true
  })
  create?: Order_transactionCreateWithoutAdyen_payment_captureInput | undefined;

  @TypeGraphQL.Field(_type => Order_transactionCreateOrConnectWithoutAdyen_payment_captureInput, {
    nullable: true
  })
  connectOrCreate?: Order_transactionCreateOrConnectWithoutAdyen_payment_captureInput | undefined;

  @TypeGraphQL.Field(_type => Order_transactionWhereUniqueInput, {
    nullable: true
  })
  connect?: Order_transactionWhereUniqueInput | undefined;
}
