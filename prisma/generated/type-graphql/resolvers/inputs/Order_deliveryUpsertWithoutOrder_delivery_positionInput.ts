import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_deliveryCreateWithoutOrder_delivery_positionInput } from "../inputs/Order_deliveryCreateWithoutOrder_delivery_positionInput";
import { Order_deliveryUpdateWithoutOrder_delivery_positionInput } from "../inputs/Order_deliveryUpdateWithoutOrder_delivery_positionInput";
import { Order_deliveryWhereInput } from "../inputs/Order_deliveryWhereInput";

@TypeGraphQL.InputType("Order_deliveryUpsertWithoutOrder_delivery_positionInput", {})
export class Order_deliveryUpsertWithoutOrder_delivery_positionInput {
  @TypeGraphQL.Field(_type => Order_deliveryUpdateWithoutOrder_delivery_positionInput, {
    nullable: false
  })
  update!: Order_deliveryUpdateWithoutOrder_delivery_positionInput;

  @TypeGraphQL.Field(_type => Order_deliveryCreateWithoutOrder_delivery_positionInput, {
    nullable: false
  })
  create!: Order_deliveryCreateWithoutOrder_delivery_positionInput;

  @TypeGraphQL.Field(_type => Order_deliveryWhereInput, {
    nullable: true
  })
  where?: Order_deliveryWhereInput | undefined;
}
