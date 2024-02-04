import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_group_registration_sales_channelsCreateManyCustomer_groupInput } from "../inputs/Customer_group_registration_sales_channelsCreateManyCustomer_groupInput";

@TypeGraphQL.InputType("Customer_group_registration_sales_channelsCreateManyCustomer_groupInputEnvelope", {})
export class Customer_group_registration_sales_channelsCreateManyCustomer_groupInputEnvelope {
  @TypeGraphQL.Field(_type => [Customer_group_registration_sales_channelsCreateManyCustomer_groupInput], {
    nullable: false
  })
  data!: Customer_group_registration_sales_channelsCreateManyCustomer_groupInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
