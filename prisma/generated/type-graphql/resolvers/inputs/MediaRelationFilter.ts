import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaWhereInput } from "../inputs/MediaWhereInput";

@TypeGraphQL.InputType("MediaRelationFilter", {})
export class MediaRelationFilter {
  @TypeGraphQL.Field(_type => MediaWhereInput, {
    nullable: true
  })
  is?: MediaWhereInput | undefined;

  @TypeGraphQL.Field(_type => MediaWhereInput, {
    nullable: true
  })
  isNot?: MediaWhereInput | undefined;
}
