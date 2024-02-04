import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DocumentWhereInput } from "../inputs/DocumentWhereInput";

@TypeGraphQL.InputType("DocumentNullableRelationFilter", {})
export class DocumentNullableRelationFilter {
  @TypeGraphQL.Field(_type => DocumentWhereInput, {
    nullable: true
  })
  is?: DocumentWhereInput | undefined;

  @TypeGraphQL.Field(_type => DocumentWhereInput, {
    nullable: true
  })
  isNot?: DocumentWhereInput | undefined;
}
