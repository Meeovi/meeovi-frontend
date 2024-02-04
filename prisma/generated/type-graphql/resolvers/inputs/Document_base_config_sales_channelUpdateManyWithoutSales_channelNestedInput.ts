import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Document_base_config_sales_channelCreateManySales_channelInputEnvelope } from "../inputs/Document_base_config_sales_channelCreateManySales_channelInputEnvelope";
import { Document_base_config_sales_channelCreateOrConnectWithoutSales_channelInput } from "../inputs/Document_base_config_sales_channelCreateOrConnectWithoutSales_channelInput";
import { Document_base_config_sales_channelCreateWithoutSales_channelInput } from "../inputs/Document_base_config_sales_channelCreateWithoutSales_channelInput";
import { Document_base_config_sales_channelScalarWhereInput } from "../inputs/Document_base_config_sales_channelScalarWhereInput";
import { Document_base_config_sales_channelUpdateManyWithWhereWithoutSales_channelInput } from "../inputs/Document_base_config_sales_channelUpdateManyWithWhereWithoutSales_channelInput";
import { Document_base_config_sales_channelUpdateWithWhereUniqueWithoutSales_channelInput } from "../inputs/Document_base_config_sales_channelUpdateWithWhereUniqueWithoutSales_channelInput";
import { Document_base_config_sales_channelUpsertWithWhereUniqueWithoutSales_channelInput } from "../inputs/Document_base_config_sales_channelUpsertWithWhereUniqueWithoutSales_channelInput";
import { Document_base_config_sales_channelWhereUniqueInput } from "../inputs/Document_base_config_sales_channelWhereUniqueInput";

@TypeGraphQL.InputType("Document_base_config_sales_channelUpdateManyWithoutSales_channelNestedInput", {})
export class Document_base_config_sales_channelUpdateManyWithoutSales_channelNestedInput {
  @TypeGraphQL.Field(_type => [Document_base_config_sales_channelCreateWithoutSales_channelInput], {
    nullable: true
  })
  create?: Document_base_config_sales_channelCreateWithoutSales_channelInput[] | undefined;

  @TypeGraphQL.Field(_type => [Document_base_config_sales_channelCreateOrConnectWithoutSales_channelInput], {
    nullable: true
  })
  connectOrCreate?: Document_base_config_sales_channelCreateOrConnectWithoutSales_channelInput[] | undefined;

  @TypeGraphQL.Field(_type => [Document_base_config_sales_channelUpsertWithWhereUniqueWithoutSales_channelInput], {
    nullable: true
  })
  upsert?: Document_base_config_sales_channelUpsertWithWhereUniqueWithoutSales_channelInput[] | undefined;

  @TypeGraphQL.Field(_type => Document_base_config_sales_channelCreateManySales_channelInputEnvelope, {
    nullable: true
  })
  createMany?: Document_base_config_sales_channelCreateManySales_channelInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [Document_base_config_sales_channelUpdateWithWhereUniqueWithoutSales_channelInput], {
    nullable: true
  })
  update?: Document_base_config_sales_channelUpdateWithWhereUniqueWithoutSales_channelInput[] | undefined;

  @TypeGraphQL.Field(_type => [Document_base_config_sales_channelUpdateManyWithWhereWithoutSales_channelInput], {
    nullable: true
  })
  updateMany?: Document_base_config_sales_channelUpdateManyWithWhereWithoutSales_channelInput[] | undefined;

  @TypeGraphQL.Field(_type => [Document_base_config_sales_channelScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Document_base_config_sales_channelScalarWhereInput[] | undefined;
}
