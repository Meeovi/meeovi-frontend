import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_transactionCreateOrConnectWithoutAdyen_paymentInput } from "../inputs/Order_transactionCreateOrConnectWithoutAdyen_paymentInput";
import { Order_transactionCreateWithoutAdyen_paymentInput } from "../inputs/Order_transactionCreateWithoutAdyen_paymentInput";
import { Order_transactionWhereUniqueInput } from "../inputs/Order_transactionWhereUniqueInput";

@TypeGraphQL.InputType("Order_transactionCreateNestedOneWithoutAdyen_paymentInput", {})
export class Order_transactionCreateNestedOneWithoutAdyen_paymentInput {
  @TypeGraphQL.Field(_type => Order_transactionCreateWithoutAdyen_paymentInput, {
    nullable: true
  })
  create?: Order_transactionCreateWithoutAdyen_paymentInput | undefined;

  @TypeGraphQL.Field(_type => Order_transactionCreateOrConnectWithoutAdyen_paymentInput, {
    nullable: true
  })
  connectOrCreate?: Order_transactionCreateOrConnectWithoutAdyen_paymentInput | undefined;

  @TypeGraphQL.Field(_type => Order_transactionWhereUniqueInput, {
    nullable: true
  })
  connect?: Order_transactionWhereUniqueInput | undefined;
}
