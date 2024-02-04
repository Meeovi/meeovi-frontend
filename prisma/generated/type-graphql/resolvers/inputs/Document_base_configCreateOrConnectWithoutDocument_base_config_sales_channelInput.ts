import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Document_base_configCreateWithoutDocument_base_config_sales_channelInput } from "../inputs/Document_base_configCreateWithoutDocument_base_config_sales_channelInput";
import { Document_base_configWhereUniqueInput } from "../inputs/Document_base_configWhereUniqueInput";

@TypeGraphQL.InputType("Document_base_configCreateOrConnectWithoutDocument_base_config_sales_channelInput", {})
export class Document_base_configCreateOrConnectWithoutDocument_base_config_sales_channelInput {
  @TypeGraphQL.Field(_type => Document_base_configWhereUniqueInput, {
    nullable: false
  })
  where!: Document_base_configWhereUniqueInput;

  @TypeGraphQL.Field(_type => Document_base_configCreateWithoutDocument_base_config_sales_channelInput, {
    nullable: false
  })
  create!: Document_base_configCreateWithoutDocument_base_config_sales_channelInput;
}
