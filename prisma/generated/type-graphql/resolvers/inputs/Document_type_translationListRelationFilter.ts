import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Document_type_translationWhereInput } from "../inputs/Document_type_translationWhereInput";

@TypeGraphQL.InputType("Document_type_translationListRelationFilter", {})
export class Document_type_translationListRelationFilter {
  @TypeGraphQL.Field(_type => Document_type_translationWhereInput, {
    nullable: true
  })
  every?: Document_type_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => Document_type_translationWhereInput, {
    nullable: true
  })
  some?: Document_type_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => Document_type_translationWhereInput, {
    nullable: true
  })
  none?: Document_type_translationWhereInput | undefined;
}
