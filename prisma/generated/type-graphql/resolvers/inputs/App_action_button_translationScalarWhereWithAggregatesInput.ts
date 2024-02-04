import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesWithAggregatesFilter } from "../inputs/BytesWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";

@TypeGraphQL.InputType("App_action_button_translationScalarWhereWithAggregatesInput", {})
export class App_action_button_translationScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [App_action_button_translationScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: App_action_button_translationScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_action_button_translationScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: App_action_button_translationScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_action_button_translationScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: App_action_button_translationScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  label?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  created_at?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesWithAggregatesFilter, {
    nullable: true
  })
  app_action_button_id?: BytesWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesWithAggregatesFilter, {
    nullable: true
  })
  language_id?: BytesWithAggregatesFilter | undefined;
}
