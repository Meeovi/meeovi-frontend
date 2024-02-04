import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Document_typeWhereInput } from "../inputs/Document_typeWhereInput";

@TypeGraphQL.InputType("Document_typeRelationFilter", {})
export class Document_typeRelationFilter {
  @TypeGraphQL.Field(_type => Document_typeWhereInput, {
    nullable: true
  })
  is?: Document_typeWhereInput | undefined;

  @TypeGraphQL.Field(_type => Document_typeWhereInput, {
    nullable: true
  })
  isNot?: Document_typeWhereInput | undefined;
}
