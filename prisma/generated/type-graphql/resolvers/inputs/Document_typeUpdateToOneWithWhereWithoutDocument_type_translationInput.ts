import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Document_typeUpdateWithoutDocument_type_translationInput } from "../inputs/Document_typeUpdateWithoutDocument_type_translationInput";
import { Document_typeWhereInput } from "../inputs/Document_typeWhereInput";

@TypeGraphQL.InputType("Document_typeUpdateToOneWithWhereWithoutDocument_type_translationInput", {})
export class Document_typeUpdateToOneWithWhereWithoutDocument_type_translationInput {
  @TypeGraphQL.Field(_type => Document_typeWhereInput, {
    nullable: true
  })
  where?: Document_typeWhereInput | undefined;

  @TypeGraphQL.Field(_type => Document_typeUpdateWithoutDocument_type_translationInput, {
    nullable: false
  })
  data!: Document_typeUpdateWithoutDocument_type_translationInput;
}
