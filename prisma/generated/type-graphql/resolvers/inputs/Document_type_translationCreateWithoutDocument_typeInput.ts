import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateNestedOneWithoutDocument_type_translationInput } from "../inputs/LanguageCreateNestedOneWithoutDocument_type_translationInput";

@TypeGraphQL.InputType("Document_type_translationCreateWithoutDocument_typeInput", {})
export class Document_type_translationCreateWithoutDocument_typeInput {
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

  @TypeGraphQL.Field(_type => LanguageCreateNestedOneWithoutDocument_type_translationInput, {
    nullable: false
  })
  language!: LanguageCreateNestedOneWithoutDocument_type_translationInput;
}
