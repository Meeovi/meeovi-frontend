import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesWithAggregatesFilter } from "../inputs/BytesWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";

@TypeGraphQL.InputType("Delivery_time_translationScalarWhereWithAggregatesInput", {})
export class Delivery_time_translationScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [Delivery_time_translationScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: Delivery_time_translationScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Delivery_time_translationScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: Delivery_time_translationScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Delivery_time_translationScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: Delivery_time_translationScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesWithAggregatesFilter, {
    nullable: true
  })
  delivery_time_id?: BytesWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesWithAggregatesFilter, {
    nullable: true
  })
  language_id?: BytesWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  name?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  custom_fields?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  created_at?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableWithAggregatesFilter | undefined;
}
