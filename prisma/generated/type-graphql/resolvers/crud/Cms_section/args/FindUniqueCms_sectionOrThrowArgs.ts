import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Cms_sectionWhereUniqueInput } from "../../../inputs/Cms_sectionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueCms_sectionOrThrowArgs {
  @TypeGraphQL.Field(_type => Cms_sectionWhereUniqueInput, {
    nullable: false
  })
  where!: Cms_sectionWhereUniqueInput;
}
