import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Document_type_translationCreateWithoutLanguageInput } from "../inputs/Document_type_translationCreateWithoutLanguageInput";
import { Document_type_translationWhereUniqueInput } from "../inputs/Document_type_translationWhereUniqueInput";

@TypeGraphQL.InputType("Document_type_translationCreateOrConnectWithoutLanguageInput", {})
export class Document_type_translationCreateOrConnectWithoutLanguageInput {
  @TypeGraphQL.Field(_type => Document_type_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Document_type_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Document_type_translationCreateWithoutLanguageInput, {
    nullable: false
  })
  create!: Document_type_translationCreateWithoutLanguageInput;
}
