import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_delivery_positionCreateManyOrder_line_itemInput } from "../inputs/Order_delivery_positionCreateManyOrder_line_itemInput";

@TypeGraphQL.InputType("Order_delivery_positionCreateManyOrder_line_itemInputEnvelope", {})
export class Order_delivery_positionCreateManyOrder_line_itemInputEnvelope {
  @TypeGraphQL.Field(_type => [Order_delivery_positionCreateManyOrder_line_itemInput], {
    nullable: false
  })
  data!: Order_delivery_positionCreateManyOrder_line_itemInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
