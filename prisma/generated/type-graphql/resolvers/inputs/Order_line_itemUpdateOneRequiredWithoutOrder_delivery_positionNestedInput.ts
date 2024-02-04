import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_line_itemCreateOrConnectWithoutOrder_delivery_positionInput } from "../inputs/Order_line_itemCreateOrConnectWithoutOrder_delivery_positionInput";
import { Order_line_itemCreateWithoutOrder_delivery_positionInput } from "../inputs/Order_line_itemCreateWithoutOrder_delivery_positionInput";
import { Order_line_itemUpdateToOneWithWhereWithoutOrder_delivery_positionInput } from "../inputs/Order_line_itemUpdateToOneWithWhereWithoutOrder_delivery_positionInput";
import { Order_line_itemUpsertWithoutOrder_delivery_positionInput } from "../inputs/Order_line_itemUpsertWithoutOrder_delivery_positionInput";
import { Order_line_itemWhereUniqueInput } from "../inputs/Order_line_itemWhereUniqueInput";

@TypeGraphQL.InputType("Order_line_itemUpdateOneRequiredWithoutOrder_delivery_positionNestedInput", {})
export class Order_line_itemUpdateOneRequiredWithoutOrder_delivery_positionNestedInput {
  @TypeGraphQL.Field(_type => Order_line_itemCreateWithoutOrder_delivery_positionInput, {
    nullable: true
  })
  create?: Order_line_itemCreateWithoutOrder_delivery_positionInput | undefined;

  @TypeGraphQL.Field(_type => Order_line_itemCreateOrConnectWithoutOrder_delivery_positionInput, {
    nullable: true
  })
  connectOrCreate?: Order_line_itemCreateOrConnectWithoutOrder_delivery_positionInput | undefined;

  @TypeGraphQL.Field(_type => Order_line_itemUpsertWithoutOrder_delivery_positionInput, {
    nullable: true
  })
  upsert?: Order_line_itemUpsertWithoutOrder_delivery_positionInput | undefined;

  @TypeGraphQL.Field(_type => Order_line_itemWhereUniqueInput, {
    nullable: true
  })
  connect?: Order_line_itemWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Order_line_itemUpdateToOneWithWhereWithoutOrder_delivery_positionInput, {
    nullable: true
  })
  update?: Order_line_itemUpdateToOneWithWhereWithoutOrder_delivery_positionInput | undefined;
}
