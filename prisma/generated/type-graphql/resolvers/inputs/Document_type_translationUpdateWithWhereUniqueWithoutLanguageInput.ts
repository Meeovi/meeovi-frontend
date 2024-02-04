import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Document_type_translationUpdateWithoutLanguageInput } from "../inputs/Document_type_translationUpdateWithoutLanguageInput";
import { Document_type_translationWhereUniqueInput } from "../inputs/Document_type_translationWhereUniqueInput";

@TypeGraphQL.InputType("Document_type_translationUpdateWithWhereUniqueWithoutLanguageInput", {})
export class Document_type_translationUpdateWithWhereUniqueWithoutLanguageInput {
  @TypeGraphQL.Field(_type => Document_type_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Document_type_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Document_type_translationUpdateWithoutLanguageInput, {
    nullable: false
  })
  data!: Document_type_translationUpdateWithoutLanguageInput;
}
