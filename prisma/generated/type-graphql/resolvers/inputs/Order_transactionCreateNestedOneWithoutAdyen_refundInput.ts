import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_transactionCreateOrConnectWithoutAdyen_refundInput } from "../inputs/Order_transactionCreateOrConnectWithoutAdyen_refundInput";
import { Order_transactionCreateWithoutAdyen_refundInput } from "../inputs/Order_transactionCreateWithoutAdyen_refundInput";
import { Order_transactionWhereUniqueInput } from "../inputs/Order_transactionWhereUniqueInput";

@TypeGraphQL.InputType("Order_transactionCreateNestedOneWithoutAdyen_refundInput", {})
export class Order_transactionCreateNestedOneWithoutAdyen_refundInput {
  @TypeGraphQL.Field(_type => Order_transactionCreateWithoutAdyen_refundInput, {
    nullable: true
  })
  create?: Order_transactionCreateWithoutAdyen_refundInput | undefined;

  @TypeGraphQL.Field(_type => Order_transactionCreateOrConnectWithoutAdyen_refundInput, {
    nullable: true
  })
  connectOrCreate?: Order_transactionCreateOrConnectWithoutAdyen_refundInput | undefined;

  @TypeGraphQL.Field(_type => Order_transactionWhereUniqueInput, {
    nullable: true
  })
  connect?: Order_transactionWhereUniqueInput | undefined;
}
