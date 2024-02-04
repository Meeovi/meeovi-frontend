import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Landing_page_sales_channelCreateManySales_channelInputEnvelope } from "../inputs/Landing_page_sales_channelCreateManySales_channelInputEnvelope";
import { Landing_page_sales_channelCreateOrConnectWithoutSales_channelInput } from "../inputs/Landing_page_sales_channelCreateOrConnectWithoutSales_channelInput";
import { Landing_page_sales_channelCreateWithoutSales_channelInput } from "../inputs/Landing_page_sales_channelCreateWithoutSales_channelInput";
import { Landing_page_sales_channelWhereUniqueInput } from "../inputs/Landing_page_sales_channelWhereUniqueInput";

@TypeGraphQL.InputType("Landing_page_sales_channelCreateNestedManyWithoutSales_channelInput", {})
export class Landing_page_sales_channelCreateNestedManyWithoutSales_channelInput {
  @TypeGraphQL.Field(_type => [Landing_page_sales_channelCreateWithoutSales_channelInput], {
    nullable: true
  })
  create?: Landing_page_sales_channelCreateWithoutSales_channelInput[] | undefined;

  @TypeGraphQL.Field(_type => [Landing_page_sales_channelCreateOrConnectWithoutSales_channelInput], {
    nullable: true
  })
  connectOrCreate?: Landing_page_sales_channelCreateOrConnectWithoutSales_channelInput[] | undefined;

  @TypeGraphQL.Field(_type => Landing_page_sales_channelCreateManySales_channelInputEnvelope, {
    nullable: true
  })
  createMany?: Landing_page_sales_channelCreateManySales_channelInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Landing_page_sales_channelWhereUniqueInput], {
    nullable: true
  })
  connect?: Landing_page_sales_channelWhereUniqueInput[] | undefined;
}
