import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Document_base_config_sales_channelCreateWithoutSales_channelInput } from "../inputs/Document_base_config_sales_channelCreateWithoutSales_channelInput";
import { Document_base_config_sales_channelWhereUniqueInput } from "../inputs/Document_base_config_sales_channelWhereUniqueInput";

@TypeGraphQL.InputType("Document_base_config_sales_channelCreateOrConnectWithoutSales_channelInput", {})
export class Document_base_config_sales_channelCreateOrConnectWithoutSales_channelInput {
  @TypeGraphQL.Field(_type => Document_base_config_sales_channelWhereUniqueInput, {
    nullable: false
  })
  where!: Document_base_config_sales_channelWhereUniqueInput;

  @TypeGraphQL.Field(_type => Document_base_config_sales_channelCreateWithoutSales_channelInput, {
    nullable: false
  })
  create!: Document_base_config_sales_channelCreateWithoutSales_channelInput;
}
