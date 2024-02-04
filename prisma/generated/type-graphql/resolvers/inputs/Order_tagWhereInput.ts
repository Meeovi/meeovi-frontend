import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";
import { OrderRelationFilter } from "../inputs/OrderRelationFilter";
import { TagRelationFilter } from "../inputs/TagRelationFilter";

@TypeGraphQL.InputType("Order_tagWhereInput", {})
export class Order_tagWhereInput {
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
