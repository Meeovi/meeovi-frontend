import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Media_thumbnailWhereInput } from "../inputs/Media_thumbnailWhereInput";

@TypeGraphQL.InputType("Media_thumbnailListRelationFilter", {})
export class Media_thumbnailListRelationFilter {
  @TypeGraphQL.Field(_type => Media_thumbnailWhereInput, {
    nullable: true
  })
  every?: Media_thumbnailWhereInput | undefined;

  @TypeGraphQL.Field(_type => Media_thumbnailWhereInput, {
    nullable: true
  })
  some?: Media_thumbnailWhereInput | undefined;

  @TypeGraphQL.Field(_type => Media_thumbnailWhereInput, {
    nullable: true
  })
  none?: Media_thumbnailWhereInput | undefined;
}
