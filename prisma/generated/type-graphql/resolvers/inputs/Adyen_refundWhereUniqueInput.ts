import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Adyen_refundWhereInput } from "../inputs/Adyen_refundWhereInput";
import { BytesFilter } from "../inputs/BytesFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { Order_transactionRelationFilter } from "../inputs/Order_transactionRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("Adyen_refundWhereUniqueInput", {})
export class Adyen_refundWhereUniqueInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  id?: Buffer | undefined;

  @TypeGraphQL.Field(_type => [Adyen_refundWhereInput], {
    nullable: true
  })
  AND?: Adyen_refundWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Adyen_refundWhereInput], {
    nullable: true
  })
  OR?: Adyen_refundWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Adyen_refundWhereInput], {
    nullable: true
  })
  NOT?: Adyen_refundWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  order_transaction_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  psp_reference?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  source?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  status?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  amount?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => Order_transactionRelationFilter, {
    nullable: true
  })
  order_transaction?: Order_transactionRelationFilter | undefined;
}
