import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_transactionWhereInput } from "../inputs/Order_transactionWhereInput";

@TypeGraphQL.InputType("Order_transactionRelationFilter", {})
export class Order_transactionRelationFilter {
  @TypeGraphQL.Field(_type => Order_transactionWhereInput, {
    nullable: true
  })
  is?: Order_transactionWhereInput | undefined;

  @TypeGraphQL.Field(_type => Order_transactionWhereInput, {
    nullable: true
  })
  isNot?: Order_transactionWhereInput | undefined;
}
