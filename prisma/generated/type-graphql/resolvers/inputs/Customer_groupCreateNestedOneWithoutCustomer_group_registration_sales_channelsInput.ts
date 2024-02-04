import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_groupCreateOrConnectWithoutCustomer_group_registration_sales_channelsInput } from "../inputs/Customer_groupCreateOrConnectWithoutCustomer_group_registration_sales_channelsInput";
import { Customer_groupCreateWithoutCustomer_group_registration_sales_channelsInput } from "../inputs/Customer_groupCreateWithoutCustomer_group_registration_sales_channelsInput";
import { Customer_groupWhereUniqueInput } from "../inputs/Customer_groupWhereUniqueInput";

@TypeGraphQL.InputType("Customer_groupCreateNestedOneWithoutCustomer_group_registration_sales_channelsInput", {})
export class Customer_groupCreateNestedOneWithoutCustomer_group_registration_sales_channelsInput {
  @TypeGraphQL.Field(_type => Customer_groupCreateWithoutCustomer_group_registration_sales_channelsInput, {
    nullable: true
  })
  create?: Customer_groupCreateWithoutCustomer_group_registration_sales_channelsInput | undefined;

  @TypeGraphQL.Field(_type => Customer_groupCreateOrConnectWithoutCustomer_group_registration_sales_channelsInput, {
    nullable: true
  })
  connectOrCreate?: Customer_groupCreateOrConnectWithoutCustomer_group_registration_sales_channelsInput | undefined;

  @TypeGraphQL.Field(_type => Customer_groupWhereUniqueInput, {
    nullable: true
  })
  connect?: Customer_groupWhereUniqueInput | undefined;
}
