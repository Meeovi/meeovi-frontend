import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { Klarna_payment_request_logWhereInput } from "../inputs/Klarna_payment_request_logWhereInput";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("Klarna_payment_request_logWhereUniqueInput", {})
export class Klarna_payment_request_logWhereUniqueInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  id?: Buffer | undefined;

  @TypeGraphQL.Field(_type => [Klarna_payment_request_logWhereInput], {
    nullable: true
  })
  AND?: Klarna_payment_request_logWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Klarna_payment_request_logWhereInput], {
    nullable: true
  })
  OR?: Klarna_payment_request_logWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Klarna_payment_request_logWhereInput], {
    nullable: true
  })
  NOT?: Klarna_payment_request_logWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  klarna_order_id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  call_type?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  request?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  response?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  idempotency_key?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableFilter | undefined;
}
