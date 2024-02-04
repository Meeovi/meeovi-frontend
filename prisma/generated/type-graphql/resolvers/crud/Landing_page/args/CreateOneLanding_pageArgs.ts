import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Landing_pageCreateInput } from "../../../inputs/Landing_pageCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneLanding_pageArgs {
  @TypeGraphQL.Field(_type => Landing_pageCreateInput, {
    nullable: false
  })
  data!: Landing_pageCreateInput;
}
