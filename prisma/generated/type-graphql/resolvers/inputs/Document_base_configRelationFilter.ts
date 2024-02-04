import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Document_base_configWhereInput } from "../inputs/Document_base_configWhereInput";

@TypeGraphQL.InputType("Document_base_configRelationFilter", {})
export class Document_base_configRelationFilter {
  @TypeGraphQL.Field(_type => Document_base_configWhereInput, {
    nullable: true
  })
  is?: Document_base_configWhereInput | undefined;

  @TypeGraphQL.Field(_type => Document_base_configWhereInput, {
    nullable: true
  })
  isNot?: Document_base_configWhereInput | undefined;
}
