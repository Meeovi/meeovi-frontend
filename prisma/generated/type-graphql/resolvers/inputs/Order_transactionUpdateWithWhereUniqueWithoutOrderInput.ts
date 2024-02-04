import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_transactionUpdateWithoutOrderInput } from "../inputs/Order_transactionUpdateWithoutOrderInput";
import { Order_transactionWhereUniqueInput } from "../inputs/Order_transactionWhereUniqueInput";

@TypeGraphQL.InputType("Order_transactionUpdateWithWhereUniqueWithoutOrderInput", {})
export class Order_transactionUpdateWithWhereUniqueWithoutOrderInput {
  @TypeGraphQL.Field(_type => Order_transactionWhereUniqueInput, {
    nullable: false
  })
  where!: Order_transactionWhereUniqueInput;

  @TypeGraphQL.Field(_type => Order_transactionUpdateWithoutOrderInput, {
    nullable: false
  })
  data!: Order_transactionUpdateWithoutOrderInput;
}
