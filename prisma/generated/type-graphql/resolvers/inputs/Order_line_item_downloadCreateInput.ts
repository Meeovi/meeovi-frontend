import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaCreateNestedOneWithoutOrder_line_item_downloadInput } from "../inputs/MediaCreateNestedOneWithoutOrder_line_item_downloadInput";
import { Order_line_itemCreateNestedOneWithoutOrder_line_item_downloadInput } from "../inputs/Order_line_itemCreateNestedOneWithoutOrder_line_item_downloadInput";

@TypeGraphQL.InputType("Order_line_item_downloadCreateInput", {})
export class Order_line_item_downloadCreateInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  version_id!: Buffer;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  position?: number | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  access_granted?: boolean | undefined;

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

  @TypeGraphQL.Field(_type => MediaCreateNestedOneWithoutOrder_line_item_downloadInput, {
    nullable: false
  })
  media!: MediaCreateNestedOneWithoutOrder_line_item_downloadInput;

  @TypeGraphQL.Field(_type => Order_line_itemCreateNestedOneWithoutOrder_line_item_downloadInput, {
    nullable: false
  })
  order_line_item!: Order_line_itemCreateNestedOneWithoutOrder_line_item_downloadInput;
}
