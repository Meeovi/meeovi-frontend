import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesWithAggregatesFilter } from "../inputs/BytesWithAggregatesFilter";

@TypeGraphQL.InputType("Order_tagScalarWhereWithAggregatesInput", {})
export class Order_tagScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [Order_tagScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: Order_tagScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_tagScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: Order_tagScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_tagScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: Order_tagScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesWithAggregatesFilter, {
    nullable: true
  })
  order_id?: BytesWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesWithAggregatesFilter, {
    nullable: true
  })
  order_version_id?: BytesWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesWithAggregatesFilter, {
    nullable: true
  })
  tag_id?: BytesWithAggregatesFilter | undefined;
}
