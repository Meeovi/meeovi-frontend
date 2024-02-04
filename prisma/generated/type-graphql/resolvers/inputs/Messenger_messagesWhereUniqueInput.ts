import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { Messenger_messagesWhereInput } from "../inputs/Messenger_messagesWhereInput";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("Messenger_messagesWhereUniqueInput", {})
export class Messenger_messagesWhereUniqueInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  id?: bigint | undefined;

  @TypeGraphQL.Field(_type => [Messenger_messagesWhereInput], {
    nullable: true
  })
  AND?: Messenger_messagesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Messenger_messagesWhereInput], {
    nullable: true
  })
  OR?: Messenger_messagesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Messenger_messagesWhereInput], {
    nullable: true
  })
  NOT?: Messenger_messagesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  body?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  headers?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  queue_name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  available_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  delivered_at?: DateTimeNullableFilter | undefined;
}
