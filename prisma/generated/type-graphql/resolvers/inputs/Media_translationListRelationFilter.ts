import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Media_translationWhereInput } from "../inputs/Media_translationWhereInput";

@TypeGraphQL.InputType("Media_translationListRelationFilter", {})
export class Media_translationListRelationFilter {
  @TypeGraphQL.Field(_type => Media_translationWhereInput, {
    nullable: true
  })
  every?: Media_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => Media_translationWhereInput, {
    nullable: true
  })
  some?: Media_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => Media_translationWhereInput, {
    nullable: true
  })
  none?: Media_translationWhereInput | undefined;
}
