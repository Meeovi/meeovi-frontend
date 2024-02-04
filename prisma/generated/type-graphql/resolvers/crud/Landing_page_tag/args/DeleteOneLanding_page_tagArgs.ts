import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Landing_page_tagWhereUniqueInput } from "../../../inputs/Landing_page_tagWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneLanding_page_tagArgs {
  @TypeGraphQL.Field(_type => Landing_page_tagWhereUniqueInput, {
    nullable: false
  })
  where!: Landing_page_tagWhereUniqueInput;
}
