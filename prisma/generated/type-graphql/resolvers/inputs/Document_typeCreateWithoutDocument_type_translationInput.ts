import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DocumentCreateNestedManyWithoutDocument_typeInput } from "../inputs/DocumentCreateNestedManyWithoutDocument_typeInput";
import { Document_base_configCreateNestedManyWithoutDocument_typeInput } from "../inputs/Document_base_configCreateNestedManyWithoutDocument_typeInput";
import { Document_base_config_sales_channelCreateNestedManyWithoutDocument_typeInput } from "../inputs/Document_base_config_sales_channelCreateNestedManyWithoutDocument_typeInput";

@TypeGraphQL.InputType("Document_typeCreateWithoutDocument_type_translationInput", {})
export class Document_typeCreateWithoutDocument_type_translationInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  technical_name!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => DocumentCreateNestedManyWithoutDocument_typeInput, {
    nullable: true
  })
  document?: DocumentCreateNestedManyWithoutDocument_typeInput | undefined;

  @TypeGraphQL.Field(_type => Document_base_configCreateNestedManyWithoutDocument_typeInput, {
    nullable: true
  })
  document_base_config?: Document_base_configCreateNestedManyWithoutDocument_typeInput | undefined;

  @TypeGraphQL.Field(_type => Document_base_config_sales_channelCreateNestedManyWithoutDocument_typeInput, {
    nullable: true
  })
  document_base_config_sales_channel?: Document_base_config_sales_channelCreateNestedManyWithoutDocument_typeInput | undefined;
}
