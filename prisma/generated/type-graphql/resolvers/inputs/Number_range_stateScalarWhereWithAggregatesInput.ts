import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesWithAggregatesFilter } from "../inputs/BytesWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("Number_range_stateScalarWhereWithAggregatesInput", {})
export class Number_range_stateScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [Number_range_stateScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: Number_range_stateScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Number_range_stateScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: Number_range_stateScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Number_range_stateScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: Number_range_stateScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesWithAggregatesFilter, {
    nullable: true
  })
  id?: BytesWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesWithAggregatesFilter, {
    nullable: true
  })
  number_range_id?: BytesWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  last_value?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  created_at?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableWithAggregatesFilter | undefined;
}
