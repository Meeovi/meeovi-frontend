import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Cms_pageWhereUniqueInput } from "../../../inputs/Cms_pageWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneCms_pageArgs {
  @TypeGraphQL.Field(_type => Cms_pageWhereUniqueInput, {
    nullable: false
  })
  where!: Cms_pageWhereUniqueInput;
}
