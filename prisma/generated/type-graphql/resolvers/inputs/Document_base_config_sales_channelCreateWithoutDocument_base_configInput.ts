import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Document_typeCreateNestedOneWithoutDocument_base_config_sales_channelInput } from "../inputs/Document_typeCreateNestedOneWithoutDocument_base_config_sales_channelInput";
import { Sales_channelCreateNestedOneWithoutDocument_base_config_sales_channelInput } from "../inputs/Sales_channelCreateNestedOneWithoutDocument_base_config_sales_channelInput";

@TypeGraphQL.InputType("Document_base_config_sales_channelCreateWithoutDocument_base_configInput", {})
export class Document_base_config_sales_channelCreateWithoutDocument_base_configInput {
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

  @TypeGraphQL.Field(_type => Document_typeCreateNestedOneWithoutDocument_base_config_sales_channelInput, {
    nullable: false
  })
  document_type!: Document_typeCreateNestedOneWithoutDocument_base_config_sales_channelInput;

  @TypeGraphQL.Field(_type => Sales_channelCreateNestedOneWithoutDocument_base_config_sales_channelInput, {
    nullable: true
  })
  sales_channel?: Sales_channelCreateNestedOneWithoutDocument_base_config_sales_channelInput | undefined;
}
