import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Customer } from "../models/Customer";
import { Customer_group_registration_sales_channels } from "../models/Customer_group_registration_sales_channels";
import { Customer_group_translation } from "../models/Customer_group_translation";
import { Sales_channel } from "../models/Sales_channel";
import { Customer_groupCount } from "../resolvers/outputs/Customer_groupCount";

@TypeGraphQL.ObjectType("Customer_group", {})
export class Customer_group {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  display_gross!: boolean;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  registration_active!: boolean;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | null;

  customer?: Customer[];

  customer_group_registration_sales_channels?: Customer_group_registration_sales_channels[];

  customer_group_translation?: Customer_group_translation[];

  sales_channel?: Sales_channel[];

  @TypeGraphQL.Field(_type => Customer_groupCount, {
    nullable: true
  })
  _count?: Customer_groupCount | null;
}
