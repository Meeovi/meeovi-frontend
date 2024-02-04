import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_deliveryWhereInput } from "../inputs/Order_deliveryWhereInput";

@TypeGraphQL.InputType("Order_deliveryListRelationFilter", {})
export class Order_deliveryListRelationFilter {
  @TypeGraphQL.Field(_type => Order_deliveryWhereInput, {
    nullable: true
  })
  every?: Order_deliveryWhereInput | undefined;

  @TypeGraphQL.Field(_type => Order_deliveryWhereInput, {
    nullable: true
  })
  some?: Order_deliveryWhereInput | undefined;

  @TypeGraphQL.Field(_type => Order_deliveryWhereInput, {
    nullable: true
  })
  none?: Order_deliveryWhereInput | undefined;
}
