import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesWithAggregatesFilter } from "../inputs/BytesWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";

@TypeGraphQL.InputType("Product_feature_setScalarWhereWithAggregatesInput", {})
export class Product_feature_setScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [Product_feature_setScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: Product_feature_setScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_feature_setScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: Product_feature_setScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_feature_setScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: Product_feature_setScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesWithAggregatesFilter, {
    nullable: true
  })
  id?: BytesWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  features?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  created_at?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableWithAggregatesFilter | undefined;
}
