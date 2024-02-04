import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DocumentCreateNestedManyWithoutDocument_typeInput } from "../inputs/DocumentCreateNestedManyWithoutDocument_typeInput";
import { Document_base_config_sales_channelCreateNestedManyWithoutDocument_typeInput } from "../inputs/Document_base_config_sales_channelCreateNestedManyWithoutDocument_typeInput";
import { Document_type_translationCreateNestedManyWithoutDocument_typeInput } from "../inputs/Document_type_translationCreateNestedManyWithoutDocument_typeInput";

@TypeGraphQL.InputType("Document_typeCreateWithoutDocument_base_configInput", {})
export class Document_typeCreateWithoutDocument_base_configInput {
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

  @TypeGraphQL.Field(_type => Document_base_config_sales_channelCreateNestedManyWithoutDocument_typeInput, {
    nullable: true
  })
  document_base_config_sales_channel?: Document_base_config_sales_channelCreateNestedManyWithoutDocument_typeInput | undefined;

  @TypeGraphQL.Field(_type => Document_type_translationCreateNestedManyWithoutDocument_typeInput, {
    nullable: true
  })
  document_type_translation?: Document_type_translationCreateNestedManyWithoutDocument_typeInput | undefined;
}
