import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_transactionUpdateWithoutPayment_methodInput } from "../inputs/Order_transactionUpdateWithoutPayment_methodInput";
import { Order_transactionWhereUniqueInput } from "../inputs/Order_transactionWhereUniqueInput";

@TypeGraphQL.InputType("Order_transactionUpdateWithWhereUniqueWithoutPayment_methodInput", {})
export class Order_transactionUpdateWithWhereUniqueWithoutPayment_methodInput {
  @TypeGraphQL.Field(_type => Order_transactionWhereUniqueInput, {
    nullable: false
  })
  where!: Order_transactionWhereUniqueInput;

  @TypeGraphQL.Field(_type => Order_transactionUpdateWithoutPayment_methodInput, {
    nullable: false
  })
  data!: Order_transactionUpdateWithoutPayment_methodInput;
}
