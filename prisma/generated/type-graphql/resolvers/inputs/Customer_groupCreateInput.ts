import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateNestedManyWithoutCustomer_groupInput } from "../inputs/CustomerCreateNestedManyWithoutCustomer_groupInput";
import { Customer_group_registration_sales_channelsCreateNestedManyWithoutCustomer_groupInput } from "../inputs/Customer_group_registration_sales_channelsCreateNestedManyWithoutCustomer_groupInput";
import { Customer_group_translationCreateNestedManyWithoutCustomer_groupInput } from "../inputs/Customer_group_translationCreateNestedManyWithoutCustomer_groupInput";
import { Sales_channelCreateNestedManyWithoutCustomer_groupInput } from "../inputs/Sales_channelCreateNestedManyWithoutCustomer_groupInput";

@TypeGraphQL.InputType("Customer_groupCreateInput", {})
export class Customer_groupCreateInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  display_gross?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  registration_active?: boolean | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => CustomerCreateNestedManyWithoutCustomer_groupInput, {
    nullable: true
  })
  customer?: CustomerCreateNestedManyWithoutCustomer_groupInput | undefined;

  @TypeGraphQL.Field(_type => Customer_group_registration_sales_channelsCreateNestedManyWithoutCustomer_groupInput, {
    nullable: true
  })
  customer_group_registration_sales_channels?: Customer_group_registration_sales_channelsCreateNestedManyWithoutCustomer_groupInput | undefined;

  @TypeGraphQL.Field(_type => Customer_group_translationCreateNestedManyWithoutCustomer_groupInput, {
    nullable: true
  })
  customer_group_translation?: Customer_group_translationCreateNestedManyWithoutCustomer_groupInput | undefined;

  @TypeGraphQL.Field(_type => Sales_channelCreateNestedManyWithoutCustomer_groupInput, {
    nullable: true
  })
  sales_channel?: Sales_channelCreateNestedManyWithoutCustomer_groupInput | undefined;
}
