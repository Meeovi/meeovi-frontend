import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BigIntWithAggregatesFilter } from "../inputs/BigIntWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("Messenger_messagesScalarWhereWithAggregatesInput", {})
export class Messenger_messagesScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [Messenger_messagesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: Messenger_messagesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Messenger_messagesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: Messenger_messagesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Messenger_messagesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: Messenger_messagesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => BigIntWithAggregatesFilter, {
    nullable: true
  })
  id?: BigIntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  body?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  headers?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  queue_name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  created_at?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  available_at?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter, {
    nullable: true
  })
  delivered_at?: DateTimeNullableWithAggregatesFilter | undefined;
}
