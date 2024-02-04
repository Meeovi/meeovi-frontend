import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Adyen_payment_responseWhereInput } from "../inputs/Adyen_payment_responseWhereInput";
import { BytesNullableFilter } from "../inputs/BytesNullableFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("Adyen_payment_responseWhereUniqueInput", {})
export class Adyen_payment_responseWhereUniqueInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  id?: Buffer | undefined;

  @TypeGraphQL.Field(_type => [Adyen_payment_responseWhereInput], {
    nullable: true
  })
  AND?: Adyen_payment_responseWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Adyen_payment_responseWhereInput], {
    nullable: true
  })
  OR?: Adyen_payment_responseWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Adyen_payment_responseWhereInput], {
    nullable: true
  })
  NOT?: Adyen_payment_responseWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesNullableFilter, {
    nullable: true
  })
  order_transaction_id?: BytesNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  result_code?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  response?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableFilter | undefined;
}
