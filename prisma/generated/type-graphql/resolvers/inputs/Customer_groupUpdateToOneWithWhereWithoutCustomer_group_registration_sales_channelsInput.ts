import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_groupUpdateWithoutCustomer_group_registration_sales_channelsInput } from "../inputs/Customer_groupUpdateWithoutCustomer_group_registration_sales_channelsInput";
import { Customer_groupWhereInput } from "../inputs/Customer_groupWhereInput";

@TypeGraphQL.InputType("Customer_groupUpdateToOneWithWhereWithoutCustomer_group_registration_sales_channelsInput", {})
export class Customer_groupUpdateToOneWithWhereWithoutCustomer_group_registration_sales_channelsInput {
  @TypeGraphQL.Field(_type => Customer_groupWhereInput, {
    nullable: true
  })
  where?: Customer_groupWhereInput | undefined;

  @TypeGraphQL.Field(_type => Customer_groupUpdateWithoutCustomer_group_registration_sales_channelsInput, {
    nullable: false
  })
  data!: Customer_groupUpdateWithoutCustomer_group_registration_sales_channelsInput;
}
