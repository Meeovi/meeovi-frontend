import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Cms_blockWhereUniqueInput } from "../../../inputs/Cms_blockWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueCms_blockArgs {
  @TypeGraphQL.Field(_type => Cms_blockWhereUniqueInput, {
    nullable: false
  })
  where!: Cms_blockWhereUniqueInput;
}
