import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Document_typeCreateWithoutDocument_type_translationInput } from "../inputs/Document_typeCreateWithoutDocument_type_translationInput";
import { Document_typeWhereUniqueInput } from "../inputs/Document_typeWhereUniqueInput";

@TypeGraphQL.InputType("Document_typeCreateOrConnectWithoutDocument_type_translationInput", {})
export class Document_typeCreateOrConnectWithoutDocument_type_translationInput {
  @TypeGraphQL.Field(_type => Document_typeWhereUniqueInput, {
    nullable: false
  })
  where!: Document_typeWhereUniqueInput;

  @TypeGraphQL.Field(_type => Document_typeCreateWithoutDocument_type_translationInput, {
    nullable: false
  })
  create!: Document_typeCreateWithoutDocument_type_translationInput;
}
