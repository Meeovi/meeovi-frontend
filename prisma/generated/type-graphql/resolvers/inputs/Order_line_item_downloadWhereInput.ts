import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { BytesFilter } from "../inputs/BytesFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { MediaRelationFilter } from "../inputs/MediaRelationFilter";
import { Order_line_itemRelationFilter } from "../inputs/Order_line_itemRelationFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("Order_line_item_downloadWhereInput", {})
export class Order_line_item_downloadWhereInput {
  @TypeGraphQL.Field(_type => [Order_line_item_downloadWhereInput], {
    nullable: true
  })
  AND?: Order_line_item_downloadWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_line_item_downloadWhereInput], {
    nullable: true
  })
  OR?: Order_line_item_downloadWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_line_item_downloadWhereInput], {
    nullable: true
  })
  NOT?: Order_line_item_downloadWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  version_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  position?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  access_granted?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  order_line_item_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  order_line_item_version_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  media_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  custom_fields?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => MediaRelationFilter, {
    nullable: true
  })
  media?: MediaRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Order_line_itemRelationFilter, {
    nullable: true
  })
  order_line_item?: Order_line_itemRelationFilter | undefined;
}
