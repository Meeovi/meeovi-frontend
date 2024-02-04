import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Document_base_config_sales_channelCreateManyDocument_typeInputEnvelope } from "../inputs/Document_base_config_sales_channelCreateManyDocument_typeInputEnvelope";
import { Document_base_config_sales_channelCreateOrConnectWithoutDocument_typeInput } from "../inputs/Document_base_config_sales_channelCreateOrConnectWithoutDocument_typeInput";
import { Document_base_config_sales_channelCreateWithoutDocument_typeInput } from "../inputs/Document_base_config_sales_channelCreateWithoutDocument_typeInput";
import { Document_base_config_sales_channelScalarWhereInput } from "../inputs/Document_base_config_sales_channelScalarWhereInput";
import { Document_base_config_sales_channelUpdateManyWithWhereWithoutDocument_typeInput } from "../inputs/Document_base_config_sales_channelUpdateManyWithWhereWithoutDocument_typeInput";
import { Document_base_config_sales_channelUpdateWithWhereUniqueWithoutDocument_typeInput } from "../inputs/Document_base_config_sales_channelUpdateWithWhereUniqueWithoutDocument_typeInput";
import { Document_base_config_sales_channelUpsertWithWhereUniqueWithoutDocument_typeInput } from "../inputs/Document_base_config_sales_channelUpsertWithWhereUniqueWithoutDocument_typeInput";
import { Document_base_config_sales_channelWhereUniqueInput } from "../inputs/Document_base_config_sales_channelWhereUniqueInput";

@TypeGraphQL.InputType("Document_base_config_sales_channelUpdateManyWithoutDocument_typeNestedInput", {})
export class Document_base_config_sales_channelUpdateManyWithoutDocument_typeNestedInput {
  @TypeGraphQL.Field(_type => [Document_base_config_sales_channelCreateWithoutDocument_typeInput], {
    nullable: true
  })
  create?: Document_base_config_sales_channelCreateWithoutDocument_typeInput[] | undefined;

  @TypeGraphQL.Field(_type => [Document_base_config_sales_channelCreateOrConnectWithoutDocument_typeInput], {
    nullable: true
  })
  connectOrCreate?: Document_base_config_sales_channelCreateOrConnectWithoutDocument_typeInput[] | undefined;

  @TypeGraphQL.Field(_type => [Document_base_config_sales_channelUpsertWithWhereUniqueWithoutDocument_typeInput], {
    nullable: true
  })
  upsert?: Document_base_config_sales_channelUpsertWithWhereUniqueWithoutDocument_typeInput[] | undefined;

  @TypeGraphQL.Field(_type => Document_base_config_sales_channelCreateManyDocument_typeInputEnvelope, {
    nullable: true
  })
  createMany?: Document_base_config_sales_channelCreateManyDocument_typeInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [Document_base_config_sales_channelUpdateWithWhereUniqueWithoutDocument_typeInput], {
    nullable: true
  })
  update?: Document_base_config_sales_channelUpdateWithWhereUniqueWithoutDocument_typeInput[] | undefined;

  @TypeGraphQL.Field(_type => [Document_base_config_sales_channelUpdateManyWithWhereWithoutDocument_typeInput], {
    nullable: true
  })
  updateMany?: Document_base_config_sales_channelUpdateManyWithWhereWithoutDocument_typeInput[] | undefined;

  @TypeGraphQL.Field(_type => [Document_base_config_sales_channelScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Document_base_config_sales_channelScalarWhereInput[] | undefined;
}
