import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_deliveryWhereInput } from "../inputs/Order_deliveryWhereInput";

@TypeGraphQL.InputType("Order_deliveryRelationFilter", {})
export class Order_deliveryRelationFilter {
  @TypeGraphQL.Field(_type => Order_deliveryWhereInput, {
    nullable: true
  })
  is?: Order_deliveryWhereInput | undefined;

  @TypeGraphQL.Field(_type => Order_deliveryWhereInput, {
    nullable: true
  })
  isNot?: Order_deliveryWhereInput | undefined;
}
