import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_delivery_positionWhereInput } from "../inputs/Order_delivery_positionWhereInput";

@TypeGraphQL.InputType("Order_delivery_positionListRelationFilter", {})
export class Order_delivery_positionListRelationFilter {
  @TypeGraphQL.Field(_type => Order_delivery_positionWhereInput, {
    nullable: true
  })
  every?: Order_delivery_positionWhereInput | undefined;

  @TypeGraphQL.Field(_type => Order_delivery_positionWhereInput, {
    nullable: true
  })
  some?: Order_delivery_positionWhereInput | undefined;

  @TypeGraphQL.Field(_type => Order_delivery_positionWhereInput, {
    nullable: true
  })
  none?: Order_delivery_positionWhereInput | undefined;
}
