import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesWithAggregatesFilter } from "../inputs/BytesWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("Klaviyo_job_cart_requestScalarWhereWithAggregatesInput", {})
export class Klaviyo_job_cart_requestScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [Klaviyo_job_cart_requestScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: Klaviyo_job_cart_requestScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Klaviyo_job_cart_requestScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: Klaviyo_job_cart_requestScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Klaviyo_job_cart_requestScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: Klaviyo_job_cart_requestScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesWithAggregatesFilter, {
    nullable: true
  })
  id?: BytesWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesWithAggregatesFilter, {
    nullable: true
  })
  sales_channel_id?: BytesWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  serialized_request?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  created_at?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableWithAggregatesFilter | undefined;
}
