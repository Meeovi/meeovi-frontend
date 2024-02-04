import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_deliveryCreateOrConnectWithoutOrder_delivery_positionInput } from "../inputs/Order_deliveryCreateOrConnectWithoutOrder_delivery_positionInput";
import { Order_deliveryCreateWithoutOrder_delivery_positionInput } from "../inputs/Order_deliveryCreateWithoutOrder_delivery_positionInput";
import { Order_deliveryWhereUniqueInput } from "../inputs/Order_deliveryWhereUniqueInput";

@TypeGraphQL.InputType("Order_deliveryCreateNestedOneWithoutOrder_delivery_positionInput", {})
export class Order_deliveryCreateNestedOneWithoutOrder_delivery_positionInput {
  @TypeGraphQL.Field(_type => Order_deliveryCreateWithoutOrder_delivery_positionInput, {
    nullable: true
  })
  create?: Order_deliveryCreateWithoutOrder_delivery_positionInput | undefined;

  @TypeGraphQL.Field(_type => Order_deliveryCreateOrConnectWithoutOrder_delivery_positionInput, {
    nullable: true
  })
  connectOrCreate?: Order_deliveryCreateOrConnectWithoutOrder_delivery_positionInput | undefined;

  @TypeGraphQL.Field(_type => Order_deliveryWhereUniqueInput, {
    nullable: true
  })
  connect?: Order_deliveryWhereUniqueInput | undefined;
}
