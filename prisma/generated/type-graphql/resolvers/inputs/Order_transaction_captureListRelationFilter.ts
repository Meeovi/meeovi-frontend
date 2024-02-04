import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_transaction_captureWhereInput } from "../inputs/Order_transaction_captureWhereInput";

@TypeGraphQL.InputType("Order_transaction_captureListRelationFilter", {})
export class Order_transaction_captureListRelationFilter {
  @TypeGraphQL.Field(_type => Order_transaction_captureWhereInput, {
    nullable: true
  })
  every?: Order_transaction_captureWhereInput | undefined;

  @TypeGraphQL.Field(_type => Order_transaction_captureWhereInput, {
    nullable: true
  })
  some?: Order_transaction_captureWhereInput | undefined;

  @TypeGraphQL.Field(_type => Order_transaction_captureWhereInput, {
    nullable: true
  })
  none?: Order_transaction_captureWhereInput | undefined;
}
