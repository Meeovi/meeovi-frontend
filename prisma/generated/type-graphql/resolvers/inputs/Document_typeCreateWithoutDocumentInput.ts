import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Document_base_configCreateNestedManyWithoutDocument_typeInput } from "../inputs/Document_base_configCreateNestedManyWithoutDocument_typeInput";
import { Document_base_config_sales_channelCreateNestedManyWithoutDocument_typeInput } from "../inputs/Document_base_config_sales_channelCreateNestedManyWithoutDocument_typeInput";
import { Document_type_translationCreateNestedManyWithoutDocument_typeInput } from "../inputs/Document_type_translationCreateNestedManyWithoutDocument_typeInput";

@TypeGraphQL.InputType("Document_typeCreateWithoutDocumentInput", {})
export class Document_typeCreateWithoutDocumentInput {
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

  @TypeGraphQL.Field(_type => Document_base_configCreateNestedManyWithoutDocument_typeInput, {
    nullable: true
  })
  document_base_config?: Document_base_configCreateNestedManyWithoutDocument_typeInput | undefined;

  @TypeGraphQL.Field(_type => Document_base_config_sales_channelCreateNestedManyWithoutDocument_typeInput, {
    nullable: true
  })
  document_base_config_sales_channel?: Document_base_config_sales_channelCreateNestedManyWithoutDocument_typeInput | undefined;

  @TypeGraphQL.Field(_type => Document_type_translationCreateNestedManyWithoutDocument_typeInput, {
    nullable: true
  })
  document_type_translation?: Document_type_translationCreateNestedManyWithoutDocument_typeInput | undefined;
}
