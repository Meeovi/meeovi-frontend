import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaCreateNestedOneWithoutOrder_line_itemInput } from "../inputs/MediaCreateNestedOneWithoutOrder_line_itemInput";
import { OrderCreateNestedOneWithoutOrder_line_itemInput } from "../inputs/OrderCreateNestedOneWithoutOrder_line_itemInput";
import { Order_delivery_positionCreateNestedManyWithoutOrder_line_itemInput } from "../inputs/Order_delivery_positionCreateNestedManyWithoutOrder_line_itemInput";
import { Order_line_itemCreateNestedManyWithoutOrder_line_itemInput } from "../inputs/Order_line_itemCreateNestedManyWithoutOrder_line_itemInput";
import { Order_line_itemCreateNestedOneWithoutOther_order_line_itemInput } from "../inputs/Order_line_itemCreateNestedOneWithoutOther_order_line_itemInput";
import { Order_line_item_downloadCreateNestedManyWithoutOrder_line_itemInput } from "../inputs/Order_line_item_downloadCreateNestedManyWithoutOrder_line_itemInput";
import { ProductCreateNestedOneWithoutOrder_line_itemInput } from "../inputs/ProductCreateNestedOneWithoutOrder_line_itemInput";
import { PromotionCreateNestedOneWithoutOrder_line_itemInput } from "../inputs/PromotionCreateNestedOneWithoutOrder_line_itemInput";

@TypeGraphQL.InputType("Order_line_itemCreateWithoutOrder_transaction_capture_refund_positionInput", {})
export class Order_line_itemCreateWithoutOrder_transaction_capture_refund_positionInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  version_id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  referenced_id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  states?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  label!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  quantity!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  unit_price?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  total_price?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  type?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  payload?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  price_definition?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  price!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  stackable?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  removable?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  good?: boolean | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  position?: number | undefined;

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

  @TypeGraphQL.Field(_type => Order_delivery_positionCreateNestedManyWithoutOrder_line_itemInput, {
    nullable: true
  })
  order_delivery_position?: Order_delivery_positionCreateNestedManyWithoutOrder_line_itemInput | undefined;

  @TypeGraphQL.Field(_type => MediaCreateNestedOneWithoutOrder_line_itemInput, {
    nullable: true
  })
  media?: MediaCreateNestedOneWithoutOrder_line_itemInput | undefined;

  @TypeGraphQL.Field(_type => OrderCreateNestedOneWithoutOrder_line_itemInput, {
    nullable: false
  })
  order!: OrderCreateNestedOneWithoutOrder_line_itemInput;

  @TypeGraphQL.Field(_type => Order_line_itemCreateNestedOneWithoutOther_order_line_itemInput, {
    nullable: true
  })
  order_line_item?: Order_line_itemCreateNestedOneWithoutOther_order_line_itemInput | undefined;

  @TypeGraphQL.Field(_type => Order_line_itemCreateNestedManyWithoutOrder_line_itemInput, {
    nullable: true
  })
  other_order_line_item?: Order_line_itemCreateNestedManyWithoutOrder_line_itemInput | undefined;

  @TypeGraphQL.Field(_type => PromotionCreateNestedOneWithoutOrder_line_itemInput, {
    nullable: true
  })
  promotion?: PromotionCreateNestedOneWithoutOrder_line_itemInput | undefined;

  @TypeGraphQL.Field(_type => ProductCreateNestedOneWithoutOrder_line_itemInput, {
    nullable: true
  })
  product?: ProductCreateNestedOneWithoutOrder_line_itemInput | undefined;

  @TypeGraphQL.Field(_type => Order_line_item_downloadCreateNestedManyWithoutOrder_line_itemInput, {
    nullable: true
  })
  order_line_item_download?: Order_line_item_downloadCreateNestedManyWithoutOrder_line_itemInput | undefined;
}
