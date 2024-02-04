import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Document_type_translationScalarWhereInput } from "../inputs/Document_type_translationScalarWhereInput";
import { Document_type_translationUpdateManyMutationInput } from "../inputs/Document_type_translationUpdateManyMutationInput";

@TypeGraphQL.InputType("Document_type_translationUpdateManyWithWhereWithoutLanguageInput", {})
export class Document_type_translationUpdateManyWithWhereWithoutLanguageInput {
  @TypeGraphQL.Field(_type => Document_type_translationScalarWhereInput, {
    nullable: false
  })
  where!: Document_type_translationScalarWhereInput;

  @TypeGraphQL.Field(_type => Document_type_translationUpdateManyMutationInput, {
    nullable: false
  })
  data!: Document_type_translationUpdateManyMutationInput;
}
