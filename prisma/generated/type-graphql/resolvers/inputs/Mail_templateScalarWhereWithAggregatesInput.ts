import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { BytesNullableWithAggregatesFilter } from "../inputs/BytesNullableWithAggregatesFilter";
import { BytesWithAggregatesFilter } from "../inputs/BytesWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";

@TypeGraphQL.InputType("Mail_templateScalarWhereWithAggregatesInput", {})
export class Mail_templateScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [Mail_templateScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: Mail_templateScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Mail_templateScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: Mail_templateScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Mail_templateScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: Mail_templateScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesWithAggregatesFilter, {
    nullable: true
  })
  id?: BytesWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableWithAggregatesFilter, {
    nullable: true
  })
  mail_template_type_id?: BytesNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BoolWithAggregatesFilter, {
    nullable: true
  })
  system_default?: BoolWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  created_at?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableWithAggregatesFilter | undefined;
}
