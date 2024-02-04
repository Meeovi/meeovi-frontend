import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_line_itemCreateOrConnectWithoutOther_order_line_itemInput } from "../inputs/Order_line_itemCreateOrConnectWithoutOther_order_line_itemInput";
import { Order_line_itemCreateWithoutOther_order_line_itemInput } from "../inputs/Order_line_itemCreateWithoutOther_order_line_itemInput";
import { Order_line_itemWhereUniqueInput } from "../inputs/Order_line_itemWhereUniqueInput";

@TypeGraphQL.InputType("Order_line_itemCreateNestedOneWithoutOther_order_line_itemInput", {})
export class Order_line_itemCreateNestedOneWithoutOther_order_line_itemInput {
  @TypeGraphQL.Field(_type => Order_line_itemCreateWithoutOther_order_line_itemInput, {
    nullable: true
  })
  create?: Order_line_itemCreateWithoutOther_order_line_itemInput | undefined;

  @TypeGraphQL.Field(_type => Order_line_itemCreateOrConnectWithoutOther_order_line_itemInput, {
    nullable: true
  })
  connectOrCreate?: Order_line_itemCreateOrConnectWithoutOther_order_line_itemInput | undefined;

  @TypeGraphQL.Field(_type => Order_line_itemWhereUniqueInput, {
    nullable: true
  })
  connect?: Order_line_itemWhereUniqueInput | undefined;
}
