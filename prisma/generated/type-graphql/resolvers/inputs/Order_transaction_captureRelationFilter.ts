import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_transaction_captureWhereInput } from "../inputs/Order_transaction_captureWhereInput";

@TypeGraphQL.InputType("Order_transaction_captureRelationFilter", {})
export class Order_transaction_captureRelationFilter {
  @TypeGraphQL.Field(_type => Order_transaction_captureWhereInput, {
    nullable: true
  })
  is?: Order_transaction_captureWhereInput | undefined;

  @TypeGraphQL.Field(_type => Order_transaction_captureWhereInput, {
    nullable: true
  })
  isNot?: Order_transaction_captureWhereInput | undefined;
}
