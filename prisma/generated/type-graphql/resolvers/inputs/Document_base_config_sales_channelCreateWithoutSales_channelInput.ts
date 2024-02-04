import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Document_base_configCreateNestedOneWithoutDocument_base_config_sales_channelInput } from "../inputs/Document_base_configCreateNestedOneWithoutDocument_base_config_sales_channelInput";
import { Document_typeCreateNestedOneWithoutDocument_base_config_sales_channelInput } from "../inputs/Document_typeCreateNestedOneWithoutDocument_base_config_sales_channelInput";

@TypeGraphQL.InputType("Document_base_config_sales_channelCreateWithoutSales_channelInput", {})
export class Document_base_config_sales_channelCreateWithoutSales_channelInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Document_base_configCreateNestedOneWithoutDocument_base_config_sales_channelInput, {
    nullable: false
  })
  document_base_config!: Document_base_configCreateNestedOneWithoutDocument_base_config_sales_channelInput;

  @TypeGraphQL.Field(_type => Document_typeCreateNestedOneWithoutDocument_base_config_sales_channelInput, {
    nullable: false
  })
  document_type!: Document_typeCreateNestedOneWithoutDocument_base_config_sales_channelInput;
}
