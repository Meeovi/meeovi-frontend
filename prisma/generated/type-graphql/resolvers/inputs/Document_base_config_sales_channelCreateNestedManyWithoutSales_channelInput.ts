import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Document_base_config_sales_channelCreateManySales_channelInputEnvelope } from "../inputs/Document_base_config_sales_channelCreateManySales_channelInputEnvelope";
import { Document_base_config_sales_channelCreateOrConnectWithoutSales_channelInput } from "../inputs/Document_base_config_sales_channelCreateOrConnectWithoutSales_channelInput";
import { Document_base_config_sales_channelCreateWithoutSales_channelInput } from "../inputs/Document_base_config_sales_channelCreateWithoutSales_channelInput";
import { Document_base_config_sales_channelWhereUniqueInput } from "../inputs/Document_base_config_sales_channelWhereUniqueInput";

@TypeGraphQL.InputType("Document_base_config_sales_channelCreateNestedManyWithoutSales_channelInput", {})
export class Document_base_config_sales_channelCreateNestedManyWithoutSales_channelInput {
  @TypeGraphQL.Field(_type => [Document_base_config_sales_channelCreateWithoutSales_channelInput], {
    nullable: true
  })
  create?: Document_base_config_sales_channelCreateWithoutSales_channelInput[] | undefined;

  @TypeGraphQL.Field(_type => [Document_base_config_sales_channelCreateOrConnectWithoutSales_channelInput], {
    nullable: true
  })
  connectOrCreate?: Document_base_config_sales_channelCreateOrConnectWithoutSales_channelInput[] | undefined;

  @TypeGraphQL.Field(_type => Document_base_config_sales_channelCreateManySales_channelInputEnvelope, {
    nullable: true
  })
  createMany?: Document_base_config_sales_channelCreateManySales_channelInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Document_base_config_sales_channelWhereUniqueInput], {
    nullable: true
  })
  connect?: Document_base_config_sales_channelWhereUniqueInput[] | undefined;
}
