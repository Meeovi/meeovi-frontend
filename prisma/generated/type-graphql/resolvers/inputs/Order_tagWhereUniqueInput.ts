import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";
import { OrderRelationFilter } from "../inputs/OrderRelationFilter";
import { Order_tagWhereInput } from "../inputs/Order_tagWhereInput";
import { TagRelationFilter } from "../inputs/TagRelationFilter";
import { order_tagOrder_idOrder_version_idTag_idCompoundUniqueInput } from "../inputs/order_tagOrder_idOrder_version_idTag_idCompoundUniqueInput";

@TypeGraphQL.InputType("Order_tagWhereUniqueInput", {})
export class Order_tagWhereUniqueInput {
  @TypeGraphQL.Field(_type => order_tagOrder_idOrder_version_idTag_idCompoundUniqueInput, {
    nullable: true
  })
  order_id_order_version_id_tag_id?: order_tagOrder_idOrder_version_idTag_idCompoundUniqueInput | undefined;

  @TypeGraphQL.Field(_type => [Order_tagWhereInput], {
    nullable: true
  })
  AND?: Order_tagWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_tagWhereInput], {
    nullable: true
  })
  OR?: Order_tagWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_tagWhereInput], {
    nullable: true
  })
  NOT?: Order_tagWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  order_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  order_version_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  tag_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => OrderRelationFilter, {
    nullable: true
  })
  order?: OrderRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TagRelationFilter, {
    nullable: true
  })
  tag?: TagRelationFilter | undefined;
}
