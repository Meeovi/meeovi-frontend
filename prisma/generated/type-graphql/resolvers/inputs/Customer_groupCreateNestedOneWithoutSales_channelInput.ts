import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_groupCreateOrConnectWithoutSales_channelInput } from "../inputs/Customer_groupCreateOrConnectWithoutSales_channelInput";
import { Customer_groupCreateWithoutSales_channelInput } from "../inputs/Customer_groupCreateWithoutSales_channelInput";
import { Customer_groupWhereUniqueInput } from "../inputs/Customer_groupWhereUniqueInput";

@TypeGraphQL.InputType("Customer_groupCreateNestedOneWithoutSales_channelInput", {})
export class Customer_groupCreateNestedOneWithoutSales_channelInput {
  @TypeGraphQL.Field(_type => Customer_groupCreateWithoutSales_channelInput, {
    nullable: true
  })
  create?: Customer_groupCreateWithoutSales_channelInput | undefined;

  @TypeGraphQL.Field(_type => Customer_groupCreateOrConnectWithoutSales_channelInput, {
    nullable: true
  })
  connectOrCreate?: Customer_groupCreateOrConnectWithoutSales_channelInput | undefined;

  @TypeGraphQL.Field(_type => Customer_groupWhereUniqueInput, {
    nullable: true
  })
  connect?: Customer_groupWhereUniqueInput | undefined;
}
