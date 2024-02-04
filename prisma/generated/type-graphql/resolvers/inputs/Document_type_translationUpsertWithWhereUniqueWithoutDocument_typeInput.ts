import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Document_type_translationCreateWithoutDocument_typeInput } from "../inputs/Document_type_translationCreateWithoutDocument_typeInput";
import { Document_type_translationUpdateWithoutDocument_typeInput } from "../inputs/Document_type_translationUpdateWithoutDocument_typeInput";
import { Document_type_translationWhereUniqueInput } from "../inputs/Document_type_translationWhereUniqueInput";

@TypeGraphQL.InputType("Document_type_translationUpsertWithWhereUniqueWithoutDocument_typeInput", {})
export class Document_type_translationUpsertWithWhereUniqueWithoutDocument_typeInput {
  @TypeGraphQL.Field(_type => Document_type_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Document_type_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Document_type_translationUpdateWithoutDocument_typeInput, {
    nullable: false
  })
  update!: Document_type_translationUpdateWithoutDocument_typeInput;

  @TypeGraphQL.Field(_type => Document_type_translationCreateWithoutDocument_typeInput, {
    nullable: false
  })
  create!: Document_type_translationCreateWithoutDocument_typeInput;
}
