import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_line_itemUpdateWithoutOrder_delivery_positionInput } from "../inputs/Order_line_itemUpdateWithoutOrder_delivery_positionInput";
import { Order_line_itemWhereInput } from "../inputs/Order_line_itemWhereInput";

@TypeGraphQL.InputType("Order_line_itemUpdateToOneWithWhereWithoutOrder_delivery_positionInput", {})
export class Order_line_itemUpdateToOneWithWhereWithoutOrder_delivery_positionInput {
  @TypeGraphQL.Field(_type => Order_line_itemWhereInput, {
    nullable: true
  })
  where?: Order_line_itemWhereInput | undefined;

  @TypeGraphQL.Field(_type => Order_line_itemUpdateWithoutOrder_delivery_positionInput, {
    nullable: false
  })
  data!: Order_line_itemUpdateWithoutOrder_delivery_positionInput;
}
