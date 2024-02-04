import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_groupCreateWithoutSales_channelInput } from "../inputs/Customer_groupCreateWithoutSales_channelInput";
import { Customer_groupUpdateWithoutSales_channelInput } from "../inputs/Customer_groupUpdateWithoutSales_channelInput";
import { Customer_groupWhereInput } from "../inputs/Customer_groupWhereInput";

@TypeGraphQL.InputType("Customer_groupUpsertWithoutSales_channelInput", {})
export class Customer_groupUpsertWithoutSales_channelInput {
  @TypeGraphQL.Field(_type => Customer_groupUpdateWithoutSales_channelInput, {
    nullable: false
  })
  update!: Customer_groupUpdateWithoutSales_channelInput;

  @TypeGraphQL.Field(_type => Customer_groupCreateWithoutSales_channelInput, {
    nullable: false
  })
  create!: Customer_groupCreateWithoutSales_channelInput;

  @TypeGraphQL.Field(_type => Customer_groupWhereInput, {
    nullable: true
  })
  where?: Customer_groupWhereInput | undefined;
}
