import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Document_base_configWhereInput } from "../inputs/Document_base_configWhereInput";

@TypeGraphQL.InputType("Document_base_configListRelationFilter", {})
export class Document_base_configListRelationFilter {
  @TypeGraphQL.Field(_type => Document_base_configWhereInput, {
    nullable: true
  })
  every?: Document_base_configWhereInput | undefined;

  @TypeGraphQL.Field(_type => Document_base_configWhereInput, {
    nullable: true
  })
  some?: Document_base_configWhereInput | undefined;

  @TypeGraphQL.Field(_type => Document_base_configWhereInput, {
    nullable: true
  })
  none?: Document_base_configWhereInput | undefined;
}
