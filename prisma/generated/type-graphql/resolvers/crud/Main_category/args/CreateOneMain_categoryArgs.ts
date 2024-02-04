import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Main_categoryCreateInput } from "../../../inputs/Main_categoryCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneMain_categoryArgs {
  @TypeGraphQL.Field(_type => Main_categoryCreateInput, {
    nullable: false
  })
  data!: Main_categoryCreateInput;
}
