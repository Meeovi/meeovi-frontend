import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Document_base_config_sales_channelWhereInput } from "../inputs/Document_base_config_sales_channelWhereInput";

@TypeGraphQL.InputType("Document_base_config_sales_channelListRelationFilter", {})
export class Document_base_config_sales_channelListRelationFilter {
  @TypeGraphQL.Field(_type => Document_base_config_sales_channelWhereInput, {
    nullable: true
  })
  every?: Document_base_config_sales_channelWhereInput | undefined;

  @TypeGraphQL.Field(_type => Document_base_config_sales_channelWhereInput, {
    nullable: true
  })
  some?: Document_base_config_sales_channelWhereInput | undefined;

  @TypeGraphQL.Field(_type => Document_base_config_sales_channelWhereInput, {
    nullable: true
  })
  none?: Document_base_config_sales_channelWhereInput | undefined;
}
