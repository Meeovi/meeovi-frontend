import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Media_thumbnail_sizeWhereInput } from "../inputs/Media_thumbnail_sizeWhereInput";

@TypeGraphQL.InputType("Media_thumbnail_sizeRelationFilter", {})
export class Media_thumbnail_sizeRelationFilter {
  @TypeGraphQL.Field(_type => Media_thumbnail_sizeWhereInput, {
    nullable: true
  })
  is?: Media_thumbnail_sizeWhereInput | undefined;

  @TypeGraphQL.Field(_type => Media_thumbnail_sizeWhereInput, {
    nullable: true
  })
  isNot?: Media_thumbnail_sizeWhereInput | undefined;
}
