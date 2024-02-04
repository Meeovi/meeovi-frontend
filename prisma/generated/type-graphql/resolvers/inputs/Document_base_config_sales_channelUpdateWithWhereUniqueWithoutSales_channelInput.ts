import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Document_base_config_sales_channelUpdateWithoutSales_channelInput } from "../inputs/Document_base_config_sales_channelUpdateWithoutSales_channelInput";
import { Document_base_config_sales_channelWhereUniqueInput } from "../inputs/Document_base_config_sales_channelWhereUniqueInput";

@TypeGraphQL.InputType("Document_base_config_sales_channelUpdateWithWhereUniqueWithoutSales_channelInput", {})
export class Document_base_config_sales_channelUpdateWithWhereUniqueWithoutSales_channelInput {
  @TypeGraphQL.Field(_type => Document_base_config_sales_channelWhereUniqueInput, {
    nullable: false
  })
  where!: Document_base_config_sales_channelWhereUniqueInput;

  @TypeGraphQL.Field(_type => Document_base_config_sales_channelUpdateWithoutSales_channelInput, {
    nullable: false
  })
  data!: Document_base_config_sales_channelUpdateWithoutSales_channelInput;
}
