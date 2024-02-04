import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_group_registration_sales_channelsWhereInput } from "../inputs/Customer_group_registration_sales_channelsWhereInput";

@TypeGraphQL.InputType("Customer_group_registration_sales_channelsListRelationFilter", {})
export class Customer_group_registration_sales_channelsListRelationFilter {
  @TypeGraphQL.Field(_type => Customer_group_registration_sales_channelsWhereInput, {
    nullable: true
  })
  every?: Customer_group_registration_sales_channelsWhereInput | undefined;

  @TypeGraphQL.Field(_type => Customer_group_registration_sales_channelsWhereInput, {
    nullable: true
  })
  some?: Customer_group_registration_sales_channelsWhereInput | undefined;

  @TypeGraphQL.Field(_type => Customer_group_registration_sales_channelsWhereInput, {
    nullable: true
  })
  none?: Customer_group_registration_sales_channelsWhereInput | undefined;
}
