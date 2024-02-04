import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Media } from "../models/Media";
import { Order } from "../models/Order";
import { Order_delivery_position } from "../models/Order_delivery_position";
import { Order_line_item_download } from "../models/Order_line_item_download";
import { Order_transaction_capture_refund_position } from "../models/Order_transaction_capture_refund_position";
import { Product } from "../models/Product";
import { Promotion } from "../models/Promotion";
import { Order_line_itemCount } from "../resolvers/outputs/Order_line_itemCount";

@TypeGraphQL.ObjectType("Order_line_item", {})
export class Order_line_item {
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
  order_id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  order_version_id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  parent_id?: Buffer | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  parent_version_id?: Buffer | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  referenced_id?: string | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  product_id?: Buffer | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  product_version_id?: Buffer | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  promotion_id?: Buffer | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  states?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  label!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  cover_id?: Buffer | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  quantity!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  unit_price?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  total_price?: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  type?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  payload?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  price_definition?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  price!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  stackable!: boolean;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  removable!: boolean;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  good!: boolean;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  position!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  custom_fields?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | null;

  order_delivery_position?: Order_delivery_position[];

  media?: Media | null;

  order?: Order;

  order_line_item?: Order_line_item | null;

  other_order_line_item?: Order_line_item[];

  promotion?: Promotion | null;

  product?: Product | null;

  order_line_item_download?: Order_line_item_download[];

  order_transaction_capture_refund_position?: Order_transaction_capture_refund_position[];

  @TypeGraphQL.Field(_type => Order_line_itemCount, {
    nullable: true
  })
  _count?: Order_line_itemCount | null;
}
