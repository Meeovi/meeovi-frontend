import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateOrConnectWithoutOrder_transactionInput } from "../inputs/OrderCreateOrConnectWithoutOrder_transactionInput";
import { OrderCreateWithoutOrder_transactionInput } from "../inputs/OrderCreateWithoutOrder_transactionInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";

@TypeGraphQL.InputType("OrderCreateNestedOneWithoutOrder_transactionInput", {})
export class OrderCreateNestedOneWithoutOrder_transactionInput {
  @TypeGraphQL.Field(_type => OrderCreateWithoutOrder_transactionInput, {
    nullable: true
  })
  create?: OrderCreateWithoutOrder_transactionInput | undefined;

  @TypeGraphQL.Field(_type => OrderCreateOrConnectWithoutOrder_transactionInput, {
    nullable: true
  })
  connectOrCreate?: OrderCreateOrConnectWithoutOrder_transactionInput | undefined;

  @TypeGraphQL.Field(_type => OrderWhereUniqueInput, {
    nullable: true
  })
  connect?: OrderWhereUniqueInput | undefined;
}
