import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_transactionCreateWithoutOrderInput } from "../inputs/Order_transactionCreateWithoutOrderInput";
import { Order_transactionWhereUniqueInput } from "../inputs/Order_transactionWhereUniqueInput";

@TypeGraphQL.InputType("Order_transactionCreateOrConnectWithoutOrderInput", {})
export class Order_transactionCreateOrConnectWithoutOrderInput {
  @TypeGraphQL.Field(_type => Order_transactionWhereUniqueInput, {
    nullable: false
  })
  where!: Order_transactionWhereUniqueInput;

  @TypeGraphQL.Field(_type => Order_transactionCreateWithoutOrderInput, {
    nullable: false
  })
  create!: Order_transactionCreateWithoutOrderInput;
}
