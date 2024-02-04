import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";

@TypeGraphQL.InputType("Customer_group_registration_sales_channelsScalarWhereInput", {})
export class Customer_group_registration_sales_channelsScalarWhereInput {
  @TypeGraphQL.Field(_type => [Customer_group_registration_sales_channelsScalarWhereInput], {
    nullable: true
  })
  AND?: Customer_group_registration_sales_channelsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_group_registration_sales_channelsScalarWhereInput], {
    nullable: true
  })
  OR?: Customer_group_registration_sales_channelsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_group_registration_sales_channelsScalarWhereInput], {
    nullable: true
  })
  NOT?: Customer_group_registration_sales_channelsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  customer_group_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  sales_channel_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;
}
