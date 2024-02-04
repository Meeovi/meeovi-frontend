import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesWithAggregatesFilter } from "../inputs/BytesWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";

@TypeGraphQL.InputType("Adyen_payment_state_dataScalarWhereWithAggregatesInput", {})
export class Adyen_payment_state_dataScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [Adyen_payment_state_dataScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: Adyen_payment_state_dataScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Adyen_payment_state_dataScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: Adyen_payment_state_dataScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Adyen_payment_state_dataScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: Adyen_payment_state_dataScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesWithAggregatesFilter, {
    nullable: true
  })
  id?: BytesWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  token?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  state_data?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  created_at?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableWithAggregatesFilter | undefined;
}
