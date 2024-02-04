import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_transactionUpdateWithoutAdyen_refundInput } from "../inputs/Order_transactionUpdateWithoutAdyen_refundInput";
import { Order_transactionWhereInput } from "../inputs/Order_transactionWhereInput";

@TypeGraphQL.InputType("Order_transactionUpdateToOneWithWhereWithoutAdyen_refundInput", {})
export class Order_transactionUpdateToOneWithWhereWithoutAdyen_refundInput {
  @TypeGraphQL.Field(_type => Order_transactionWhereInput, {
    nullable: true
  })
  where?: Order_transactionWhereInput | undefined;

  @TypeGraphQL.Field(_type => Order_transactionUpdateWithoutAdyen_refundInput, {
    nullable: false
  })
  data!: Order_transactionUpdateWithoutAdyen_refundInput;
}
