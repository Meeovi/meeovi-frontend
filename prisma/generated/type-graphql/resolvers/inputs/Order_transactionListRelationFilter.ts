import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_transactionWhereInput } from "../inputs/Order_transactionWhereInput";

@TypeGraphQL.InputType("Order_transactionListRelationFilter", {})
export class Order_transactionListRelationFilter {
  @TypeGraphQL.Field(_type => Order_transactionWhereInput, {
    nullable: true
  })
  every?: Order_transactionWhereInput | undefined;

  @TypeGraphQL.Field(_type => Order_transactionWhereInput, {
    nullable: true
  })
  some?: Order_transactionWhereInput | undefined;

  @TypeGraphQL.Field(_type => Order_transactionWhereInput, {
    nullable: true
  })
  none?: Order_transactionWhereInput | undefined;
}
