import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Media_tagWhereInput } from "../inputs/Media_tagWhereInput";

@TypeGraphQL.InputType("Media_tagListRelationFilter", {})
export class Media_tagListRelationFilter {
  @TypeGraphQL.Field(_type => Media_tagWhereInput, {
    nullable: true
  })
  every?: Media_tagWhereInput | undefined;

  @TypeGraphQL.Field(_type => Media_tagWhereInput, {
    nullable: true
  })
  some?: Media_tagWhereInput | undefined;

  @TypeGraphQL.Field(_type => Media_tagWhereInput, {
    nullable: true
  })
  none?: Media_tagWhereInput | undefined;
}
