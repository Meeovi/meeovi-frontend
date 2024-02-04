import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Dead_messageCreateInput } from "../../../inputs/Dead_messageCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneDead_messageArgs {
  @TypeGraphQL.Field(_type => Dead_messageCreateInput, {
    nullable: false
  })
  data!: Dead_messageCreateInput;
}
