import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { BytesWithAggregatesFilter } from "../inputs/BytesWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";

@TypeGraphQL.InputType("Customer_groupScalarWhereWithAggregatesInput", {})
export class Customer_groupScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [Customer_groupScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: Customer_groupScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_groupScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: Customer_groupScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_groupScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: Customer_groupScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesWithAggregatesFilter, {
    nullable: true
  })
  id?: BytesWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BoolWithAggregatesFilter, {
    nullable: true
  })
  display_gross?: BoolWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BoolWithAggregatesFilter, {
    nullable: true
  })
  registration_active?: BoolWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  created_at?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableWithAggregatesFilter | undefined;
}
