import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("Adyen_payment_state_dataWhereInput", {})
export class Adyen_payment_state_dataWhereInput {
  @TypeGraphQL.Field(_type => [Adyen_payment_state_dataWhereInput], {
    nullable: true
  })
  AND?: Adyen_payment_state_dataWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Adyen_payment_state_dataWhereInput], {
    nullable: true
  })
  OR?: Adyen_payment_state_dataWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Adyen_payment_state_dataWhereInput], {
    nullable: true
  })
  NOT?: Adyen_payment_state_dataWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  token?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  state_data?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableFilter | undefined;
}
