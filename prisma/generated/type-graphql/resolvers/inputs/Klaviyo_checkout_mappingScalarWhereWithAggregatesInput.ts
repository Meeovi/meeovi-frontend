import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesWithAggregatesFilter } from "../inputs/BytesWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("Klaviyo_checkout_mappingScalarWhereWithAggregatesInput", {})
export class Klaviyo_checkout_mappingScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [Klaviyo_checkout_mappingScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: Klaviyo_checkout_mappingScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Klaviyo_checkout_mappingScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: Klaviyo_checkout_mappingScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Klaviyo_checkout_mappingScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: Klaviyo_checkout_mappingScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesWithAggregatesFilter, {
    nullable: true
  })
  id?: BytesWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  reference?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  mapping_table?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  created_at?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableWithAggregatesFilter | undefined;
}
