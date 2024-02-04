import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DocumentWhereInput } from "../inputs/DocumentWhereInput";

@TypeGraphQL.InputType("DocumentListRelationFilter", {})
export class DocumentListRelationFilter {
  @TypeGraphQL.Field(_type => DocumentWhereInput, {
    nullable: true
  })
  every?: DocumentWhereInput | undefined;

  @TypeGraphQL.Field(_type => DocumentWhereInput, {
    nullable: true
  })
  some?: DocumentWhereInput | undefined;

  @TypeGraphQL.Field(_type => DocumentWhereInput, {
    nullable: true
  })
  none?: DocumentWhereInput | undefined;
}
