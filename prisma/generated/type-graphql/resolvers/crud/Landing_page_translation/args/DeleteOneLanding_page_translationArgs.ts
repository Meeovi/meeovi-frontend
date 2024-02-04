import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Landing_page_translationWhereUniqueInput } from "../../../inputs/Landing_page_translationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneLanding_page_translationArgs {
  @TypeGraphQL.Field(_type => Landing_page_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Landing_page_translationWhereUniqueInput;
}
