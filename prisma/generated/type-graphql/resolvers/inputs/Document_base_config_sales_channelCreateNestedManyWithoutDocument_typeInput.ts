import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Document_base_config_sales_channelCreateManyDocument_typeInputEnvelope } from "../inputs/Document_base_config_sales_channelCreateManyDocument_typeInputEnvelope";
import { Document_base_config_sales_channelCreateOrConnectWithoutDocument_typeInput } from "../inputs/Document_base_config_sales_channelCreateOrConnectWithoutDocument_typeInput";
import { Document_base_config_sales_channelCreateWithoutDocument_typeInput } from "../inputs/Document_base_config_sales_channelCreateWithoutDocument_typeInput";
import { Document_base_config_sales_channelWhereUniqueInput } from "../inputs/Document_base_config_sales_channelWhereUniqueInput";

@TypeGraphQL.InputType("Document_base_config_sales_channelCreateNestedManyWithoutDocument_typeInput", {})
export class Document_base_config_sales_channelCreateNestedManyWithoutDocument_typeInput {
  @TypeGraphQL.Field(_type => [Document_base_config_sales_channelCreateWithoutDocument_typeInput], {
    nullable: true
  })
  create?: Document_base_config_sales_channelCreateWithoutDocument_typeInput[] | undefined;

  @TypeGraphQL.Field(_type => [Document_base_config_sales_channelCreateOrConnectWithoutDocument_typeInput], {
    nullable: true
  })
  connectOrCreate?: Document_base_config_sales_channelCreateOrConnectWithoutDocument_typeInput[] | undefined;

  @TypeGraphQL.Field(_type => Document_base_config_sales_channelCreateManyDocument_typeInputEnvelope, {
    nullable: true
  })
  createMany?: Document_base_config_sales_channelCreateManyDocument_typeInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Document_base_config_sales_channelWhereUniqueInput], {
    nullable: true
  })
  connect?: Document_base_config_sales_channelWhereUniqueInput[] | undefined;
}
