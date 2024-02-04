import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Order } from "../models/Order";
import { Order_address } from "../models/Order_address";
import { Order_delivery_position } from "../models/Order_delivery_position";
import { Shipping_method } from "../models/Shipping_method";
import { Order_deliveryCount } from "../resolvers/outputs/Order_deliveryCount";

@TypeGraphQL.ObjectType("Order_delivery", {})
export class Order_delivery {
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
    nullable: false
  })
  state_id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  shipping_order_address_id?: Buffer | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  shipping_order_address_version_id?: Buffer | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  shipping_method_id!: Buffer;

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
  custom_fields?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | null;

  order?: Order;

  shipping_method?: Shipping_method;

  order_address?: Order_address | null;

  order_delivery_position?: Order_delivery_position[];

  @TypeGraphQL.Field(_type => Order_deliveryCount, {
    nullable: true
  })
  _count?: Order_deliveryCount | null;
}
