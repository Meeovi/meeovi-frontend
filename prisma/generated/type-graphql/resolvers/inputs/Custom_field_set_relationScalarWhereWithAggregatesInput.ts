import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesWithAggregatesFilter } from "../inputs/BytesWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("Custom_field_set_relationScalarWhereWithAggregatesInput", {})
export class Custom_field_set_relationScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [Custom_field_set_relationScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: Custom_field_set_relationScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Custom_field_set_relationScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: Custom_field_set_relationScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Custom_field_set_relationScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: Custom_field_set_relationScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesWithAggregatesFilter, {
    nullable: true
  })
  id?: BytesWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesWithAggregatesFilter, {
    nullable: true
  })
  set_id?: BytesWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  entity_name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  created_at?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableWithAggregatesFilter | undefined;
}
