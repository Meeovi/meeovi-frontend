import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Document_base_configCreateOrConnectWithoutDocument_base_config_sales_channelInput } from "../inputs/Document_base_configCreateOrConnectWithoutDocument_base_config_sales_channelInput";
import { Document_base_configCreateWithoutDocument_base_config_sales_channelInput } from "../inputs/Document_base_configCreateWithoutDocument_base_config_sales_channelInput";
import { Document_base_configWhereUniqueInput } from "../inputs/Document_base_configWhereUniqueInput";

@TypeGraphQL.InputType("Document_base_configCreateNestedOneWithoutDocument_base_config_sales_channelInput", {})
export class Document_base_configCreateNestedOneWithoutDocument_base_config_sales_channelInput {
  @TypeGraphQL.Field(_type => Document_base_configCreateWithoutDocument_base_config_sales_channelInput, {
    nullable: true
  })
  create?: Document_base_configCreateWithoutDocument_base_config_sales_channelInput | undefined;

  @TypeGraphQL.Field(_type => Document_base_configCreateOrConnectWithoutDocument_base_config_sales_channelInput, {
    nullable: true
  })
  connectOrCreate?: Document_base_configCreateOrConnectWithoutDocument_base_config_sales_channelInput | undefined;

  @TypeGraphQL.Field(_type => Document_base_configWhereUniqueInput, {
    nullable: true
  })
  connect?: Document_base_configWhereUniqueInput | undefined;
}
