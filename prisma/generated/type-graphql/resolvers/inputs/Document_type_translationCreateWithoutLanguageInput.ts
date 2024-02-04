import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Document_typeCreateNestedOneWithoutDocument_type_translationInput } from "../inputs/Document_typeCreateNestedOneWithoutDocument_type_translationInput";

@TypeGraphQL.InputType("Document_type_translationCreateWithoutLanguageInput", {})
export class Document_type_translationCreateWithoutLanguageInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

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

  @TypeGraphQL.Field(_type => Document_typeCreateNestedOneWithoutDocument_type_translationInput, {
    nullable: false
  })
  document_type!: Document_typeCreateNestedOneWithoutDocument_type_translationInput;
}
