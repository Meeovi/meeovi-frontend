import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Document_base_config_sales_channelCreateManyDocument_base_configInputEnvelope } from "../inputs/Document_base_config_sales_channelCreateManyDocument_base_configInputEnvelope";
import { Document_base_config_sales_channelCreateOrConnectWithoutDocument_base_configInput } from "../inputs/Document_base_config_sales_channelCreateOrConnectWithoutDocument_base_configInput";
import { Document_base_config_sales_channelCreateWithoutDocument_base_configInput } from "../inputs/Document_base_config_sales_channelCreateWithoutDocument_base_configInput";
import { Document_base_config_sales_channelWhereUniqueInput } from "../inputs/Document_base_config_sales_channelWhereUniqueInput";

@TypeGraphQL.InputType("Document_base_config_sales_channelCreateNestedManyWithoutDocument_base_configInput", {})
export class Document_base_config_sales_channelCreateNestedManyWithoutDocument_base_configInput {
  @TypeGraphQL.Field(_type => [Document_base_config_sales_channelCreateWithoutDocument_base_configInput], {
    nullable: true
  })
  create?: Document_base_config_sales_channelCreateWithoutDocument_base_configInput[] | undefined;

  @TypeGraphQL.Field(_type => [Document_base_config_sales_channelCreateOrConnectWithoutDocument_base_configInput], {
    nullable: true
  })
  connectOrCreate?: Document_base_config_sales_channelCreateOrConnectWithoutDocument_base_configInput[] | undefined;

  @TypeGraphQL.Field(_type => Document_base_config_sales_channelCreateManyDocument_base_configInputEnvelope, {
    nullable: true
  })
  createMany?: Document_base_config_sales_channelCreateManyDocument_base_configInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Document_base_config_sales_channelWhereUniqueInput], {
    nullable: true
  })
  connect?: Document_base_config_sales_channelWhereUniqueInput[] | undefined;
}
