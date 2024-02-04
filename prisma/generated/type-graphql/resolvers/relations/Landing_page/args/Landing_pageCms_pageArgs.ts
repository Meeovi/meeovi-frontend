import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Cms_pageWhereInput } from "../../../inputs/Cms_pageWhereInput";

@TypeGraphQL.ArgsType()
export class Landing_pageCms_pageArgs {
  @TypeGraphQL.Field(_type => Cms_pageWhereInput, {
    nullable: true
  })
  where?: Cms_pageWhereInput | undefined;
}
