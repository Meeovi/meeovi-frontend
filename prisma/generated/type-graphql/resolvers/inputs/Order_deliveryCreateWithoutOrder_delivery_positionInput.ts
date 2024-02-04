import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateNestedOneWithoutOrder_deliveryInput } from "../inputs/OrderCreateNestedOneWithoutOrder_deliveryInput";
import { Order_addressCreateNestedOneWithoutOrder_deliveryInput } from "../inputs/Order_addressCreateNestedOneWithoutOrder_deliveryInput";
import { Shipping_methodCreateNestedOneWithoutOrder_deliveryInput } from "../inputs/Shipping_methodCreateNestedOneWithoutOrder_deliveryInput";

@TypeGraphQL.InputType("Order_deliveryCreateWithoutOrder_delivery_positionInput", {})
export class Order_deliveryCreateWithoutOrder_delivery_positionInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  version_id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  state_id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  tracking_codes!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  shipping_date_earliest!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  shipping_date_latest!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  shipping_costs!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  custom_fields?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => OrderCreateNestedOneWithoutOrder_deliveryInput, {
    nullable: false
  })
  order!: OrderCreateNestedOneWithoutOrder_deliveryInput;

  @TypeGraphQL.Field(_type => Shipping_methodCreateNestedOneWithoutOrder_deliveryInput, {
    nullable: false
  })
  shipping_method!: Shipping_methodCreateNestedOneWithoutOrder_deliveryInput;

  @TypeGraphQL.Field(_type => Order_addressCreateNestedOneWithoutOrder_deliveryInput, {
    nullable: true
  })
  order_address?: Order_addressCreateNestedOneWithoutOrder_deliveryInput | undefined;
}
