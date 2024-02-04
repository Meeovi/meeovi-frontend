import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Document_base_config_sales_channelCreateWithoutDocument_base_configInput } from "../inputs/Document_base_config_sales_channelCreateWithoutDocument_base_configInput";
import { Document_base_config_sales_channelUpdateWithoutDocument_base_configInput } from "../inputs/Document_base_config_sales_channelUpdateWithoutDocument_base_configInput";
import { Document_base_config_sales_channelWhereUniqueInput } from "../inputs/Document_base_config_sales_channelWhereUniqueInput";

@TypeGraphQL.InputType("Document_base_config_sales_channelUpsertWithWhereUniqueWithoutDocument_base_configInput", {})
export class Document_base_config_sales_channelUpsertWithWhereUniqueWithoutDocument_base_configInput {
  @TypeGraphQL.Field(_type => Document_base_config_sales_channelWhereUniqueInput, {
    nullable: false
  })
  where!: Document_base_config_sales_channelWhereUniqueInput;

  @TypeGraphQL.Field(_type => Document_base_config_sales_channelUpdateWithoutDocument_base_configInput, {
    nullable: false
  })
  update!: Document_base_config_sales_channelUpdateWithoutDocument_base_configInput;

  @TypeGraphQL.Field(_type => Document_base_config_sales_channelCreateWithoutDocument_base_configInput, {
    nullable: false
  })
  create!: Document_base_config_sales_channelCreateWithoutDocument_base_configInput;
}
