import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DocumentCreateNestedManyWithoutDocumentInput } from "../inputs/DocumentCreateNestedManyWithoutDocumentInput";
import { DocumentCreateNestedOneWithoutOther_documentInput } from "../inputs/DocumentCreateNestedOneWithoutOther_documentInput";
import { Document_typeCreateNestedOneWithoutDocumentInput } from "../inputs/Document_typeCreateNestedOneWithoutDocumentInput";
import { MediaCreateNestedOneWithoutDocumentInput } from "../inputs/MediaCreateNestedOneWithoutDocumentInput";
import { OrderCreateNestedOneWithoutDocumentInput } from "../inputs/OrderCreateNestedOneWithoutDocumentInput";

@TypeGraphQL.InputType("DocumentCreateInput", {})
export class DocumentCreateInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  file_type!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  config?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  sent?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  static?: boolean | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  deep_link_code!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  custom_fields?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  document_number?: string | undefined;

  @TypeGraphQL.Field(_type => MediaCreateNestedOneWithoutDocumentInput, {
    nullable: true
  })
  media?: MediaCreateNestedOneWithoutDocumentInput | undefined;

  @TypeGraphQL.Field(_type => Document_typeCreateNestedOneWithoutDocumentInput, {
    nullable: false
  })
  document_type!: Document_typeCreateNestedOneWithoutDocumentInput;

  @TypeGraphQL.Field(_type => OrderCreateNestedOneWithoutDocumentInput, {
    nullable: false
  })
  order!: OrderCreateNestedOneWithoutDocumentInput;

  @TypeGraphQL.Field(_type => DocumentCreateNestedOneWithoutOther_documentInput, {
    nullable: true
  })
  document?: DocumentCreateNestedOneWithoutOther_documentInput | undefined;

  @TypeGraphQL.Field(_type => DocumentCreateNestedManyWithoutDocumentInput, {
    nullable: true
  })
  other_document?: DocumentCreateNestedManyWithoutDocumentInput | undefined;
}
