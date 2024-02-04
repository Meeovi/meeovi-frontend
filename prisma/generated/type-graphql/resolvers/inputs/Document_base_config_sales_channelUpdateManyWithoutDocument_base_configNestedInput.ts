import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Document_base_config_sales_channelCreateManyDocument_base_configInputEnvelope } from "../inputs/Document_base_config_sales_channelCreateManyDocument_base_configInputEnvelope";
import { Document_base_config_sales_channelCreateOrConnectWithoutDocument_base_configInput } from "../inputs/Document_base_config_sales_channelCreateOrConnectWithoutDocument_base_configInput";
import { Document_base_config_sales_channelCreateWithoutDocument_base_configInput } from "../inputs/Document_base_config_sales_channelCreateWithoutDocument_base_configInput";
import { Document_base_config_sales_channelScalarWhereInput } from "../inputs/Document_base_config_sales_channelScalarWhereInput";
import { Document_base_config_sales_channelUpdateManyWithWhereWithoutDocument_base_configInput } from "../inputs/Document_base_config_sales_channelUpdateManyWithWhereWithoutDocument_base_configInput";
import { Document_base_config_sales_channelUpdateWithWhereUniqueWithoutDocument_base_configInput } from "../inputs/Document_base_config_sales_channelUpdateWithWhereUniqueWithoutDocument_base_configInput";
import { Document_base_config_sales_channelUpsertWithWhereUniqueWithoutDocument_base_configInput } from "../inputs/Document_base_config_sales_channelUpsertWithWhereUniqueWithoutDocument_base_configInput";
import { Document_base_config_sales_channelWhereUniqueInput } from "../inputs/Document_base_config_sales_channelWhereUniqueInput";

@TypeGraphQL.InputType("Document_base_config_sales_channelUpdateManyWithoutDocument_base_configNestedInput", {})
export class Document_base_config_sales_channelUpdateManyWithoutDocument_base_configNestedInput {
  @TypeGraphQL.Field(_type => [Document_base_config_sales_channelCreateWithoutDocument_base_configInput], {
    nullable: true
  })
  create?: Document_base_config_sales_channelCreateWithoutDocument_base_configInput[] | undefined;

  @TypeGraphQL.Field(_type => [Document_base_config_sales_channelCreateOrConnectWithoutDocument_base_configInput], {
    nullable: true
  })
  connectOrCreate?: Document_base_config_sales_channelCreateOrConnectWithoutDocument_base_configInput[] | undefined;

  @TypeGraphQL.Field(_type => [Document_base_config_sales_channelUpsertWithWhereUniqueWithoutDocument_base_configInput], {
    nullable: true
  })
  upsert?: Document_base_config_sales_channelUpsertWithWhereUniqueWithoutDocument_base_configInput[] | undefined;

  @TypeGraphQL.Field(_type => Document_base_config_sales_channelCreateManyDocument_base_configInputEnvelope, {
    nullable: true
  })
  createMany?: Document_base_config_sales_channelCreateManyDocument_base_configInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Document_base_config_sales_channelWhereUniqueInput], {
    nullable: true
  })
  set?: Document_base_config_sales_channelWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Document_base_config_sales_channelWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Document_base_config_sales_channelWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Document_base_config_sales_channelWhereUniqueInput], {
    nullable: true
  })
  delete?: Document_base_config_sales_channelWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Document_base_config_sales_channelWhereUniqueInput], {
    nullable: true
  })
  connect?: Document_base_config_sales_channelWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Document_base_config_sales_channelUpdateWithWhereUniqueWithoutDocument_base_configInput], {
    nullable: true
  })
  update?: Document_base_config_sales_channelUpdateWithWhereUniqueWithoutDocument_base_configInput[] | undefined;

  @TypeGraphQL.Field(_type => [Document_base_config_sales_channelUpdateManyWithWhereWithoutDocument_base_configInput], {
    nullable: true
  })
  updateMany?: Document_base_config_sales_channelUpdateManyWithWhereWithoutDocument_base_configInput[] | undefined;

  @TypeGraphQL.Field(_type => [Document_base_config_sales_channelScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Document_base_config_sales_channelScalarWhereInput[] | undefined;
}
