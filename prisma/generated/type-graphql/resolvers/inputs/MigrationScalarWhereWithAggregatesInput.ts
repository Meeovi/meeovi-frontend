import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("MigrationScalarWhereWithAggregatesInput", {})
export class MigrationScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [MigrationScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: MigrationScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MigrationScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: MigrationScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MigrationScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: MigrationScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  class?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  creation_timestamp?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter, {
    nullable: true
  })
  update?: DateTimeNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter, {
    nullable: true
  })
  update_destructive?: DateTimeNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  message?: StringNullableWithAggregatesFilter | undefined;
}
